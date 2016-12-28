import expect from 'expect';
import { describe, it } from 'mocha';
import * as actions from '../../app/actions/dates';

describe('actions', () => {
  it('should set a date correctly', () => {
    const expectedResult = {
      type: actions.SET_DATE,
      fieldName: 'testFieldName',
      newDate: '2016-01-01',
    };

    expect(actions.setDate('testFieldName', '2016-01-01'))
      .toEqual(expectedResult);
  });
});
