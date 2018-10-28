// @flow
import React from 'react';
import type { LetterItem } from '../../../state/types';
import './styles.less';

type Props = {
  letterItem: LetterItem,
  letterSelect: any,
  index: number
};

const Letter = ({ letterItem, letterSelect, index }: Props) => (
  <button
    type="button"
    className="letter-item"
    onClick={() => letterSelect(letterItem, index)}
  >
    <span>{letterItem.keyValue}</span>
  </button>
);

export default Letter;
