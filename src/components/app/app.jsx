import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import Header from "../app-header/appheader";
import Main from "../main/main";
import Modal from "../modal/modal";
import Overlay from "../overlay/overlay";
import IngredientDetails from "../modal/Ingredientdetails/ingredientDetails";
import Orderdetails from "../modal/orderdetails/orderdetails";

function App() {
  const [isOrderModal, setOrderModal] = useState(false);
  const [isIngredientModal, setIngredientModal] = useState({
    open: false,
    id: 1,
  });
  const [data, setData] = useState([]);

  const config = {
    baseUrl: "https://norma.nomoreparties.space/api/ingredients",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const getData = () => {
    return (
      fetch(config.baseUrl)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then((res) => {
        setData(res.data)
      })
    )
  }

  useEffect(() => {
      
    getData()
  
  }, [])

  console.log(data);


  function closeOrderModal() {
    setOrderModal(false);
    setIngredientModal({ open: false });
  }

  useEffect(() => {
    const closeModalOnEscape = (event) => {
      if (event.key === "Escape") {
        closeOrderModal();
      }
    };

    if (isOrderModal || isIngredientModal) {
      document.addEventListener("keydown", closeModalOnEscape);
    }

    return () => {
      document.removeEventListener("keydown", closeModalOnEscape);
    };
  });

  return (
    <div className={styles.app}>
      <Header />
      <Main
        setOrderModal={setOrderModal}
        setIngredientModal={setIngredientModal}
        data={data}
      />
      {isOrderModal && (
        <>
          <Modal handleClose={closeOrderModal}>
            <Orderdetails />
          </Modal>
        </>
      )}
      {isIngredientModal.open && (
        <>
          <Modal handleClose={closeOrderModal}>
            <IngredientDetails data={data} id={isIngredientModal.id} />
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
