import { INCREMENT, DECREMENT } from './fruits.constants';

const INITIAL_STATE = {
  apples: 0,
  bananas: 0,
  oranges: 0,
};

export const fruitsReducer = (state = INITIAL_STATE, action) => {
  if (action.type === INCREMENT) {
    return {
      ...state,
      [action.payload]: state[action.payload] + 1,
    };
  }

  if (action.type === DECREMENT) {
    return {
      ...state,
      [action.payload]: state[action.payload] - 1,
    };
  }

  return state;
};
