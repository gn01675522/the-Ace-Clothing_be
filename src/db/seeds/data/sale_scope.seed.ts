import { SALE_SCOPE_CLASSES } from 'src/db/model/auxiliary/sale_scope/sale_scope.aux.types';

export const saleScopeSeed = [
  { name: SALE_SCOPE_CLASSES.CATEGORY },
  { name: SALE_SCOPE_CLASSES.GLOBAL },
  { name: SALE_SCOPE_CLASSES.PRODUCT },
  { name: SALE_SCOPE_CLASSES.SKU },
];
