import React from 'react';
import type { LetterItem } from '../../../state/types';
import './styles.less';

type Props = {
  letterItem: LetterItem,
  selectItem: any
};

const Letter = ({ letterItem, selectItem }: Props) => (
  <div
    role="button"
    className="letter-item"
    onClick={() => selectItem(letterItem)}
    onKeyDown={() => selectItem(letterItem)}
    tabIndex="0"
  >
    <span>{letterItem.keyValue}</span>
  </div>
);

export default Letter;
