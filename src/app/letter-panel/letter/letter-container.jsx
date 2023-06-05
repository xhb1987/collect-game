// @flow
import React from "react";
import { connect } from "react-redux";
import Letter from "./letter";
import { letterSelectAction } from "../../../state/actions";

const Container = (props) => <Letter {...props} />;

const stateToProps = () => ({});
const dispatchToProps = (dispatch) => ({
  letterSelect: (item, index) => dispatch(letterSelectAction(item, index)),
});

const LetterItemContainer = connect(stateToProps, dispatchToProps)(Container);

export default LetterItemContainer;
