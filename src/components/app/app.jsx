import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import Header from "../app-header/app-header";
import Main from "../main/main";
import Modal from "../modal/modal";
import IngredientDetails from "../modal/ingredient-details/ingredient-details";
import OrderDetails from "../modal/order-details/orderdetails";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";




function App() {

  const [isOrderModal, setOrderModal] = useState({
    open:false,
    orderNumber: 0,
  });
  const [isIngredientModal, setIngredientModal] = useState({
    open: false,
    id: 1,

  });

  function closeModal() {
    setOrderModal({open:false});
    setIngredientModal({ open: false });
  }

  return (
    <div className={styles.app}>
      <Header />
      <Main
        setOrderModal={setOrderModal}
        setIngredientModal={setIngredientModal}
      
      />
      {isOrderModal.open && (
        <Modal
          closeModal={closeModal}
        >
          <OrderDetails orderNumber={isOrderModal.orderNumber} />
        </Modal>
      )}
      {isIngredientModal.open && (
        <Modal
          closeModal={closeModal}
        >
          <IngredientDetails data={[]} id={isIngredientModal.id} />
        </Modal>
      )}
    </div>
  );
}

export default App;

// import styles from "./app.module.css";
// import { data } from "../../utils/data";

// function App() {
//   return (
//     <div className={styles.app}>
//       <pre style={{
//       	margin: "auto",
//       	fontSize: "1.5rem"
//       }}>
//       	Изменил
//       </pre>
//     </div>
//   );
// }

// export default App;

// App.propTypes = {
//   setOrderModal: PropTypes.func,
//   setIngredientModal: PropTypes.func,
// };

