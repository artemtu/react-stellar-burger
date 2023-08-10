import React from "react";
import Header from "../../components/app-header/app-header";
import Main from "../../components/main/main";
import Modal from "../../components/modal/modal";
import IngredientDetails from "../../components/modal/ingredient-details/ingredient-details";
import OrderDetails from "../../components/modal/order-details/orderdetails";
import { useState } from "react";
import styles from './home.module.css'

function Home() {
  const [isOrderModal, setOrderModal] = useState({
    open: false,
  });
  const [isIngredientModal, setIngredientModal] = useState({
    open: false,
    id: 1,
  });

  function closeModal() {
    setOrderModal({ open: false });
    setIngredientModal({ open: false });
  }

  function openModal() {
    setOrderModal({ open: true });
  }

  return (
    <div className={styles.app}>
      <Header />
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