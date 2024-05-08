export type FontType = 'xsmall' | 'small' | 'middle' | 'large' | 'xlarge';

export type FontDataProps = {
  id: string;
  font: FontType;
  offset: number;
  idx: number;
};
