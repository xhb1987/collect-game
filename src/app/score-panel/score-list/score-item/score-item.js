// @flow
import React from 'react';

import { PlayerItem } from '../../../../state/types';

type Props = {
  item: PlayerItem
};

const ScoreItem = ({ item }: Props) => (
  <div className="score-item">
    <div className="column">{item.keyValue}</div>
    <div className="column">{item.qty}</div>
    <div className="column">{item.score + item.bonuse}</div>
  </div>
);

export default ScoreItem;
