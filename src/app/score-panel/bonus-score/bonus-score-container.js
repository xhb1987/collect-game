// @flow
import React from 'react';
import { connect } from 'react-redux';
import BonusScore from './bonus-score';

const Container = props => <BonusScore {...props} />;

const stateToProps = state => ({
  bonus: state.scorePanel.bonuse
});
const dispatchToProps = () => ({});

const BonusScoreContainer = connect(
  stateToProps,
  dispatchToProps
)(Container);

export default BonusScoreContainer;
