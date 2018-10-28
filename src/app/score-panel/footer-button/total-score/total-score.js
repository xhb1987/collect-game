// @flow
import React from 'react';

type Props = {
  totalScore: number
};

const TotalScore = ({ totalScore }: Props) => (
  <div className="total-score">
    <span>TOTAL</span>
    <span>{totalScore}</span>
  </div>
);

export default TotalScore;
