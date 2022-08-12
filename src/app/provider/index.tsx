import { SnackbarProvider } from 'notistack';

import type { FC, PropsWithChildren } from 'react';

import { NotificationStack } from '@shared/notification';

import { RouterProvider } from './router';

import { ThemeProvider } from './theme';

const Provider: FC<PropsWithChildren<{}>> = ({ children }) => (
  <RouterProvider>
    <ThemeProvider>
      <SnackbarProvider maxSnack={8} autoHideDuration={3000}>
        <NotificationStack />

        {children}
      </SnackbarProvider>
    </ThemeProvider>
  </RouterProvider>
);

export { Provider };
