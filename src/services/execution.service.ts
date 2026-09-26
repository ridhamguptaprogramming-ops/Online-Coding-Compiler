export type ExecutionStatus =
  | 'ACCEPTED'
  | 'COMPILATION_ERROR'
  | 'RUNTIME_ERROR'
  | 'TIME_LIMIT_EXCEEDED'
  | 'SYSTEM_ERROR';

export interface ExecutionResult {
  status: ExecutionStatus;
  stdout: string;
  stderr: string;
  compileError: string;
  exitCode: number | null;
  executionTime: string;
  memoryUsage: string | null;
  message: string;
}

type ProgressHandler = (progress: number) => void;

const LANGUAGE_MAP: Record<string, string> = {
  c: 'c',
  cpp: 'cpp',
  java: 'java',
  javascript: 'javascript',
  python: 'python3',
};

const getApiUrl = () => import.meta.env.VITE_API_URL?.trim();

const errorResult = (
  status: ExecutionStatus,
  message: string,
  stderr = '',
  compileError = '',
): ExecutionResult => ({
  status,
  stdout: '',
  stderr,
  compileError,
  exitCode: null,
  executionTime: '0.00',
  memoryUsage: null,
  message,
});

class ExecutionService {
  private readonly timeoutMs = 30000;

  async execute(
    sourceCode: string,
    language: string,
    stdin: string,
    onProgress?: ProgressHandler,
  ): Promise<ExecutionResult> {
    const normalizedLanguage = LANGUAGE_MAP[language];
    if (!normalizedLanguage) {
      return errorResult('SYSTEM_ERROR', `Unsupported language: ${language}`);
    }

    const apiUrl = getApiUrl();
    if (!apiUrl) {
      return errorResult(
        'SYSTEM_ERROR',
        'Execution service unavailable. Configure VITE_API_URL and try again.',
      );
    }

    const startedAt = performance.now();
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), this.timeoutMs);
    onProgress?.(10);

    try {
      const endpoint = `${apiUrl.replace(/\/+$/, '')}/submit`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sourceCode,
          language: normalizedLanguage,
          stdin,
          executionMode: 'RUN',
          src: sourceCode,
          lang: normalizedLanguage,
        }),
        signal: controller.signal,
      });
      onProgress?.(70);

      if (!response.ok) {
        const detail = await response.text().catch(() => '');
        const statusMessage = response.status === 400
          ? 'Execution request validation failed.'
          : response.status === 404
            ? 'Execution endpoint not found. Check the API base URL.'
            : response.status >= 500
              ? 'Execution backend encountered a server error.'
              : `Execution service returned HTTP ${response.status}.`;
        return errorResult('SYSTEM_ERROR', detail ? `${statusMessage} ${detail}` : statusMessage, detail || statusMessage);
      }

      const body = await response.json();
      const data = body?.data ?? body;
      const stdout = typeof data?.stdout === 'string'
        ? data.stdout
        : typeof data?.output === 'string'
          ? data.output
          : typeof body?.stdout === 'string' ? body.stdout : typeof body?.output === 'string' ? body.output : '';
      const stderr = typeof data?.stderr === 'string'
        ? data.stderr
        : typeof data?.error === 'string'
          ? data.error
          : typeof body?.stderr === 'string' ? body.stderr : typeof body?.error === 'string' ? body.error : '';
      const backendStatus = String(data?.status || body?.status || '').toUpperCase();
      const reportedCompileError = typeof data?.compileError === 'string'
        ? data.compileError
        : typeof body?.compileError === 'string' ? body.compileError : '';
      const compileFailure = Boolean(reportedCompileError) || backendStatus === 'COMPILATION_ERROR' || backendStatus === 'FAILED';
      const timeoutFailure = backendStatus === 'TIME_LIMIT_EXCEEDED';
      const explicitFailure = body?.success === false || compileFailure || timeoutFailure || backendStatus === 'RUNTIME_ERROR' || backendStatus === 'SYSTEM_ERROR';

      if (explicitFailure || stderr) {
        const compileError = compileFailure
          ? reportedCompileError || stderr || data?.message || 'Compilation failed.'
          : '';
        const status: ExecutionStatus = compileFailure
          ? 'COMPILATION_ERROR'
          : timeoutFailure ? 'TIME_LIMIT_EXCEEDED' : backendStatus === 'SYSTEM_ERROR' ? 'SYSTEM_ERROR' : 'RUNTIME_ERROR';
        onProgress?.(100);
        return {
          status,
          stdout,
          stderr,
          compileError,
          exitCode: typeof data?.exitCode === 'number' ? data.exitCode : null,
          executionTime: ((performance.now() - startedAt) / 1000).toFixed(2),
          memoryUsage: typeof data?.memoryUsage === 'string' || typeof data?.memoryUsage === 'number' ? String(data.memoryUsage) : null,
          message: compileError ? 'Compilation failed.' : data?.message || (timeoutFailure ? 'Execution exceeded the time limit.' : body?.message || 'Program reported an error.'),
        };
      }

      if (typeof data?.stdout !== 'string' && typeof data?.output !== 'string' && typeof body?.stdout !== 'string' && typeof body?.output !== 'string') {
        return errorResult('SYSTEM_ERROR', body?.message || 'Execution service returned an invalid response.');
      }

      onProgress?.(100);
      return {
        status: 'ACCEPTED',
        stdout,
        stderr,
        compileError: '',
        exitCode: typeof data?.exitCode === 'number' ? data.exitCode : 0,
        executionTime: ((performance.now() - startedAt) / 1000).toFixed(2),
        memoryUsage: typeof data?.memoryUsage === 'string' || typeof data?.memoryUsage === 'number' ? String(data.memoryUsage) : null,
        message: stdout ? 'Execution completed.' : 'Program executed successfully with no output.',
      };
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        return errorResult('TIME_LIMIT_EXCEEDED', 'Execution timed out. The execution service did not respond within 30 seconds.');
      }
      const message = error instanceof Error ? error.message : 'Unknown execution service error.';
      const unavailable = error instanceof TypeError || /failed to fetch|networkerror/i.test(message);
      const connectionMessage = unavailable
        ? 'Backend connection error. Check the execution service URL and network, then try again.'
        : message;
      return errorResult('SYSTEM_ERROR', connectionMessage, connectionMessage);
    } finally {
      window.clearTimeout(timeoutId);
    }
  }
}

export const executionService = new ExecutionService();