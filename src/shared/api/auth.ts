import axios from 'axios';

import { createStore, sample } from 'effector';

import { http } from './config';

const $headers = createStore({});

const requestWith401statusFailed = sample({
  clock: http.baseHttpFx.failData,
  filter: error => axios.isAxiosError(error) && error.response?.status === 401
});

http.headers($headers);

export { requestWith401statusFailed, $headers };
