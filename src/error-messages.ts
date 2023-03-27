/*eslint-disable prettier/prettier */
export const ERROR_MESSAGES = {
  descriptionLength: (minLength: number) => `La description doit comporter au moins ${minLength} caractères`,
  nameLength: (minLength: number, maxLength: number) => `Le nom doit comporter entre ${minLength} et ${maxLength} caractères`,
};
export const lengthErrorMessage = (field: string, minLength: number, maxLength?: number) => {
  if (maxLength) {
    return ERROR_MESSAGES.nameLength(minLength, maxLength);
  }
  return ERROR_MESSAGES.descriptionLength(minLength);
};