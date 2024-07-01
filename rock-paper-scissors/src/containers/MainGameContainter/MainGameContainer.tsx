import { useRef } from "react";
import Button from "../../components/Button/Button";
import Modal, { ModalRef } from "../../components/Modal/Modal";
import PlayerChoice from "../../components/PlayerChoice/PlayerChoice";
import { DEFAULT_CHOICES } from "../../config/choices";
import css from "./MainGameContainer.module.css";

import rulesImage from "../../assets/rules/image-rules.svg";

type Props = {};

const MainGameContainer = (props: Props) => {
  const modalRef = useRef<ModalRef>(null);
  return (
    <>
      <div className={css.container}>
        <div className={css.choicesContainer}>
          <div className={css.firstRow}>
            <PlayerChoice properties={DEFAULT_CHOICES.paper} />
            <PlayerChoice properties={DEFAULT_CHOICES.scissors} />
          </div>
          <div className={css.secondRow}>
            <PlayerChoice properties={DEFAULT_CHOICES.rock} />
          </div>
        </div>
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
