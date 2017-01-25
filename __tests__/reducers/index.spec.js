import expect from 'expect';
import rootReducer from '../../app/reducers/index';
import * as types from '../../app/actions/actionTypes';

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

    it('should set the start date', () => {
      const setStartDateAction = {
        type: types.SET_START_DATE,
        newDate: '2016-06-06',
      };
      expect(rootReducer(undefined, setStartDateAction).dates)
        .toEqual({
          start: '2016-06-06',
          end: '2017-01-01',
        });
    });

    it('should set the end date', () => {
      const setEndDateAction = {
        type: types.SET_END_DATE,
        newDate: '2017-02-02',
      };
      expect(rootReducer(undefined, setEndDateAction).dates)
        .toEqual({
          start: '2016-01-01',
          end: '2017-02-02',
        });
    });
  });
});
