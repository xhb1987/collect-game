export const SELECT_ITEM = "SELECT_ITEM";
export const UPDATE_LETTER = "UPDATE_LETTER";
export const RESET_LETTER_PANEL = "RESET_LETTER_PANEL";

export const resetLetterPanelAction = () => ({
  type: RESET_LETTER_PANEL,
  payload: {},
  meta: {},
});

export const selectItemAction = (item) => ({
  type: SELECT_ITEM,
  payload: item,
  meta: {},
});

export const updateLtterAction = (item, index) => ({
  type: UPDATE_LETTER,
  payload: { item, index },
  meta: {},
});
