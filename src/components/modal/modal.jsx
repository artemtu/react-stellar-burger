import React from "react";
import styles from "./modal.module.css";
import { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Overlay from "../overlay/overlay";

const modalRoot = document.getElementById("react-modal");

function Modal({handleClose, children}) {
  
  return createPortal(
    <Overlay handleClose={handleClose}>
      <div className={styles.modal}>
        <div className={`${styles.close}`}>
          <button className={`${styles.close__button}`} onClick={handleClose}>
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
