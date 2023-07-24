import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import Header from "../app-header/app-header";
import Main from "../main/main";
import Modal from "../modal/modal";
import IngredientDetails from "../modal/Ingredientdetails/ingredientDetails";
import OrderDetails from "../modal/orderdetails/orderdetails";
import { fetchIngredients } from "../../store/actions/ingredientActions";
import { GET_INGREDIENTS } from "../../store/actions/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


function App() {

  const [isOrderModal, setOrderModal] = useState(false);
  const [isIngredientModal, setIngredientModal] = useState({
    open: false,
    id: 1,
  });
  // const [data, setData] = useState([]);


  





  // const config = {
  //   baseUrl: "https://norma.nomoreparties.space/api/ingredients",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // };

  // const getData = () => {
  //   return fetch(config.baseUrl)
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //       return Promise.reject(`Ошибка: ${res.status}`);
  //     })
  //     .then((res) => {
  //       setData(res.data);
  //     })
  //     .catch((error) => {
  //       console.error("Произошла ошибка при получении данных:", error);
  //     });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

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
