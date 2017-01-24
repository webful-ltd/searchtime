import * as types from './actionTypes';

// setDate action creator
const setDate = (fieldName, newDate) => ({
  type: fieldName === 'startDate' ? types.SET_START_DATE : types.SET_END_DATE,
  newDate,
});

export default setDate;
