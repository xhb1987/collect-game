import React from 'react';
import { connect } from 'react-redux';
import ResetButton from './reset-button';

const Container = props => <ResetButton {...props} />;

const stateToProps = () => ({});
const dispatchToProps = () => ({});

const ResetButtonContainer = connect(
  stateToProps,
  dispatchToProps
)(Container);

export default ResetButtonContainer;
