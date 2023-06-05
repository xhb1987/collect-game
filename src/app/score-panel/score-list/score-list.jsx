// @flow
import React from 'react';

import ScoreItem from './score-item/score-item';

import './styles.less';



const ScoreList = ({ playerItems }) => (
  <div className="score-list-container">
    <div className="score-item">
      <div className="column">ITEM</div>
      <div className="column">QTY</div>
      <div className="column">SCORE</div>
    </div>
    <div className="score-item-scroll">
      {playerItems.length ? (
        playerItems.map(item => <ScoreItem key={item.keyValue} item={item} />)
      ) : (
        <div className="place-holder">No Itemm selected</div>
      )}
    </div>
  </div>
);

export default ScoreList;
