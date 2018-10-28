// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import type { Letter } from '../../state/letter-panel/types';
import LetterPanel from './letter-panel';

type Props = {
  lettersArray: Letter
};
class Container extends PureComponent<Props> {
  render() {
    return <LetterPanel {...this.props} />;
  }
}

const stateToProps = (state: Letter) => ({
  lettersArray: state.letterPanel.letters
});
const dispatchToProps = () => ({});

const LetterPanelContainer = connect(
  stateToProps,
  dispatchToProps
)(Container);
export default LetterPanelContainer;
