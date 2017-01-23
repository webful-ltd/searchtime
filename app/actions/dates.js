import * as types from './actionTypes';

const setDate = (fieldName, newDate) => {
  console.log('in setDate!', fieldName, newDate);

  return {
    type: types.SET_DATE,
    fieldName,
    newDate,
  };
};

export default setDate;
