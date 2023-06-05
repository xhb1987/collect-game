// @flow
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import LetterPanel from "./letter-panel";

class Container extends PureComponent {
  render() {
    return <LetterPanel {...this.props} />;
  }
}

const stateToProps = (state) => ({
  lettersArray: state.letterPanel.letters,
});
const dispatchToProps = () => ({});

const LetterPanelContainer = connect(stateToProps, dispatchToProps)(Container);
export default LetterPanelContainer;
