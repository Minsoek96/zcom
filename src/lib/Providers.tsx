'use client';

import { ThemeProvider } from 'styled-components';
import defaultTheme from '@/app/_styles/defaultTheme';
import deepDarkTheme from '@/app/_styles/deepDarkTheme';
import darkTheme from '@/app/_styles/darkTheme';
import StyledComponentsRegistry from './styledComponentRegistry';

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={deepDarkTheme}>
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
