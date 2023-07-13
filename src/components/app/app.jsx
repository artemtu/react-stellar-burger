import React, { useState } from "react";
import styles from "./app.module.css";
import { data } from "../../utils/data";
import Header from "../appheader/appheader";
import Main from "../main/main";
import Modal from "../modal/modal";
import Overlay from "../overlay/overlay";
import IngredientDetails from "../modal/Ingredientdetails/ingredientDetails";
import Orderdetails from "../modal/orderdetails/orderdetails";

function App() {
  const [isOrderModal, setOrderModal] = useState(false);
  const [isIngredientModal, setIngredientModal] = useState(false);

 function closeOrderModal() {
  setOrderModal(false)
  setIngredientModal(false)

}

  return (
    <div className={styles.app}>
      <Header />
      <Main setOrderModal={setOrderModal} setIngredientModal={setIngredientModal} data={data}/>
      {isOrderModal && (
        <>
          <Modal  handleClose={closeOrderModal}>
            <Orderdetails/>
          </Modal>
            
        </>
      )}
       {isIngredientModal && (
        <>
          <Modal handleClose={closeOrderModal}>
            <IngredientDetails/>
          </Modal>
            
        </>
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
