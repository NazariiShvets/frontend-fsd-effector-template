import { is } from 'effector';

import { useStoreMap, useUnit } from 'effector-react';

import { createLib } from 'effector-view';

const { createView, connect } = createLib({
  is,
  useUnit,
  useStoreMap
});

export { createView, connect };
