import { combineReducers } from 'redux';
import { fruitsReducer } from './fruits';

export const rootReducer = combineReducers({
  fruits: fruitsReducer,
});
