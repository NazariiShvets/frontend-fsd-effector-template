import type { FC } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { routes } from '@shared/config/routes';

const Pages: FC = () => (
  <Routes>
    <Route path={routes.home()} element={<div>Hello World!</div>} />

    <Route path='*' element={<Navigate to={routes.home()} />} />
  </Routes>
);

export { Pages };
