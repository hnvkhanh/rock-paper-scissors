import { useRef } from "react";
import Button from "../../components/Button/Button";
import Modal, { ModalRef } from "../../components/Modal/Modal";
import rulesImage from "../../assets/rules/image-rules.svg";

import css from "./MainGameContainer.module.css";
import GameStageManager from "../../components/GameStageManager/GameStageManager";

const MainGameContainer = ({
  setScore,
}: {
  setScore: (prevState: number | ((score: number) => number)) => void;
}) => {
  const modalRef = useRef<ModalRef>(null);

  return (
    <>
      <div className={css.container}>
        <GameStageManager setScore={setScore} />
      </div>
      <div className={css.rules}>
        <Button onClick={() => modalRef?.current?.open()}>RULES</Button>
      </div>
      <Modal ref={modalRef} title="RULES" className={css.customModal}>
        <div className={css.ruleContainer}>
          <img src={rulesImage} />
        </div>
      </Modal>
    </>
  );
};

export default MainGameContainer;
