import { useEffect } from 'react';
import LocalStorageService from '../_service/LocalStorageService';
import useThemeSetStore from '../_store/useThemeSetStore';

const useThemeLocalEffect = () => {
  const storage = new LocalStorageService('X-theme');

  const {
    setTheme, setFontOptions, setColor, setMount, isMount,
  } = useThemeSetStore();

  useEffect(() => {
    if (!isMount) {
      const storedSettings = storage.get();
      if (storedSettings) {
        setTheme(storedSettings.theme);
        setFontOptions(storedSettings.fontSize, storedSettings.offset);
        setColor(storedSettings.mainColor, storedSettings.subColor);
      }
      setMount(true);
    }
  }, []);

  return null;
};

export default useThemeLocalEffect;
