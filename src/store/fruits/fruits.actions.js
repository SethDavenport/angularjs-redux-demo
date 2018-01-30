import { INCREMENT, DECREMENT } from './fruits.constants';

export const increment = fruitType => ({
  type: INCREMENT,
  payload: fruitType,
});

export const decrement = fruitType => ({
  type: DECREMENT,
  payload: fruitType,
});
