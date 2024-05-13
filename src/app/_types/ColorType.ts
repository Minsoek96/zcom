export type ColorType = 'rgb(29, 155, 240)' | 'rgb(255, 212, 0)' | 'rgb(249, 24, 128)' | 'rgb(120, 86, 255)' | 'rgb(255, 122, 0)' | 'rgb(0, 186, 124)'

export type subColorType = 'rgb(142, 205, 248)' | 'rgb(255, 234, 128)'|'rgb(252, 140, 192)'|'rgb(188, 171, 255)'|'rgb(255, 189, 128)' | 'rgb(128, 221, 190)'

export type ColorDataProps = {
  id: string;
  mainColor: ColorType;
  subColor: subColorType;
  text: string;
};
