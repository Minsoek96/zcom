import { create } from 'zustand';
import { ThemeType } from '../_types/ThemeType';

type State = {
  theme: ThemeType;
};

type Action = {
  setTheme: (value: ThemeType) => void;
};

export const useThemeStore = create<State & Action>((set) => ({
  theme: 'defaultTheme',
  setTheme: (type: ThemeType) => set(() => ({ theme: type })),
}));

export const empty = {};
