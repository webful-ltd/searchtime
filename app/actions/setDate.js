import * as types from './actionTypes';

// setDate action creator
const setDate = (fieldName, newDate) => {
  console.log('in setDate!', fieldName, newDate);

  return {
    type: fieldName === 'startDate' ? types.SET_START_DATE : types.SET_END_DATE,
    newDate,
  };
};

export default setDate;
