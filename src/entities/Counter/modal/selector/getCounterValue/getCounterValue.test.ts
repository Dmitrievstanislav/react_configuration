import {StateSchema} from 'app/providers/StoreProvider';
import {DeepPartial} from '@reduxjs/toolkit';
import {getCounterValue} from './getCounterValue';
describe('getCounterValue', () => {
  test('should return a counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {value: 10},
    };
    expect(getCounterValue(state as StateSchema)).toEqual(10);
  });
});
