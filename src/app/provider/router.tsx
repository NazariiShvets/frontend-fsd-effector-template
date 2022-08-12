import type { PropsWithChildren } from 'react';

import { Router } from 'react-router-dom';

import { $router } from '@shared/history';

import { createView } from '@shared/lib/view';

const RouterProvider = createView<PropsWithChildren<{}>>()
  .units({ router: $router })
  .view(({ router, children }) => (
    <Router
      location={router.location}
      navigationType={router.action}
      navigator={router.history}
    >
      {children}
    </Router>
  ));

export { RouterProvider };
