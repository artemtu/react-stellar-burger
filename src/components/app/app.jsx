import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import Header from "../app-header/app-header";
import Main from "../main/main";
import Modal from "../modal/modal";
import IngredientDetails from "../modal/ingredient-details/ingredient-details";
import OrderDetails from "../modal/order-details/orderdetails";
import PropTypes from "prop-types";




function App() {

  const [isOrderModal, setOrderModal] = useState({
    open:false,
  });
  const [isIngredientModal, setIngredientModal] = useState({
    open: false,
    id: 1,

  });

  function closeModal() {
    setOrderModal({open:false});
    setIngredientModal({ open: false });
  }
  
  function openModal() {
    setOrderModal({open: true});
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
        <Modal
          closeModal={closeModal}
        >
          <OrderDetails/>
        </Modal>
      )}
      {isIngredientModal.open && (
        <Modal
          closeModal={closeModal}
        >
          <IngredientDetails  id={isIngredientModal.id} />
        </Modal>
      )}
    </div>
  );
}


export default App;
