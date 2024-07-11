export enum GameStage {
  START,
  PLAYING,
  END,
}

export type ChoiceProperties = {
  name: string,
  image: string,
  defeats: string[],
}