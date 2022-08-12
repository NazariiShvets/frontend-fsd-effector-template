import { routesConfig } from './api.gen';

routesConfig.mocks({
  store: {
    deleteOrder: {
      delay: 1500,
      response: () => Promise.resolve()
    }
  }
});
