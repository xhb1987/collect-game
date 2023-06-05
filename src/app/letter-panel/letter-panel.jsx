import React from "react";

import HeaderTitle from "../component/header-title/header-title";
import LetterContainer from "./letter/letter-container";

import "./styles.less";

const LetterPanel = ({ lettersArray }) => (
  <div className="letter-panel-container">
    <HeaderTitle title="Kahoot! Points" />
    <div className="letter-panel">
      {lettersArray.map((letter, i) => (
        <LetterContainer key={letter.id} letterItem={letter} index={i} />
      ))}
    </div>
  </div>
);

export default LetterPanel;
