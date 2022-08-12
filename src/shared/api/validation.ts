import { array, mixed, number, object, string } from 'yup';

import { routesConfig } from './api.gen';

routesConfig.validation({
  pet: {
    findPetsByStatus: array().of(
      object({
        status: mixed().required(),
        category: mixed().required(),
        name: string().required(),
        tags: array(),
        id: number().required(),
        photoUrls: array()
      })
    )
  }
});
