'use client';

import { ThemeProvider } from 'styled-components';

import defaultTheme from '@/app/_styles/defaultTheme';
import deepDarkTheme from '@/app/_styles/deepDarkTheme';
import darkTheme from '@/app/_styles/darkTheme';

import useThemeStorage from '@/app/_hooks/useThemeStorage';

import { useColorStore } from '@/app/_store/useColorStore';
import StyledComponentsRegistry from './styledComponentRegistry';

type ProvidersProps = {
  children: React.ReactNode;
};

const themes = {
  defaultTheme,
  darkTheme,
  deepDarkTheme,
};
export default function Providers({ children }: ProvidersProps) {
  const { theme } = useThemeStorage();
  const { color } = useColorStore();

  // TODO : 로컬 스토리지 연결 작업 (로컬 스토리지 ? LocalForage ?)
  // TOOD : 모든 로컬 스토리지 상태 통합하기
  // TODO : 커스텀 훅 호출로인한 useEffect 마운트 초기화 문제 해결
  // TODO : selectedTheme의 불변성을 유지할 방법 생각하기
  // TODO : 셋팅 관련 컴포넌트 관심사 분리 하기
  const selectedTheme = {
    ...themes[theme] || themes.defaultTheme,
    colors: {
      ...themes[theme].colors || themes.defaultTheme.colors,
      mainColor: color.mainColor,
      subColor: color.subColor,
    },
  };

  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
}
