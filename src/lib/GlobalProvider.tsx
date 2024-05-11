'use client';

import useThemeStorage from '@/app/_hooks/useThemeStorage';

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

export default function GlobalProvider() {
  const { fontOption } = useThemeStorage();
  return <GlobalStyle $font={fontInfo[fontOption.fontSize]} />;
}
