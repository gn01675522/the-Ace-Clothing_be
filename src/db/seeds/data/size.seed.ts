import { SIZE_GROUP_CLASSES } from 'src/db/model/auxiliary/size_group/size_group.aux.types';

export const sizeGroupSeed = [
  { name: SIZE_GROUP_CLASSES.US, recycled: false },
  { name: SIZE_GROUP_CLASSES.normal, recycled: false },
];

export const sizeValueSeed = [
  { group_id: SIZE_GROUP_CLASSES.US, value: '2XS', order: 1, recycled: false },
  { group_id: SIZE_GROUP_CLASSES.US, value: 'XS', order: 2, recycled: false },
  { group_id: SIZE_GROUP_CLASSES.US, value: 'S', order: 3, recycled: false },
  { group_id: SIZE_GROUP_CLASSES.US, value: 'M', order: 4, recycled: false },
  { group_id: SIZE_GROUP_CLASSES.US, value: 'L', order: 5, recycled: false },
  { group_id: SIZE_GROUP_CLASSES.US, value: 'XL', order: 6, recycled: false },
  { group_id: SIZE_GROUP_CLASSES.US, value: '2XL', order: 7, recycled: false },
  { group_id: SIZE_GROUP_CLASSES.US, value: '3XL', order: 8, recycled: false },
  {
    group_id: SIZE_GROUP_CLASSES.normal,
    value: '13 ~ 15',
    order: 9,
    recycled: false,
  },
];
