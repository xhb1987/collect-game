// flow
import type { Action } from '../types';
import type { Score } from './types';

const initialState = {};

const scorePanelReducer = (state: Score = initialState, action: Action): Score => {
  switch (action) {
    default:
      return state;
  }
};

export default scorePanelReducer;
