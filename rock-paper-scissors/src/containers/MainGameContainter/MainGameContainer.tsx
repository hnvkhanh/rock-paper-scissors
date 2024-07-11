import { useRef, useState } from "react";
import Button from "../../components/Button/Button";
import Modal, { ModalRef } from "../../components/Modal/Modal";
import rulesImage from "../../assets/rules/image-rules.svg";
import GameStartingStage from "../../components/GameStartingStage/GameStartingStage";
import { GameStage } from "../../config/types";
import GamePlayingStage from "../../components/GamePlayingStage/GamePlayingStage";
import GameEndStage from "../../components/GameEndStage/GameEndStage";

import css from "./MainGameContainer.module.css";

const MainGameContainer = () => {
  const [stage, setStage] = useState<GameStage>(GameStage.START);
  const [playerChoice, setPlayerChoice] = useState<string | null>(null);
  const modalRef = useRef<ModalRef>(null);
  const currentStage = (() => {
    switch (stage) {
      case GameStage.PLAYING:
        return <GamePlayingStage playerChoice={playerChoice} updateState={() => setStage(GameStage.END)} />
      case GameStage.END:
        return <GameEndStage />
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
