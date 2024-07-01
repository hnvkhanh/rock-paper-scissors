import React, {
  ForwardRefRenderFunction,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import closeIcon from "./images/icon-close.svg";

import Button from "../Button/Button";

import css from "./Modal.module.css";

interface ModalComponentProps {
  children: React.ReactNode;
  title: string;
}

export type ModalRef = {
  close: () => void;
  open: () => void;
};

const ModalComponent: ForwardRefRenderFunction<
  ModalRef,
  ModalComponentProps
> = (props, ref) => {
  const { children, title } = props;

  const modalRef = useRef<HTMLDialogElement | null>(null);

  const closeFunc = () => {
    modalRef?.current?.close();
  };
  const openFunc = () => {
    modalRef?.current?.showModal();
  };
  useImperativeHandle(ref, () => ({
    close: closeFunc,
    open: openFunc,
  }));

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "Escape") {
      closeFunc();
    }
  };

  return (
    <dialog
      ref={modalRef}
      className={css.modal}
      onKeyDown={handleKeyDown}
    >
      <div className={css.modalTitle}>{title}</div>
      <div className={css.modalContent}>{children}</div>
      <Button className={css.closeIcon} onClick={closeFunc}>
        <img src={closeIcon} />
      </Button>
    </dialog>
  );
};

const Modal = forwardRef<ModalRef, ModalComponentProps>(ModalComponent);

export default Modal;
