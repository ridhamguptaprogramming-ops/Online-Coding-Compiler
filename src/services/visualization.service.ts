// Visualization Service for Multi-language Tracing
declare global {
  interface Window {
    loadPyodide: any;
  }
}

class VisualizationService {
  private pyodide: any = null;
  private isReady = false;
  private isLoading = false;

  async init() {
    if (this.isReady || this.isLoading) return;
    this.isLoading = true;
    try {
      if (!window.loadPyodide) {
        const script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js";
        document.head.appendChild(script);
        await new Promise(resolve => script.onload = resolve);
      }
      this.pyodide = await window.loadPyodide();
      this.isReady = true;
    } catch (error) {
      console.error("Pyodide loading failed:", error);
    } finally {
      this.isLoading = false;
    }
  }

  async getPythonTrace(code: string) {
    await this.init();
    if (!this.isReady) throw new Error("Visualization engine not ready");

    const script = `
import sys
import json
import traceback
from io import StringIO

class TraceCollector:
    def __init__(self):
        self.trace = []
        self.stdout = StringIO()
        self.max_steps = 300
        self.ignore_list = {'sys', 'json', 'traceback', 'StringIO', 'TraceCollector', 'execute_and_trace', 'code_input', 'old_stdout', 'exec_globals', '__name__', '__builtins__', '_pyodide_core', 'mystdout'}

    def capture_frame(self, frame, event, arg):
        if event not in ('line', 'call', 'return'):
            return self.capture_frame
        
        if len(self.trace) >= self.max_steps:
            return None

        frames = []
        curr = frame
        while curr:
            if curr.f_code.co_filename in ('<string>', '<exec>', 'input'):
                locals_data = {}
                for k, v in curr.f_locals.items():
                    if k not in self.ignore_list and not k.startswith('__'):
                        locals_data[k] = self.serialize(v)
                
                name = curr.f_code.co_name
                if name == '<module>': name = 'Main'
                
                frames.insert(0, {
                    "func_name": name,
                    "locals": locals_data,
                    "line": curr.f_lineno
                })
            curr = curr.f_back

        self.trace.append({
            "line": frame.f_lineno,
            "event": event,
            "stack": frames,
            "stdout": self.stdout.getvalue()
        })
        return self.capture_frame

    def serialize(self, obj):
        try:
            if isinstance(obj, (int, float, str, bool, type(None))):
                return obj
            if isinstance(obj, (list, tuple, set)):
                return [self.serialize(i) for i in obj]
            if isinstance(obj, dict):
                return {str(k): self.serialize(v) for k, v in obj.items()}
            return str(obj)
        except:
            return "<object>"

def execute_and_trace(user_code):
    collector = TraceCollector()
    old_stdout = sys.stdout
    sys.stdout = collector.stdout
    
    def trace_dispatch(frame, event, arg):
        if frame.f_code.co_filename in ('<string>', '<exec>', 'input'):
            return collector.capture_frame(frame, event, arg)
        return trace_dispatch

    sys.settrace(trace_dispatch)
    try:
        user_globals = {"__name__": "__main__", "__builtins__": __builtins__}
        exec(user_code, user_globals)
    except Exception as e:
        collector.trace.append({
            "line": 0, "event": "exception", "error": str(e),
            "stack": collector.trace[-1]["stack"] if collector.trace else [],
            "stdout": collector.stdout.getvalue() + "\\n" + str(e)
        })
    finally:
        sys.settrace(None)
        sys.stdout = old_stdout

    return json.dumps(collector.trace)

execute_and_trace(code_input)
`;

    this.pyodide.globals.set("code_input", code);
    const result = await this.pyodide.runPythonAsync(script);
    return JSON.parse(result);
  }

  async getJsTrace(code: string) {
    try {
      const logs: string[] = [];
      const originalLog = console.log;
      console.log = (...args) => logs.push(args.join(' '));

      eval(code);

      console.log = originalLog;
      return [
        {
          line: 1,
          event: 'call',
          stack: [{ func_name: 'Main', locals: {}, line: 1 }],
          stdout: logs.join('\n')
        }
      ];
    } catch (e: any) {
      throw new Error(`JS Tracing Error: ${e.message}`);
    }
  }

  async getTrace(code: string, lang: string) {
    if (lang === 'python') {
      return this.getPythonTrace(code);
    } else if (lang === 'javascript') {
      return this.getJsTrace(code);
    } else if (lang === 'java' || lang === 'cpp') {
      throw new Error(`${lang.toUpperCase()} Tracing Engine: Initializing remote debugger... This language requires server-side instrumentation. Please try Python for instant visualization.`);
    } else {
      throw new Error(`Visualizer currently supports Python and JavaScript. ${lang} support is coming soon.`);
    }
  }
}

export const visualizationService = new VisualizationService();
