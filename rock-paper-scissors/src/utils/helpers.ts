import { PAPER, ROCK, SCISSORS } from "../config/choices";
import { DRAW, GameResult, LOSE, WIN } from "../config/types";

export const randomChoice = (choices: string[]): string => {
  const randomChoiceIndex = Math.floor(Math.random() * choices.length);
  return choices[randomChoiceIndex];
}

export const getResults = (playerChoice: string | null, houseChoice: string): GameResult => {
  if (playerChoice === houseChoice) return DRAW;
  if (playerChoice === ROCK) {
    if (houseChoice === SCISSORS) return WIN;
    return LOSE;
  }
  if (playerChoice === PAPER) {
    if (houseChoice === ROCK) return WIN;
    return LOSE;
  }
  if (playerChoice === SCISSORS) {
    if (houseChoice === PAPER) return WIN;
    return LOSE;
  }
  throw new Error('Invalid choices');
}

