import { useMemo, useRef, useState } from "react";
import Button from "../../components/Button/Button";
import Modal, { ModalRef } from "../../components/Modal/Modal";
import rulesImage from "../../assets/rules/image-rules.svg";
import GameStartingStage from "../../components/GameStartingStage/GameStartingStage";
import { GameStage } from "../../config/types";
import GamePlayingStage from "../../components/GamePlayingStage/GamePlayingStage";
import GameEndStage from "../../components/GameEndStage/GameEndStage";

import css from "./MainGameContainer.module.css";
import { DEFAULT_CHOICES } from "../../config/choices";
import { getResults, randomChoice } from "../../utils/helpers";

const MainGameContainer = ({ score, setScore }: {
  score: number,
  setScore: (prevState: number | ((score: number) => number)) => void
}) => {
  const [stage, setStage] = useState<GameStage>(GameStage.START);
  const [playerChoice, setPlayerChoice] = useState<string | null>(null);
  const [houseChoice, setHouseChoice] = useState<string>(randomChoice(Object.keys(DEFAULT_CHOICES)));
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
          }}
        />
      case GameStage.END:
        return <GameEndStage
          score={score}
          playerChoice={playerChoice}
          houseChoice={houseChoice}
          updateState={() => {
            setStage(GameStage.START);
            setHouseChoice(randomChoice(Object.keys(DEFAULT_CHOICES)))
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
