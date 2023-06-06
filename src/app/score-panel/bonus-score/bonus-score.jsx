import "./styles.less";

const BonusScore = ({ bonus }) => (
  <div className="bonus-container">
    <span>BONUSES</span>
    <span>{bonus}</span>
  </div>
);

export default BonusScore;
