// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import Letter from './letter';
import type { LetterItem } from '../../../state/types';
import { letterSelectAction } from '../../../state/actions';

const Container = props => <Letter {...props} />;

const stateToProps = () => ({});
const dispatchToProps = (dispatch: Dispatch<any>) => ({
  letterSelect: (item: LetterItem, index: number) => dispatch(letterSelectAction(item, index))
});

const LetterItemContainer = connect(
  stateToProps,
  dispatchToProps
)(Container);

export default LetterItemContainer;
