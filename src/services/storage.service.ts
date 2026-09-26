// Storage Service - Handles persistence
class StorageService {
  private PREFIX = 'codearena_';

  private get<T>(key: string, defaultValue: T): T {
    try {
      const item = localStorage.getItem(this.PREFIX + key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
      console.error(`Error reading ${key} from storage:`, e);
      return defaultValue;
    }
  }

  private set<T>(key: string, value: T) {
    try {
      localStorage.setItem(this.PREFIX + key, JSON.stringify(value));
    } catch (e) {
      console.error(`Error saving ${key} to storage:`, e);
    }
  }

  remove(key: string) {
    localStorage.removeItem(this.PREFIX + key);
  }

  getFiles(): any[] {
    return this.get('files', []);
  }

  saveFiles(files: any[]) {
    this.set('files', files);
  }

  getTheme(): string {
    return this.get('theme', 'vs-dark');
  }

  saveTheme(theme: string) {
    this.set('theme', theme);
  }

  getUiTheme(): 'light' | 'dark' {
    return this.get('ui_theme', 'light');
  }

  saveUiTheme(theme: 'light' | 'dark') {
    this.set('ui_theme', theme);
  }

  getFontSize(): number {
    return this.get('fontsize', 16);
  }

  saveFontSize(size: number) {
    this.set('fontsize', size);
  }

  saveActiveFileForVisualization(file: { code: string; lang: string }) {
    this.set('viz_handoff', file);
  }

  getActiveFileForVisualization(): { code: string; lang: string } | null {
    return this.get('viz_handoff', null);
  }
}

export const storageService = new StorageService();
