import type { FC, PropsWithChildren } from 'react';

import { RouterProvider } from './router';

const Provider: FC<PropsWithChildren<{}>> = ({ children }) => (
  <RouterProvider>{children}</RouterProvider>
);

export { Provider };
