import {
  SELECT_ITEM,
  UPDATE_LETTER,
  RESET_LETTER_PANEL,
  resetLetterPanelAction,
  selectItemAction,
  updateLtterAction
} from './actions';

describe('letter panel action test', () => {
  it('should create a action for select item', () => {
    const mockItem = {
      keyValue: 'A',
      point: 50
    };

    const mockAction = {
      type: SELECT_ITEM,
      payload: mockItem,
      meta: {}
    };

    expect(selectItemAction(mockItem)).toEqual(mockAction);
  });

  it('should create a action for update item', () => {
    const mockItem = {
      keyValue: 'B',
      point: 30
    };
    const mockIndex = 1;

    const mockAction = {
      type: UPDATE_LETTER,
      payload: {
        item: mockItem,
        index: mockIndex
      },
      meta: {}
    };

    expect(updateLtterAction(mockItem, mockIndex)).toEqual(mockAction);
  });

  it('should create a action for reset letter panel', () => {
    const mockAction = {
      type: RESET_LETTER_PANEL,
      payload: {},
      meta: {}
    };

    expect(resetLetterPanelAction()).toEqual(mockAction);
  });
});
