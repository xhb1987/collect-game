import React from 'react';
import TotalScore from './total-score/total-score';
import ResetButtonContainer from './reset-button/reset-button-container';
import './styles.less';

const FooterButton = () => (
  <div className="footer-container">
    <TotalScore />
    <ResetButtonContainer />
  </div>
);

export default FooterButton;
