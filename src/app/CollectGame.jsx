import React from "react";
import LetterPanelContainer from "./letter-panel/letter-panel-container";
import ScorePanelContainer from "./score-panel/score-panel-container";
import "./styles.less";

export const CollectGame = () => (
  <div className="game-container">
    <LetterPanelContainer />
    <ScorePanelContainer />
  </div>
);
