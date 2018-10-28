// @flow
import type { Dispatch } from 'redux';
import type { LetterItem } from './types';

import {
  selectItemAction,
  updateLtterAction,
  resetLetterPanelAction
} from './letter-panel/actions';
import {
  updateScoreAction,
  resetScorePanelAction
} from './score-panel/actions';

export const letterSelectAction = (item: LetterItem, index: number) => (dispatch: Dispatch<*>) => {
  dispatch(selectItemAction(item));
  dispatch(updateLtterAction(item, index));
  dispatch(updateScoreAction(item));
};

export const startNewGameAction = () => (dispatch: Dispatch<any>) => {
  dispatch(resetLetterPanelAction());
  dispatch(resetScorePanelAction());
};
