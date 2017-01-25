import expect from 'expect';
import { describe, it } from 'mocha';
import rootReducer from '../../app/reducers/index';

const initialState = {
  dates: {
    start: '2016-01-01',
    end: '2017-01-01',
  },
  search: {
    query: '',
  },
};

describe('reducers:', () => {
  describe('dates reducer', () => {
    it('should return the initial state', () => {
      expect(rootReducer(undefined, {}).dates)
        .toEqual(initialState.dates);
    });
  });
});
