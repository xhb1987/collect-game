import { combineReducers } from 'redux';
import letterPanelReducer from './letter-panel/reducer';
import scorePanelReducer from './score-panel/reducer';

const reducer = combineReducers({
  letterPanel: letterPanelReducer,
  scorePanel: scorePanelReducer
});

export default reducer;
