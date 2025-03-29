import { useEffect, useState } from "react";
import get from "lodash/get";
import { DEFAULT_CHOICES } from "../../config/choices";
import PlayerChoice from "../PlayerChoice/PlayerChoice";
import { getResults } from "../../utils/helpers";
import { LOSE, WIN } from "../../config/types";

import css from "./GamePlayingStage.module.css";

const GamePlayingStage = ({
  updateState,
  playerChoice,
  houseChoice,
}: {
  updateState: (updatedScore: number) => void;
  playerChoice: string;
  houseChoice: string;
}) => {
  const [showHouseChoice, setShowHouseChoice] = useState(false);
  let updatedScore = 0;
  const result = getResults(playerChoice, houseChoice);
  if (result === WIN) updatedScore = 1;
  if (result === LOSE) updatedScore = -1;

  useEffect(() => {
    const timeoutIdState = setTimeout(() => updateState(updatedScore), 3000);
    const timeoutIdShowChoice = setTimeout(() => setShowHouseChoice(true), 1000);
    return () => {
      clearTimeout(timeoutIdState);
      clearTimeout(timeoutIdShowChoice);
    };
  }, [updateState, updatedScore]);

  if (playerChoice.length === 0) return null;

  const houseChoiceComponent = showHouseChoice ? (
    <PlayerChoice
      properties={get(DEFAULT_CHOICES, houseChoice)}
      containerClassName={css.choiceContainer}
    />
  ) : (
    <div className={css.choicePlaceholder}></div>
  );
  return (
    <div className={css.container}>
      <div className={css.choice}>
        <PlayerChoice
          properties={get(DEFAULT_CHOICES, playerChoice)}
          containerClassName={css.choiceContainer}
        />
        <p className={css.choiceText}>YOU PICKED</p>
      </div>

      <div className={css.choice}>
        {houseChoiceComponent}
        <p className={css.choiceText}>THE HOUSE PICKED</p>
      </div>
    </div>
  );
};

export default GamePlayingStage;
