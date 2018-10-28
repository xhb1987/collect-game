import {
  resetScorePanelAction,
  updateScoreAction,
  UPDATE_SCORE,
  RESET_SCORE_PANEL
} from './actions';
import scorePanelReducer from './reducer';

describe('score panel reducer test', () => {
  it('should test intial state', () => {
    expect(scorePanelReducer(undefined, [])).toEqual({
      playerItems: [],
      totalScore: 0,
      bonuse: 0
    });
  });

  it('should test reset score state', () => {
    const mockResetScoreAction = {
      type: RESET_SCORE_PANEL,
      payload: {},
      meta: {}
    };
    expect(scorePanelReducer({}, mockResetScoreAction)).toEqual({
      playerItems: [],
      totalScore: 0,
      bonuse: 0
    });
  });

  it('should test update score state', () => {
    const mockUpdateScoreAction = {
      type: UPDATE_SCORE,
      payload: {
        keyValue: 'A',
        point: 50
      }
    };

    const mockScoreState = {
      playerItems: [],
      totalScore: 0,
      bonuse: 0
    };

    expect(scorePanelReducer(mockScoreState, mockUpdateScoreAction)).toEqual({
      playerItems: [{
        keyValue: 'A', qty: 1, bonuse: 0, score: 50
      }],
      totalScore: 50,
      bonuse: 0
    });
  });
});
