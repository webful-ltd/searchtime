import store from 'react-native-simple-store';
import * as types from './actionTypes';

// setDate action creator
const setDate = (fieldName, newDate) => {
  if (fieldName === 'startDate') {
    console.log('Updating start date in store');
    store.update('dates', { start: newDate });
  } else {
    console.log('Updating end date in store');
    store.update('dates', { end: newDate });
  }

  return {
    type: fieldName === 'startDate' ? types.SET_START_DATE : types.SET_END_DATE,
    newDate,
  };
};

export default setDate;
