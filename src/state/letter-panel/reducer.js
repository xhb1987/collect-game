// @flow
import type { Letter } from './types';
import type Action from '../types';

import { generateLetterArray } from '../utils';

import { RESET_LETTER_PANEL, UPDATE_LETTER } from './actions';

const letterArrayAToFGeneration = generateLetterArray('A', 'F');
const isRandom = true;
const initialState = {
  letters: letterArrayAToFGeneration(isRandom)
};

const letterPanelReducer = (
  state: Letter = initialState,
  action: Action
): Letter => {
  switch (action.type) {
    case UPDATE_LETTER: {
      const { index } = action.payload;
      const tempLetterArray = state.letters.slice();
      // remove current selected item
      tempLetterArray.splice(index, 1);

      // add new item
      const tempNoRandomArray = letterArrayAToFGeneration();

      tempLetterArray.push(
        tempNoRandomArray[Math.floor(Math.random() * tempNoRandomArray.length)]
      );

      return Object.assign({}, state, {
        letters: tempLetterArray.slice()
      });
    }
    case RESET_LETTER_PANEL: {
      const newLetterArray = letterArrayAToFGeneration(isRandom);
      return Object.assign({}, state, {
        letters: newLetterArray
      });
    }
    default:
      return state;
  }
};

export default letterPanelReducer;
