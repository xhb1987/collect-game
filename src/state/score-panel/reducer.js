// @flow
import { UPDATE_SCORE, RESET_SCORE_PANEL } from "./actions";

import { getBonuse } from "../utils";

const initialState = {
  playerItems: [],
  totalScore: 0,
  bonuse: 0,
};

const scorePanelReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_SCORE_PANEL:
      return Object.assign({}, state, {
        playerItems: [],
        totalScore: 0,
        bonuse: 0,
      });
    case UPDATE_SCORE: {
      const tempItem = action.payload;
      let tempPlayerItems = state.playerItems.slice();

      if (
        tempPlayerItems.length &&
        tempPlayerItems.some((item) => item.keyValue === tempItem.keyValue)
      ) {
        tempPlayerItems = tempPlayerItems.map((item) => {
          if (item.keyValue === tempItem.keyValue) {
            const temp = Object.assign({}, item, {
              score: item.score + tempItem.point,
              qty: item.qty + 1,
            });

            return Object.assign({}, temp, {
              bonuse: getBonuse(temp),
            });
          }
          return item;
        });
      } else {
        tempPlayerItems.push(
          Object.assign(
            {},
            {
              keyValue: tempItem.keyValue,
              qty: 1,
              score: tempItem.point,
              bonuse: 0,
            }
          )
        );
      }

      const bonuse = tempPlayerItems.reduce((pValue, cValue) => {
        const sumBonues = pValue + cValue.bonuse;
        return sumBonues;
      }, 0);

      const totalScore =
        tempPlayerItems.reduce((pValue, cValue) => {
          const sumTotal = pValue + cValue.score;
          return sumTotal;
        }, 0) + bonuse;

      return Object.assign({}, state, {
        playerItems: tempPlayerItems,
        totalScore,
        bonuse,
      });
    }

    default:
      return state;
  }
};

export default scorePanelReducer;
