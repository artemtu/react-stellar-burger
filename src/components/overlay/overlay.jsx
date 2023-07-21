import React from "react";
import styles from "./overlay.module.css";


function Overlay({ children,handleClose}) {
  const handleOverlayClick = (event) => {
    if (event.target.classList.contains(styles.overlay)) {
      // console.log('я в оверлее');
      handleClose()
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      {children}
    </div>
  );
}

export default Overlay;
