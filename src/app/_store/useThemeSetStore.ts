import { create } from 'zustand';
import { ThemeType } from '../_types/ThemeType';
import { FontType } from '../_types/FontType';
import { ColorType, subColorType } from '../_types/ColorType';

type ThemeSetProps = {
  theme: ThemeType;
  fontOption: {
    fontSize: FontType;
    offset: number;
  };
  color: {
    mainColor: ColorType;
    subColor: subColorType;
  };
};

type State = {
  themeSettings: ThemeSetProps;
  isMount: boolean;
};

type Action = {
  setTheme: (theme: ThemeType) => void;
  setFontOptions: (fontSize: FontType, offset: number) => void;
  setColor: (mainColor: ColorType, subColor: subColorType) => void;
  setMount: (loading: boolean) => void;
};

const useThemeSetStore = create<State & Action>((set) => ({
  themeSettings: {
    theme: 'defaultTheme',
    fontOption: {
      fontSize: 'middle',
      offset: 52,
    },
    color: {
      mainColor: 'rgb(29, 155, 240)',
      subColor: 'rgb(142, 205, 248)',
    },
  },

  isMount: false,

  setTheme: (theme: ThemeType) => set((state) => ({
    themeSettings: { ...state.themeSettings, theme },
  })),

  setFontOptions: (fontSize:FontType, offset:number) => set((state) => ({
    themeSettings: {
      ...state.themeSettings,
      fontOption: {
        fontSize, offset,
      },
    },
  })),

  setColor: (mainColor:ColorType, subColor:subColorType) => set((state) => ({
    themeSettings: {
      ...state.themeSettings,
      color: {
        mainColor,
        subColor,
      },
    },
  })),

  setMount: (isMount: boolean) => set({
    isMount,
  }),
}));

export default useThemeSetStore;
