import { useCallback, useEffect } from 'react';

import { useThemeStore } from '../_store/useThemeStore';

import LocalStorageService from '../_service/LocalStorageService';

import { ThemeType } from '../_types/ThemeType';
import { useFontStore } from '../_store/useFontStore';
import { FontType } from '../_types/FontType';

export default function useThemeStorage() {
  const { setTheme, theme } = useThemeStore();
  const { setFontOptions, fontOption } = useFontStore();

  const storage = new LocalStorageService('X-theme');

  const updateStorage = <T extends object>(updates: T) => {
    const currentSaveMode = storage.get() || {};
    const newSaveMode = { ...currentSaveMode, ...updates };
    storage.save(newSaveMode);
  };

  const handleChangeTheme = useCallback(
    (themeType: ThemeType) => {
      updateStorage({ theme: themeType });
      setTheme(themeType);
    },
    [theme],
  );

  const handleChangeFont = useCallback(
    (fontSize: FontType, offset: number) => {
      updateStorage({ fontSize, offset });
      setFontOptions(fontSize, offset);
    },
    [fontOption],
  );

  useEffect(() => {
    const storedSettings = storage.get() || {};
    if (storedSettings.theme) setTheme(storedSettings.theme);
    if (storedSettings.fontSize && storedSettings.offset) {
      setFontOptions(storedSettings.fontSize, storedSettings.offset);
    }
  }, []);

  return {
    handleChangeTheme,
    handleChangeFont,
    fontOption,
    theme,
  };
}
