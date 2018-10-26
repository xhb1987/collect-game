import React from 'react';
import { connect } from 'react-redux';

import ScorePanel from './score-panel';

const Container = props => <ScorePanel {...props} />;

const stateToProps = () => ({});
const dispatchToProps = () => ({});

const ScorePanelContainer = connect(
  stateToProps,
  dispatchToProps
)(Container);

export default ScorePanelContainer;
