import {
  CssBaseline,
  ThemeProvider as ThemeProviderInternal
} from '@mui/material';

import type { FC, ReactNode } from 'react';

import React from 'react';

import { theme } from '@shared/config/theme';

const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <ThemeProviderInternal theme={theme}>
    <CssBaseline />

    {children}
  </ThemeProviderInternal>
);

export { ThemeProvider };
