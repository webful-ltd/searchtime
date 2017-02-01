import store from 'react-native-simple-store';
import * as types from './actionTypes';

// setDate action creator
const setDate = (fieldName, newDate) => {
  if (fieldName === 'startDate') {
    store.update('dates', { start: newDate });
  } else {
    store.update('dates', { end: newDate });
  }

  return {
    type: fieldName === 'startDate' ? types.SET_START_DATE : types.SET_END_DATE,
    newDate,
  };
};

export default setDate;
