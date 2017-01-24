import expect from 'expect';
import { describe, it } from 'mocha';
import * as types from '../../app/actions/actionTypes';
import setDate from '../../app/actions/setDate';
import setSearchQuery from '../../app/actions/setSearchQuery';

describe('actions', () => {
  it('should set start date correctly', () => {
    const expectedResult = {
      type: types.SET_START_DATE,
      newDate: '2016-05-05',
    };

    expect(setDate('startDate', '2016-05-05'))
      .toEqual(expectedResult);
  });

  it('should set end date correctly', () => {
    const expectedResult = {
      type: types.SET_END_DATE,
      newDate: '2016-07-07',
    };

    expect(setDate('endDate', '2016-07-07'))
      .toEqual(expectedResult);
  });

  it('should set search query correctly', () => {
    const expectedResult = {
      type: types.SET_SEARCH_QUERY,
      searchQuery: 'my search!',
    };

    expect(setSearchQuery('my search!'))
      .toEqual(expectedResult);
  });
});
