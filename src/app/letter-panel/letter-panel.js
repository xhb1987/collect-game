import React from 'react';
import type { Letter } from '../../state/letter-panel/types';

import HeaderTitle from '../component/header-title/header-title';
import LetterContainer from './letter/letter-container';

import './styles.less';

type Props = {
  lettersArray: Letter
};

const LetterPanel = ({ lettersArray }: Props) => (
  <div className="letter-panel-container">
    <HeaderTitle title="Kahoot! Points" />
    <div className="letter-panel">
      {lettersArray.map(letter => (
        <LetterContainer key={letter.keyValue} letterItem={letter} />
      ))}
    </div>
  </div>
);

export default LetterPanel;
