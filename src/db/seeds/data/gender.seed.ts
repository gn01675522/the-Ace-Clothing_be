import { GENDER_CLASSES } from 'src/db/model/auxiliary/gender/gender.aux.types';

export const genderSeed = [
  { name: GENDER_CLASSES.male, recycled: false },
  { name: GENDER_CLASSES.female, recycled: false },
  { name: GENDER_CLASSES.neutral, recycled: false },
];
