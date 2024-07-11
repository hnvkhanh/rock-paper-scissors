
import PlayerChoice from "../PlayerChoice/PlayerChoice";
import { DEFAULT_CHOICES, PAPER, ROCK, SCISSORS } from "../../config/choices";

import css from "./GameStartingStage.module.css";

type GameStartingStageProps = {
  setPlayerChoice: (choice: string) => void;
  updateState: () => void;
};

const GameStartingStage = ({ setPlayerChoice, updateState }: GameStartingStageProps) => {
  return <div className={css.choicesContainer}>
    <div className={css.firstRow}>
      <PlayerChoice properties={DEFAULT_CHOICES.paper} onClick={() => { setPlayerChoice(PAPER); updateState(); }} />
      <PlayerChoice properties={DEFAULT_CHOICES.scissors} onClick={() => { setPlayerChoice(SCISSORS); updateState(); }} />
    </div>
    <div className={css.secondRow}>
      <PlayerChoice properties={DEFAULT_CHOICES.rock} onClick={() => { setPlayerChoice(ROCK); updateState(); }} />
    </div>
  </div>
};

export default GameStartingStage;