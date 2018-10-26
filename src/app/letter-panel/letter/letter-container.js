import React from 'react';
import { connect } from 'react-redux';
import Letter from './letter';
import type { LetterItem } from '../../../state/types';
import { selectItemAction } from '../../../state/letter-panel/actions';

const Container = props => <Letter {...props} />;

const stateToProps = () => ({});
const dispatchToProps = dispatch => ({
  selectItem: (item: LetterItem) => dispatch(selectItemAction(item))
});

const LetterItemContainer = connect(
  stateToProps,
  dispatchToProps
)(Container);

export default LetterItemContainer;
