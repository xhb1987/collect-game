import React from "react";

const ResetButton = ({ startNewGame }) => (
  <div className="reset-button">
    <button type="button" onClick={startNewGame}>
      New Game
    </button>
  </div>
);

export default ResetButton;
