import expect from 'expect';
import { describe, it } from 'mocha';
import * as types from '../../app/actions/actionTypes';
import setDate from '../../app/actions/setDate';

describe('actions', () => {
  it('should set a date correctly', () => {
    const expectedResult = {
      type: types.SET_START_DATE,
      newDate: '2016-05-05',
    };

    expect(setDate('startDate', '2016-05-05'))
      .toEqual(expectedResult);
  });
});
