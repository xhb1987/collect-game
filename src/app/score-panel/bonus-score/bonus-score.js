// @flow
import React from 'react';

import './styles.less';

type Props = {
  bonus: number
};

const BonusScore = ({ bonus }: Props) => (
  <div className="bonus-container">
    <span>BONUSES</span>
    <span>{bonus}</span>
  </div>
);

export default BonusScore;
