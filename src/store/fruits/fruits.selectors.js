import { createSelector } from 'reselect';
import _ from 'lodash';

export const selectAllFruits = state => state.fruits;

export const selectApples = createSelector(
  selectAllFruits,
  counts => counts.apples);

export const selectOranges = createSelector(
  selectAllFruits,
  counts => counts.oranges);

export const selectBananas = createSelector(
  selectAllFruits,
  counts => counts.bananas);

export const selectTotalFruits = createSelector(
  selectAllFruits,
  counts => _.chain(counts)
    .values()
    .reduce((a, b) => a + b, 0)
    .value());
