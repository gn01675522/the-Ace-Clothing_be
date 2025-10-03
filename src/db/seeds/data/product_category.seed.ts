import { PRODUCT_CATEGORY_CLASSES } from 'src/db/model/auxiliary/product_category/product_category.aux.types';

export const productCategorySeed = [
  {
    name: PRODUCT_CATEGORY_CLASSES.accessory,
    parent: null,
    recycled: false,
  },
  {
    name: PRODUCT_CATEGORY_CLASSES.hat,
    parent: null,
    recycled: false,
  },
  {
    name: PRODUCT_CATEGORY_CLASSES.top,
    parent: null,
    recycled: false,
  },
  {
    name: PRODUCT_CATEGORY_CLASSES.bottom,
    parent: null,
    recycled: false,
  },
  {
    name: PRODUCT_CATEGORY_CLASSES.shoe,
    parent: null,
    recycled: false,
  },
];

export const subProductCategorySeed = [
  {
    name: PRODUCT_CATEGORY_CLASSES.belt,
    parent: PRODUCT_CATEGORY_CLASSES.accessory,
    recycled: false,
  },
  {
    name: PRODUCT_CATEGORY_CLASSES.bracelet,
    parent: PRODUCT_CATEGORY_CLASSES.accessory,
    recycled: false,
  },
  {
    name: PRODUCT_CATEGORY_CLASSES.necklace,
    parent: PRODUCT_CATEGORY_CLASSES.accessory,
    recycled: false,
  },
  {
    name: PRODUCT_CATEGORY_CLASSES.covering,
    parent: PRODUCT_CATEGORY_CLASSES.accessory,
    recycled: false,
  },
  {
    name: PRODUCT_CATEGORY_CLASSES.ring,
    parent: PRODUCT_CATEGORY_CLASSES.accessory,
    recycled: false,
  },
];
