import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import SearchTime from './SearchTime';
import searchtimeReducers from '../reducers/index';

const store = createStore(searchtimeReducers);

console.log(store.getState());

const App = () => (
  <Provider store={store}>
    <SearchTime />
  </Provider>
);

export default App;
