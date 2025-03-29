import { useState } from "react";
import { DEFAULT_CHOICES_LIST } from "../../config/choices";
import { DRAW, GameStage, LOSE, WIN } from "../../config/types";
import { randomChoice } from "../../utils/helpers";
import GameEndStage from "../GameEndStage/GameEndStage";
import GamePlayingStage from "../GamePlayingStage/GamePlayingStage";
import GameStartingStage from "../GameStartingStage/GameStartingStage";

type Props = {
  setScore: (prevState: number | ((score: number) => number)) => void;
};

const INITIAL_HOUSE_CHOICE = randomChoice(DEFAULT_CHOICES_LIST);

const GameStageManager = ({ setScore }: Props) => {
  const [stage, setStage] = useState<GameStage>(GameStage.START);
  const [playerChoice, setPlayerChoice] = useState<string>("");
  const [houseChoice, setHouseChoice] = useState<string>(INITIAL_HOUSE_CHOICE);
  const [result, setResult] = useState<string>("");

  switch (stage) {
    case GameStage.PLAYING:
      return (
        <GamePlayingStage
          playerChoice={playerChoice}
          houseChoice={houseChoice}
          updateState={(updatedScore: number) => {
            setStage(GameStage.END);
            setScore((score: number) => score + updatedScore);
            switch (updatedScore) {
              case 1:
                setResult(WIN);
                break;
              case -1:
                setResult(LOSE);
                break;
              default:
                setResult(DRAW);
                break;
            }
          }}
        />
      );
    case GameStage.END:
      return (
        <GameEndStage
          playerChoice={playerChoice}
          houseChoice={houseChoice}
          result={result}
          updateState={() => {
            setStage(GameStage.START);
            setHouseChoice(randomChoice(DEFAULT_CHOICES_LIST));
          }}
        />
      );
    default:
      return (
        <GameStartingStage
          setPlayerChoice={setPlayerChoice}
          updateState={() => setStage(GameStage.PLAYING)}
        />
      );
  }
};

export default GameStageManager;
