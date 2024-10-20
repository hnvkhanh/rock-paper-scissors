import { useRef, useState } from "react";
import Button from "../../components/Button/Button";
import Modal, { ModalRef } from "../../components/Modal/Modal";
import rulesImage from "../../assets/rules/image-rules.svg";
import GameStartingStage from "../../components/GameStartingStage/GameStartingStage";
import { DRAW, GameStage, LOSE, WIN } from "../../config/types";
import GamePlayingStage from "../../components/GamePlayingStage/GamePlayingStage";
import GameEndStage from "../../components/GameEndStage/GameEndStage";
import { DEFAULT_CHOICES, DEFAULT_CHOICES_LIST } from "../../config/choices";
import { randomChoice } from "../../utils/helpers";

import css from "./MainGameContainer.module.css";

const MainGameContainer = ({ setScore }: {
  setScore: (prevState: number | ((score: number) => number)) => void
}) => {
  const [stage, setStage] = useState<GameStage>(GameStage.START);
  const [playerChoice, setPlayerChoice] = useState<string>('');
  const [houseChoice, setHouseChoice] = useState<string>(randomChoice(Object.keys(DEFAULT_CHOICES)));
  const [result, setResult] = useState<string>('');
  const modalRef = useRef<ModalRef>(null);

  const currentStage = (() => {
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
  })();
  return (
    <>
      <div className={css.container}>
        {currentStage}
        <div className={css.rules}>
          <Button onClick={() => modalRef?.current?.open()}>RULES</Button>
        </div>
      </div>
      <Modal ref={modalRef} title="RULES">
        <div className={css.ruleContainer}>
          <img src={rulesImage} />
        </div>
      </Modal>
    </>
  );
};

export default MainGameContainer;
