import React from "react";
import TotalScore from "./total-score/total-score";
import ResetButtonContainer from "./reset-button/reset-button-container";
import "./styles.less";

const FooterButton = ({ totalScore }) => (
  <div className="footer-container">
    <TotalScore totalScore={totalScore} />
    <ResetButtonContainer />
  </div>
);

export default FooterButton;
