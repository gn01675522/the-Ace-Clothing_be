export const parsePaginationNumberUtils = (
  value: string | number | undefined | null,
  defaultValue: number,
  minValue: number,
): number => {
  const parsed = Number(value);

  if (isNaN(parsed)) return defaultValue;

  return Math.max(Math.floor(parsed), minValue);
};
