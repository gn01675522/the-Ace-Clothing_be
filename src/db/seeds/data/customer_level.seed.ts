import { CUSTOMER_LEVEL_CLASSES } from 'src/db/model/auxiliary/customer_level/customer_level.aux.types';

export const customerLevelSeed = [
  {
    name: CUSTOMER_LEVEL_CLASSES.diamond,
    order: 4,
    recycled: false,
  },
  {
    name: CUSTOMER_LEVEL_CLASSES.gold,
    order: 3,
    recycled: false,
  },
  {
    name: CUSTOMER_LEVEL_CLASSES.platinum,
    order: 2,
    recycled: false,
  },
  {
    name: CUSTOMER_LEVEL_CLASSES.normal,
    order: 1,
    recycled: false,
  },
];
