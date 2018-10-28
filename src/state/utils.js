import { shuffle, has } from 'lodash';
import type { LetterItem, PlayerItem } from './types';
import { letterPoints, bonuseList } from './constants';

export const generateRandomId = (): string => `${Math.random().toString(36).substring(2, 15)}_${Math.random().toString(36).substring(2, 15)}`;

export const generateLetterArray = (startLetter: string, endLetter: string) => (
  isRandom: boolean
): Array<LetterItem> => {
  const tempLetterArray = [];
  const startLetterCharCode = startLetter.charCodeAt(0);
  const endLetterCharCode = endLetter.charCodeAt(0);

  for (let i = startLetterCharCode; i <= endLetterCharCode; i += 1) {
    const tempLetter = String.fromCharCode(i);
    tempLetterArray.push({
      keyValue: tempLetter,
      point: letterPoints[tempLetter],
      id: generateRandomId()
    });
  }

  return isRandom ? shuffle(tempLetterArray) : tempLetterArray;
};

export const getBonuse = (playerItem: PlayerItem): number => {
  const itemKey = playerItem.keyValue;
  if (has(bonuseList, itemKey)) {
    const bonuseItem = bonuseList[itemKey];
    return Math.floor(playerItem.qty / bonuseItem.qty) * bonuseItem.bonuse;
  }

  return 0;
};
