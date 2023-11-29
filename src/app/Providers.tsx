'use client';

import StyledComponentsRegistry from '@/lib/registry';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';
import GlobalStyles from '@/styles/GlobalStyles';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
