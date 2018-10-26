import React from 'react';
import { connect } from 'react-redux';
import BonusScore from './bonus-score';

const Container = props => <BonusScore {...props} />;

const stateToProps = () => ({});
const dispatchToProps = () => ({});

const BonusScoreContainer = connect(
  stateToProps,
  dispatchToProps
)(Container);

export default BonusScoreContainer;
