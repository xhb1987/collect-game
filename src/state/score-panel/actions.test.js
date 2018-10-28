import {
  resetScorePanelAction,
  updateScoreAction,
  UPDATE_SCORE,
  RESET_SCORE_PANEL
} from './actions';

describe('score panel action test', () => {
  it('should create action for udpate score panel', () => {
    const mockItem = {
      keyValue: 'A',
      point: 50
    };

    const mockAction = {
      type: UPDATE_SCORE,
      payload: mockItem,
      meta: {}
    };

    expect(updateScoreAction(mockItem)).toEqual(mockAction);
  });

  it('should create action for reset score panel', () => {
    const mockAction = {
      type: RESET_SCORE_PANEL,
      payload: {},
      meta: {}
    };

    expect(resetScorePanelAction()).toEqual(mockAction);
  });
});
