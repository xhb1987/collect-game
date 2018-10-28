import type { PlayerItem } from '../types';

export type Score = {
  playerItems: Array<PlayerItem>,
  bonuse: number,
  totalScore: number
};
