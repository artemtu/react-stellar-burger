import React, { useEffect } from "react";
import Header from "../../components/app-header/app-header";
import IngredientDetails from "../../components/modal/ingredient-details/ingredient-details";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchIngredients } from "../../store/actions/fetch-data";
import styles from "./ingredients.module.css";

function IngredientPage() {
  const { id } = useParams();

  const ingredient = useSelector((state) =>
    state.mainData.data.find((item) => item._id === id)
  );

  return (
    <>
      <div className={styles.page}>
        {ingredient ? <IngredientDetails id={id} /> : <p>Loading...</p>}
      </div>
    </>
  );
}

export default IngredientPage;
