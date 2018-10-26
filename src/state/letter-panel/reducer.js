import type { Letter } from './types';
import type Action from '../types';

const initialState = {
  letters: [
    { keyValue: 'A', point: 50 },
    { keyValue: 'B', point: 30 },
    { keyValue: 'C', point: 20 },
    { keyValue: 'D', point: 15 },
    { keyValue: 'E', point: 12.5 }
  ]
};

const letterPanelReducer = (state: Letter = initialState, action: Action): Letter => {
  switch (action) {
    default:
      return state;
  }
};

export default letterPanelReducer;
