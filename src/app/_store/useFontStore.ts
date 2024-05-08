import { create } from 'zustand';
import { FontType } from '../_types/FontType';

type State = {
  fontSize: FontType;
  selectedOffset: number;
};

type Action = {
  setFontSize: (value: FontType) => void;
  setSelectedOffset: (offset: number) => void;
};

export const useFontStore = create<State & Action>((set) => ({
  fontSize: 'middle',
  setFontSize: (type: FontType) => set(() => ({ fontSize: type })),
  selectedOffset: 52,
  setSelectedOffset: (offset: number) => set(() => ({ selectedOffset: offset })),
}));

export const empty = {};
