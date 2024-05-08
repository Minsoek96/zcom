'use client';

import { ThemeProvider } from 'styled-components';
import defaultTheme from '@/app/_styles/defaultTheme';
import StyledComponentsRegistry from './styledComponentRegistry';

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={defaultTheme}>
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
