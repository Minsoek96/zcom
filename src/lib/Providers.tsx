'use client';

import { ThemeProvider } from 'styled-components';
import defaultTheme from '@/app/_styles/defaultTheme';
import deepDarkTheme from '@/app/_styles/deepDarkTheme';
import darkTheme from '@/app/_styles/darkTheme';
import { useThemeStore } from '@/app/_store/useThemeStore';
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
  const { theme } = useThemeStore();

  // TODO : 로컬 스토리지 연결 작업 (로컬 스토리지 ? LocalForage ?)
  const selectedTheme = themes[theme] || themes.defaultTheme;
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
}
