import type { Action, LetterItem } from '../types';

export const SELECT_ITEM = 'SELECT_ITEM';

export const selectItemAction = (item: LetterItem): Action => ({
  type: SELECT_ITEM,
  payload: item,
  meta: {}
});
