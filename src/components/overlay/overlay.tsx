import { ReactNode } from "react";
import styles from "./overlay.module.css";

type TModalOverlay = {
  closeModal: () => void | undefined;
  children: ReactNode;
};

function Overlay({ children, closeModal }: TModalOverlay) {
  const handleOverlayClick = (event: any) => {
    if (event.target.classList.contains(styles.overlay)) {
      closeModal();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      {children}
    </div>
  );
}

export default Overlay;
