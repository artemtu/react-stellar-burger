import Main from "../../components/main/main";
import Modal from "../../components/modal/modal";
import IngredientDetails from "../../components/modal/ingredient-details/ingredient-details";
import OrderDetails from "../../components/modal/order-details/orderdetails";
import { useState } from "react";
import styles from "./home.module.css";
import { useLocation, useNavigate } from "react-router-dom";

export type IngredientModalState = {
  open: boolean;
  id?: string;
};

function Home() {
  const [isOrderModal, setOrderModal] = useState({
    open: false,
  });
  const [isIngredientModal, setIngredientModal] =
    useState<IngredientModalState>({
      open: false,
      id: "1",
    });

  const navigate = useNavigate();
  const location = useLocation();

  function closeModal() {
    setOrderModal({ open: false });
    setIngredientModal({ open: false, id: "1" });
    const currentPath = location.pathname;
    navigate(currentPath);
  }

  function openModal() {
    setOrderModal({ open: true });
  }

  return (
    <div className={styles.app}>
      <Main
        setOrderModal={setOrderModal}
        setIngredientModal={setIngredientModal}
        openModal={openModal}
      />

      {isOrderModal.open && (
        <Modal closeModal={closeModal}>
          <OrderDetails />
        </Modal>
      )}
      {isIngredientModal.open && (
        <Modal closeModal={closeModal}>
          <IngredientDetails id={isIngredientModal.id} />
        </Modal>
      )}
    </div>
  );
}

export default Home;
