import * as types from './actionTypes';

export default function setDate(fieldName, newDate) {
  return {
    type: types.SET_DATE,
    fieldName,
    newDate,
  };
}
