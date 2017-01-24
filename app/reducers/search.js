import * as types from '../actions/actionTypes';

const initialState = {
  query: '',
};

export default function search(state = initialState, action) {
  switch (action.type) {
    case types.SET_SEARCH_QUERY:
      return Object.assign({}, state, {
        query: action.searchQuery,
      });

    default:
      return state;
  }
}
