// @flow
import React from "react";
import { connect } from "react-redux";

import ScoreList from "./score-list";

const Container = (props) => <ScoreList {...props} />;

const stateToProps = (state) => ({
  playerItems: state.scorePanel.playerItems,
});
const dispatchToProps = () => ({});

const ScoreListContainer = connect(stateToProps, dispatchToProps)(Container);

export default ScoreListContainer;
