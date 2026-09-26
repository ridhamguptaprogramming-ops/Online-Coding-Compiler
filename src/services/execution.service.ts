// Execution Service - Handles fast code execution via external API
export interface ExecutionResult {
  output: string;
  executionTime?: string;
  cached?: boolean;
  error?: boolean;
}

class ExecutionService {
  private cache = new Map<string, { result: string; timestamp: number; executionTime: string }>();
  private activeRequests = new Map<string, AbortController>();
  private inFlight = new Map<string, Promise<ExecutionResult>>();
  private connectionWarmed = false;
  private cacheDuration = 12000;
  private warmupDelay = 500;
  private apiUrl = "https://code-box.onrender.com/api/v1/submit";

  constructor() {
    if (typeof window !== 'undefined') {
      setTimeout(() => this.warmConnection(), this.warmupDelay);
    }
  }

  private getCacheKey(code: string, lang: string, input: string): string {
    return `${lang}:${code.length}:${code.slice(0, 120).replace(/\s/g, '')}:${input || ''}`;
  }

  private preprocessCode(code: string, lang: string): string {
    if (lang !== 'java') return code;
    const normalized = (code || '').replace(/\r\n/g, '\n').trim();
    if (!normalized) return code;

    // Most online Java runners expect class Main as the entrypoint.
    if (/public\s+class\s+Main\b/.test(normalized) || /class\s+Main\b/.test(normalized)) {
      return normalized;
    }

    const withPublicClass = normalized.replace(/public\s+class\s+([A-Za-z_]\w*)/m, 'public class Main');
    if (withPublicClass !== normalized) return withPublicClass;

    return normalized.replace(/class\s+([A-Za-z_]\w*)/m, 'class Main');
  }

  private getTimeoutForLang(lang: string): number {
    if (lang === 'java') return 25000;
    if (lang === 'cpp' || lang === 'c') return 22000;
    return 18000;
  }

  async warmConnection() {
    if (this.connectionWarmed || typeof window === 'undefined') return;
    this.connectionWarmed = true;
    const warmups = [
      { src: "print('ready')", lang: "python3", stdin: "" },
      { src: "class Main { public static void main(String[] args){ System.out.print(1); } }", lang: "java", stdin: "" }
    ];

    await Promise.allSettled(warmups.map((payload) => fetch(this.apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true,
    })));
  }

  async execute(code: string, lang: string, input: string, onProgress?: (progress: number) => void): Promise<ExecutionResult> {
    const normalizedCode = this.preprocessCode(code, lang);
    const cacheKey = this.getCacheKey(normalizedCode, lang, input);
    const cached = this.cache.get(cacheKey);

    if (cached && Date.now() - cached.timestamp < this.cacheDuration) {
      if (onProgress) onProgress(100);
      return { output: cached.result, cached: true, executionTime: cached.executionTime };
    }

    if (this.inFlight.has(cacheKey)) {
      return this.inFlight.get(cacheKey)!;
    }

    if (this.activeRequests.has(lang)) {
      this.activeRequests.get(lang)?.abort();
    }

    const controller = new AbortController();
    this.activeRequests.set(lang, controller);

    const langMap: Record<string, string> = {
      'python': 'python3',
      'javascript': 'nodejs',
      'typescript': 'typescript',
      'java': 'java',
      'cpp': 'cpp',
      'c': 'c'
    };

    const apiLang = langMap[lang] || lang;
    const startTime = performance.now();
    const executePromise = (async (): Promise<ExecutionResult> => {
      try {
        if (onProgress) {
          onProgress(20);
          setTimeout(() => onProgress(45), 80);
          setTimeout(() => onProgress(70), 250);
        }

        const timeoutId = setTimeout(() => controller.abort(), this.getTimeoutForLang(lang));

        const response = await fetch(this.apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({
            src: normalizedCode,
            lang: apiLang,
            stdin: input || "",
          }),
          signal: controller.signal,
        });
        clearTimeout(timeoutId);

        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const result = await response.json();
        const output = result.data?.output || result.data?.error || result.output || "No output";

        if (onProgress) onProgress(100);
        const executionTime = ((performance.now() - startTime) / 1000).toFixed(2);

        if (!output.includes('Error') && !output.includes('timeout')) {
          this.cache.set(cacheKey, { result: output, timestamp: Date.now(), executionTime });
          if (this.cache.size > 50) {
            const firstKey = this.cache.keys().next().value;
            if (firstKey) this.cache.delete(firstKey);
          }
        }

        return { output, executionTime, cached: false };
      } catch (error: any) {
        if (error.name === 'AbortError') {
          return { output: `❌ Timeout after ${Math.round(this.getTimeoutForLang(lang) / 1000)}s`, executionTime: "0.00", error: true };
        }
        return { output: `❌ ${error.message}`, executionTime: "0.00", error: true };
      } finally {
        this.activeRequests.delete(lang);
        this.inFlight.delete(cacheKey);
      }
    })();

    this.inFlight.set(cacheKey, executePromise);
    return executePromise;
  }

  clearCache() { this.cache.clear(); }
}

export const executionService = new ExecutionService();
