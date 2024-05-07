export type FontType = '매우작게' | '작게' | '중간' | '크게' | '매우크게';

export type FontData = {
  id: string;
  font: FontType;
  offset: number;
  idx: number;
};
