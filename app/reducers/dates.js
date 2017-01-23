import * as types from '../actions/actionTypes';

const dates = (state = {}, action) => {
  switch (action.type) {

    case types.SET_DATE:
      console.log('in setDate reducer');
      console.log('TYPE ', action.type);

      return {
        startDate: action.newDate,
      };

    default:
      return state;
  }
};

export default dates;
