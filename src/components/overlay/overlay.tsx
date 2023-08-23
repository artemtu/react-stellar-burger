import React from "react";
import styles from "./overlay.module.css";
import PropTypes from "prop-types";
import { Imodal } from "../modal/modal";

function Overlay({ children, closeModal }: Imodal) {
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = event.currentTarget as HTMLDivElement;
    if (target.classList.contains(styles.overlay)) {
      closeModal();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      {children}
    </div>
  );
}

Overlay.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
}

export default Overlay;
