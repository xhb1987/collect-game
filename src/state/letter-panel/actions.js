// @flow
import type { Action, LetterItem } from "../types";

export const SELECT_ITEM = "SELECT_ITEM";
export const UPDATE_LETTER = "UPDATE_LETTER";
export const RESET_LETTER_PANEL = "RESET_LETTER_PANEL";

export const resetLetterPanelAction = (): Action => ({
  type: RESET_LETTER_PANEL,
  payload: {},
  meta: {},
});

export const selectItemAction = (item: LetterItem): Action => ({
  type: SELECT_ITEM,
  payload: item,
  meta: {},
});

export const updateLtterAction = (item: LetterItem, index: number): Action => ({
  type: UPDATE_LETTER,
  payload: { item, index },
  meta: {},
});
