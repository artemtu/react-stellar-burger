import React from "react";
import styles from "./overlay.module.css";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("react-modal");

function Overlay({ children,handleClose}) {
  const handleOverlayClick = (event) => {
    if (event.target.classList.contains(styles.overlay)) {
      // console.log('я в оверлее');
      handleClose()
    }
  };

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={handleOverlayClick}>
      {children}
    </div>,
    modalRoot
  );
}

export default Overlay;
