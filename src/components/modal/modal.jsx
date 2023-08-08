import React from "react";
import styles from "./modal.module.css";
import { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import Overlay from "../overlay/overlay";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("react-modal");





function Modal({children, closeModal}) {
  
  
  useEffect(() => {
    const closeModalOnEscape = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
      
    document.addEventListener("keydown", closeModalOnEscape);
  
    return () => {
      document.removeEventListener("keydown", closeModalOnEscape);
    };
  });

  
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

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
}

export default Modal;
