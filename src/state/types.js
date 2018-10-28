export type Action = {
  type: string,
  payload: any,
  meta: any
};

export type LetterItem = {
  keyValue: string,
  point: number
};

export type PlayerItem = {
  keyValue: string,
  qty: number,
  score: number,
  bonuse: number
};
