import { createSignal } from 'solid-js';
import { storageService } from '../services/storage.service';

const [uiTheme, setUiTheme] = createSignal<'light' | 'dark'>(storageService.getUiTheme());

export const useTheme = () => {
  const toggleTheme = () => {
    const newTheme = uiTheme() === 'light' ? 'dark' : 'light';
    setUiTheme(newTheme);
    storageService.saveUiTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return { uiTheme, setUiTheme, toggleTheme };
};
