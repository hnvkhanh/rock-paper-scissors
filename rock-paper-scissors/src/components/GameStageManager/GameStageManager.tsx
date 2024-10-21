import { DEFAULT_CHOICES_LIST } from '../../config/choices';
import { DRAW, GameStage, LOSE, WIN } from '../../config/types';
import { randomChoice } from '../../utils/helpers';
import GameEndStage from '../GameEndStage/GameEndStage';
import GamePlayingStage from '../GamePlayingStage/GamePlayingStage';
import GameStartingStage from '../GameStartingStage/GameStartingStage';

type Props = {
  stage: GameStage;
  playerChoice: string;
  houseChoice: string;
  result: string;
  setStage: (stage: GameStage) => void;
  setScore: (prevState: number | ((score: number) => number)) => void;
  setHouseChoice: (choice: string) => void;
  setPlayerChoice: (choice: string) => void;
  setResult: (result: string) => void;
}

const GameStageManager = ({ stage,
  playerChoice,
  houseChoice,
  result,
  setStage,
  setScore,
  setHouseChoice,
  setResult,
  setPlayerChoice
}: Props) => {
  switch (stage) {
    case GameStage.PLAYING:
      return <GamePlayingStage
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
    case GameStage.END:
      return <GameEndStage
        playerChoice={playerChoice}
        houseChoice={houseChoice}
        result={result}
        updateState={() => {
          setStage(GameStage.START);
          setHouseChoice(randomChoice(DEFAULT_CHOICES_LIST));
        }} />
    default:
      return <GameStartingStage setPlayerChoice={setPlayerChoice} updateState={() => setStage(GameStage.PLAYING)} />;
  }
}

export default GameStageManager;