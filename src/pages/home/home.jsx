import React from "react";
import Header from "../../components/app-header/app-header";
import Main from "../../components/main/main";
import Modal from "../../components/modal/modal";
import IngredientDetails from "../../components/modal/ingredient-details/ingredient-details";
import OrderDetails from "../../components/modal/order-details/orderdetails";
import { useState } from "react";
import styles from "./home.module.css";
import { useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();

  // const [isFeedIdModal, setIsFeedIdModal] = useState({ false: true, id: 1 });

  const [isOrderModal, setOrderModal] = useState({
    open: false,
  });
  const [isIngredientModal, setIngredientModal] = useState({
    open: false,
    id: 1,
  });

  function closeModal() {
    setOrderModal({ open: false });
    setIngredientModal({ open: false, id: 1 });
    // setIsFeedIdModal({ open: false, id: 1 });
  }

  function openModal() {
    setOrderModal({ open: true });
  }

  // function openFeedId() {
  //   // console.log('я здест');
  //   setIsFeedIdModal({ open: true });
  // }

  return (
    <div className={styles.app}>
      {/* <SomeComponent /> */}
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
      {/* {isFeedIdModal.open && (
        <Modal closeModal={closeModal}>
          <FeedPage id={isFeedIdModal.id} />
        </Modal>
      )} */}
    </div>
  );
}

export default Home;
