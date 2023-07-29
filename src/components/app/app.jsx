import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import Header from "../app-header/app-header";
import Main from "../main/main";
import Modal from "../modal/modal";
import IngredientDetails from "../modal/Ingredientdetails/ingredientDetails";
import OrderDetails from "../modal/orderdetails/orderdetails";
import { useSelector } from "react-redux";




function App() {

  const [isOrderModal, setOrderModal] = useState(false);
  const [isIngredientModal, setIngredientModal] = useState({
    open: false,
    id: 1,
  });

  function closeModal() {
    setOrderModal(false);
    setIngredientModal({ open: false });
  }

  return (
    <div className={styles.app}>
      <Header />
      <Main
        setOrderModal={setOrderModal}
        setIngredientModal={setIngredientModal}
      
      />
      {isOrderModal && (
        <Modal
          handleClose={closeModal}
          closeModal={closeModal}
          isOrderModal={isOrderModal}
        >
          <OrderDetails />
        </Modal>
      )}
      {isIngredientModal.open && (
        <Modal
          handleClose={closeModal}
          isIngredientModal={isIngredientModal}
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
