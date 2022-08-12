import './styles/global.scss';

import type { FC } from 'react';

import { Pages } from '@pages';

import { Provider } from './provider';

const App: FC = () => (
  <Provider>
    <Pages />
  </Provider>
);

export { App };
