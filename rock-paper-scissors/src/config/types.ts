export const WIN = 'win';
export const LOSE = 'lose';
export const DRAW = 'draw';
export enum GameStage {
  START,
  PLAYING,
  END,
}

export type GameResult = 'win' | 'lose' | 'draw';

export type ChoiceProperties = {
  name: string,
  image: string,
  defeats: string[],
}