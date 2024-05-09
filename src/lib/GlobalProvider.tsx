'use client';

import { useFontStore } from '@/app/_store/useFontStore';
import GlobalStyle from '@/app/_styles/GlobalStyle';

type FontInfoProps = {
    xsmall: number;
    small: number;
    middle: number;
    large: number;
    xlarge: number;
  };

const fontInfo: FontInfoProps = {
  xsmall: 54.5,
  small: 58.5,
  middle: 62.5,
  large: 66.5,
  xlarge: 70.5,
};

// type ThemeInfoProps = {
//   white: string;
//   dark: string;
//   deepDark: string;
// }

// const ThemeInfo: ThemeInfoProps = {
//   white: '#FFF',
//   dark: 'rgb(21, 32, 43)',
//   deepDark: 'rgb(0, 0, 0)',
// };

export default function GlobalProvider() {
  const { fontSize } = useFontStore();
  return (
    <GlobalStyle $font={fontInfo[fontSize]} />
  );
}
