import { routesConfig } from './api.gen';

routesConfig.options({
  store: {
    getInventory: {
      batch: true
    }
  }
});
