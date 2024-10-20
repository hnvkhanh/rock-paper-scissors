import { get } from "lodash";
import PlayerChoice from "../PlayerChoice/PlayerChoice";
import { DEFAULT_CHOICES } from "../../config/choices";
import Button from "../Button/Button";
import ResultText from "../ResultText/ResultText";

import css from "./GameEndStage.module.css";

const GameEndStage = ({ result, playerChoice, houseChoice, updateState }: {
  result: string,
  playerChoice: string,
  houseChoice: string,
  updateState: () => void
}) => {
  return <div className={css.container}>
    <div className={css.choicesContainer}>
      <div className={css.choice}>
        <PlayerChoice properties={get(DEFAULT_CHOICES, playerChoice)} hasBackground />
        <p className={css.choiceText}>YOU PICKED</p>
      </div>

      <div className={css.choice}>
        <PlayerChoice properties={get(DEFAULT_CHOICES, houseChoice)} />
        <p className={css.choiceText}>THE HOUSE PICKED</p>
      </div>
    </div>
    <div className={css.resultContainer}>
      <ResultText result={result} />
      <Button filled className={css.playAgain} onClick={updateState}>
        PLAY AGAIN
      </Button>
    </div>
  </div>
};

export default GameEndStage;