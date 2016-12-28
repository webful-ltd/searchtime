import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import SearchTime from './SearchTime';
import * as reducers from '../reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <SearchTime />
  </Provider>
);

export default App;
