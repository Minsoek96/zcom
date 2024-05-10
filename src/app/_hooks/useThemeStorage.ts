import { useCallback, useEffect } from 'react';
import { useThemeStore } from '../_store/useThemeStore';
import LocalStorageService from '../_service/LocalStorageService';
import { ThemeType } from '../_types/ThemeType';

// type StorageType = {
//     data : string;
//     key : string;
// }
export default function useThemeStorage() {
  const { setTheme, theme } = useThemeStore();
  const storage = new LocalStorageService('X-theme');

  const handleChangeTheme = useCallback(
    (themeType: ThemeType) => {
      storage.save(themeType);
      setTheme(themeType);
    },
    [theme],
  );

  useEffect(() => {
    const currentSaveMode = storage.get();
    if (currentSaveMode) {
      setTheme(currentSaveMode);
    }
  }, []);

  return {
    handleChangeTheme,
    theme,
  };
}
