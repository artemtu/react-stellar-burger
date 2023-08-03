import React from "react";
import styles from "./overlay.module.css";
import PropTypes from "prop-types";


function Overlay({ children,closeModal}) {
  const handleOverlayClick = (event) => {
    if (event.target.classList.contains(styles.overlay)) {
      // console.log('я в оверлее');
      closeModal()
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
