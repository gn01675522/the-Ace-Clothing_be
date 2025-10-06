import { SALE_SCOPE_CLASSES } from 'src/db/model/auxiliary/sale_scope/sale_scope.aux.types';
import { SALE_TYPE_CLASSES } from 'src/db/model/auxiliary/sale_type/sale_type.aux.types';

export const couponSeed = [
  {
    name: 'test1',
    code: 'test1',
    type: SALE_TYPE_CLASSES.PERCENTAGE,
    value: 20,
    scope: SALE_SCOPE_CLASSES.GLOBAL,
    target_ids: [],
    start_date: new Date('2025-10-06T13:12:31.508Z'),
    end_date: new Date('2025-11-06T13:12:31.508Z'),
    max_usage: 0,
    per_customer_limit: 0,
    is_enable: true,
    recycled: false,
  },
  {
    name: 'test2',
    code: 'test2',
    type: SALE_TYPE_CLASSES.FIXED,
    value: 200,
    scope: SALE_SCOPE_CLASSES.GLOBAL,
    target_ids: [],
    start_date: new Date('2025-10-06T13:12:31.508Z'),
    end_date: new Date('2025-11-06T13:12:31.508Z'),
    max_usage: 0,
    per_customer_limit: 0,
    is_enable: true,
    recycled: false,
  },
];
