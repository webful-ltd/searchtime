export const SET_DATE = 'SET_DATE';

export function setDate(fieldName, newDate) {
  return {
    type: SET_DATE,
    fieldName,
    newDate,
  };
}
