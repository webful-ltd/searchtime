import * as types from './actionTypes';

// setSearchQuery action creator
const setSearchQuery = searchQuery => ({
  type: types.SET_SEARCH_QUERY,
  searchQuery,
});

export default setSearchQuery;
