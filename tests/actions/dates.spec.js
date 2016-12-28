import expect from 'expect';
import { describe, it } from 'mocha';
import * as types from '../../app/actions/actionTypes';
import setDate from '../../app/actions/dates';

describe('actions', () => {
  it('should set a date correctly', () => {
    const expectedResult = {
      type: types.SET_DATE,
      fieldName: 'testFieldName',
      newDate: '2016-01-01',
    };

    expect(setDate('testFieldName', '2016-01-01'))
      .toEqual(expectedResult);
  });
});
