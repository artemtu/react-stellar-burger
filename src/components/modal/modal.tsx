import React from "react";
import styles from "./modal.module.css";
import { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Overlay from "../overlay/overlay";
import { useEffect } from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("react-modal");

export interface Imodal {
  children: React.ReactNode;
  closeModal: {
    (): void;
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  };
}

function Modal({ children, closeModal }: Imodal) {
  useEffect(() => {
    const closeModalOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", closeModalOnEscape);

    return () => {
      document.removeEventListener("keydown", closeModalOnEscape);
    };
  });

  if (modalRoot === null) return null;

  return ReactDOM.createPortal(
    <Overlay closeModal={closeModal}>
      <div className={styles.modal}>
        <div className={`${styles.close}`}>
          <button className={`${styles.close__button}`} onClick={closeModal}>
            <CloseIcon type="primary" />
          </button>
        </div>
        {children}
      </div>
    </Overlay>,
    modalRoot
  );
}

export default Modal;
