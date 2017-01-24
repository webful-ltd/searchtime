import { combineReducers } from 'redux';
import dates from './dates';
import search from './search';

const searchtimeReducers = combineReducers({
  dates,
  search,
});

export default searchtimeReducers;
