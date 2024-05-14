import { useCallback } from 'react';

import LocalStorageService from '../_service/LocalStorageService';

import { ThemeType } from '../_types/ThemeType';
import { FontType } from '../_types/FontType';
import useThemeSetStore from '../_store/useThemeSetStore';
import { ColorType, subColorType } from '../_types/ColorType';

// TODO useRef 처리
const storage = new LocalStorageService('X-theme');

export default function useThemeStorage() {
  const {
    setTheme, setFontOptions, themeSettings, setColor,
  } = useThemeSetStore();

  const { fontOption, theme, color } = themeSettings;

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
    [],
  );

  const handleChangeFont = useCallback(
    (fontSize: FontType, offset: number) => {
      updateStorage({ fontSize, offset });
      setFontOptions(fontSize, offset);
    },
    [],
  );

  const handleChangeColor = useCallback(
    (mainColor: ColorType, subColor: subColorType) => {
      updateStorage({ mainColor, subColor });
      setColor(mainColor, subColor);
    },
    [],
  );

  return {
    handleChangeTheme,
    handleChangeFont,
    handleChangeColor,
    fontOption,
    theme,
    color,
  };
}
