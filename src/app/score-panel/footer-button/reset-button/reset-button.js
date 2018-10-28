// @flow
import React from 'react';

type Props = {
  startNewGame: any
}

const ResetButton = ({ startNewGame }: Props) => (
  <div className="reset-button">
    <button type="button" onClick={startNewGame}>New Game</button>
  </div>
);

export default ResetButton;
