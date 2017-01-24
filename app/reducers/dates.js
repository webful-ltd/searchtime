import * as types from '../actions/actionTypes';

const initialState = {
  start: '2016-01-01',
  end: '2017-01-01',
};

const dates = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_START_DATE:
      return Object.assign({}, state, {
        start: action.newDate,
      });

    case types.SET_END_DATE:
      return Object.assign({}, state, {
        end: action.newDate,
      });

    default:
      return state;
  }
};

export default dates;
