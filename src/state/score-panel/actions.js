// @flow
import type { Action, LetterItem } from '../types';

export const UPDATE_SCORE = 'UPDATE_SCORE';
export const RESET_SCORE_PANEL = 'RESET_SCORE_PANEL';

export const resetScorePanelAction = (): Action => ({
  type: RESET_SCORE_PANEL,
  payload: {},
  meta: {}
});

export const updateScoreAction = (item: LetterItem): Action => ({
  type: UPDATE_SCORE,
  payload: item,
  meta: {}
});
