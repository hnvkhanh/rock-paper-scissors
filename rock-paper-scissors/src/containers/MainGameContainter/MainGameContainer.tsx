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
import GameStageManager from "../../components/GameStageManager/GameStageManager";

const MainGameContainer = ({ setScore }: {
  setScore: (prevState: number | ((score: number) => number)) => void
}) => {
  const [stage, setStage] = useState<GameStage>(GameStage.START);
  const [playerChoice, setPlayerChoice] = useState<string>('');
  const [houseChoice, setHouseChoice] = useState<string>(randomChoice(Object.keys(DEFAULT_CHOICES)));
  const [result, setResult] = useState<string>('');
  const modalRef = useRef<ModalRef>(null);

  return (
    <>
      <div className={css.container}>
        <GameStageManager
          stage={stage}
          playerChoice={playerChoice}
          houseChoice={houseChoice}
          result={result}
          setStage={setStage}
          setScore={setScore}
          setHouseChoice={setHouseChoice}
          setResult={setResult}
          setPlayerChoice={setPlayerChoice}
        />
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
