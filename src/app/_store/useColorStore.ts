import { create } from 'zustand';
import { ColorType, subColorType } from '../_types/ColorType';

type ColorProps = {
  mainColor: ColorType;
  subColor: subColorType;
};

type State = {
  color: ColorProps;
};

type Action = {
  setColor: (main: ColorType, sub: subColorType) => void;
};

export const useColorStore = create<State & Action>((set) => ({
  color: { mainColor: 'rgb(29, 155, 240)', subColor: 'rgb(142, 205, 248)' },
  setColor:
   (mainColor: ColorType, subColor: subColorType) => set({ color: { mainColor, subColor } }),
}));

export const empty = {};
