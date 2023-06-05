import {
  selectItemAction,
  updateLtterAction,
  resetLetterPanelAction,
} from "./letter-panel/actions";
import {
  updateScoreAction,
  resetScorePanelAction,
} from "./score-panel/actions";

export const letterSelectAction = (item, index) => (dispatch) => {
  dispatch(selectItemAction(item));
  dispatch(updateLtterAction(item, index));
  dispatch(updateScoreAction(item));
};

export const startNewGameAction = () => (dispatch) => {
  dispatch(resetLetterPanelAction());
  dispatch(resetScorePanelAction());
};
