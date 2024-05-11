import { create } from 'zustand';
import { FontType } from '../_types/FontType';

type FontOptionProps = {
  fontSize: FontType;
  offset: number;
};

type State = {
  fontOption: FontOptionProps;
};

type Action = {
  setFontOptions: (size: FontType, offset: number) => void;
};

export const useFontStore = create<State & Action>((set) => ({
  fontOption: { fontSize: 'middle', offset: 52 },
  setFontOptions: (fontSize: FontType, offset: number) => set({ fontOption: { fontSize, offset } }),
}));

export const empty = {};
