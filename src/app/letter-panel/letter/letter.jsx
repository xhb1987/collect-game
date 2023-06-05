import React from "react";
import "./styles.less";

const Letter = ({ letterItem, letterSelect, index }) => (
  <button
    type="button"
    className="letter-item"
    onClick={() => letterSelect(letterItem, index)}
  >
    <span>{letterItem.keyValue}</span>
  </button>
);

export default Letter;
