import * as types from './actionTypes';

// setSearchQuery action creator
const setSearchQuery = (searchQuery) => {
  console.log('in setSearchQuery!', searchQuery);

  return {
    type: types.SET_SEARCH_QUERY,
    searchQuery,
  };
};

export default setSearchQuery;
