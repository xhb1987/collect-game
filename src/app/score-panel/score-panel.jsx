import React from "react";
import HeaderTitle from "../component/header-title/header-title";
import ScoreListContainer from "./score-list/score-list-container";
import BonusScoreContainer from "./bonus-score/bonus-score-container";
import FooterButtonContainer from "./footer-button/footer-button-container";
import "./styles.less";

const ScorePanel = () => (
  <div className="score-panel-container">
    <HeaderTitle title="PLAYER ITEMS" />
    <ScoreListContainer />
    <BonusScoreContainer />
    <FooterButtonContainer />
  </div>
);

export default ScorePanel;
