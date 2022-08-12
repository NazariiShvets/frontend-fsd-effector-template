import { attach, combine, createEvent, createStore } from 'effector';

import type { Action, BrowserHistory, Location, To, Update } from 'history';

import { history } from './instance';

const historyChanged = createEvent<Update>();

const $history = createStore<BrowserHistory>(history);

const $location = createStore<Location>(history.location);

const $action = createStore<Action>(history.action);

const pushFx = attach({
  source: $history,
  effect: (history, url: To) => history.push(url)
});

history.listen(historyChanged);

$action.on(historyChanged, (_, { action }) => action);

$location.on(historyChanged, (_, { location }) => location);

const $router = combine({
  history: $history,
  location: $location,
  action: $action
});

export { pushFx, $router };
