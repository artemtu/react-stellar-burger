import React from "react";
import Header from "../../components/app-header/app-header";
import Main from "../../components/main/main";
import Modal from "../../components/modal/modal";
import IngredientDetails from "../../components/modal/ingredient-details/ingredient-details";
import OrderDetails from "../../components/modal/order-details/orderdetails";
import { useState } from "react";
import styles from "./home.module.css";
import FeedPage from "../../components/modal/feed-id/feed-id";

function Home() {
  const [isOrderModal, setOrderModal] = useState({
    open: false,
  });
  const [isIngredientModal, setIngredientModal] = useState({
    open: false,
    id: 1,
  });

  const [isFeedModal, setFeedModal] = useState({
    open: false,
    id: 1,
  });

  function closeModal() {
    setOrderModal({ open: false });
    setIngredientModal({ open: false, id: 1 });
    setFeedModal({ open: false, id: 1 });
  }

  function openModal() {
    setOrderModal({ open: true });
  }
  //@ts-ignore
  function openFeedModal(id) {
    setFeedModal({ open: true, id: 1 });
  }

  return (
    <div className={styles.app}>
      <Main
        setOrderModal={setOrderModal}
        //@ts-ignore
        setIngredientModal={setIngredientModal}
        openModal={openModal}
        openFeedModal={openFeedModal}
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

      {isFeedModal.open && (
        <Modal closeModal={closeModal}>
          <FeedPage id={isFeedModal.id} />
        </Modal>
      )}
    </div>
  );
}

export default Home;
