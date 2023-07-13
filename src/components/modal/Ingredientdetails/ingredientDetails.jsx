import React from "react";
import styles from "../Ingredientdetails/ingredientDetails.module.css";
import { createPortal } from "react-dom";

function IngredientDetails({ data, id }) {
  const ingredient = data.find((item) => item._id === id);
  console.log(ingredient);
  return (
    <div>
      <h2 className="text text_type_main-large mt-10 ml-10 mr-10">
        Детали ингридиента
      </h2>
      <div className={styles.picture}>
        <img
          src="https://code.s3.yandex.net/react/code/meat-01-large.png"
          alt=" "
        />
        <p className="text text_type_main-medium mt-4">
          Биокотлета из Марсианской магнолии
        </p>
      </div>
      <div
        className={`${styles.rows} mb-15 text text_type_main-default text_color_inactive`}
      >
        <div className={styles.calories}>
          <p className="text text_type_main-small mt-8">Калории ккал</p>
          <p className="text text_type_main-small">244,4</p>
        </div>
        <div className={styles.calories}>
          <p className="text text_type_main-small mt-8">Белки, г</p>
          <p className="text text_type_main-small">244,4</p>
        </div>
        <div className={styles.calories}>
          <p className="text text_type_main-small mt-8">Жиры, г</p>
          <p className="text text_type_main-small">244,4</p>
        </div>
        <div className={styles.calories}>
          <p className="text text_type_main-small mt-8">Углеводы, г</p>
          <p className="text text_type_main-small">244,4</p>
        </div>
      </div>
    </div>
  );
}

export default IngredientDetails;
