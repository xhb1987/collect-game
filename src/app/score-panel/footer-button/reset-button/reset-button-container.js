// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import { startNewGameAction } from '../../../../state/actions';
import ResetButton from './reset-button';

const Container = props => <ResetButton {...props} />;

const stateToProps = () => ({});
const dispatchToProps = (dispatch: Dispatch<any>) => ({
  startNewGame: () => dispatch(startNewGameAction())
});

const ResetButtonContainer = connect(
  stateToProps,
  dispatchToProps
)(Container);

export default ResetButtonContainer;
