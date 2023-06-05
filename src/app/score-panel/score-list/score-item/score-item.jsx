import React from "react";

const ScoreItem = ({ item }) => (
  <div className="score-item">
    <div className="column">{item.keyValue}</div>
    <div className="column">{item.qty}</div>
    <div className="column">{item.score + item.bonuse}</div>
  </div>
);

export default ScoreItem;
