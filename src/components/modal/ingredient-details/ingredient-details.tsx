import React from "react";
import styles from "./ingredient-details.module.css";
import { useSelector } from "react-redux";
import {
  ingredientOpen,
  clearIngredientOpen,
} from "../../../store/actions/info-open-ingredient";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

export interface IingredientDeatails {
  id: string;
  _id: string;

}

function IngredientDetails({ id }: IingredientDeatails) {
  //@ts-ignore
  const data = useSelector((state) => state.mainData.data);
  const ingredient = data.find((item:IingredientDeatails) => item._id === id);

  const dispatch = useDispatch();

  useEffect(() => {
    if (ingredient) {
      dispatch(ingredientOpen(ingredient));
    }
    return () => {
      dispatch(clearIngredientOpen());
    };
  }, [dispatch, ingredient]);

  return (
    <div>
      <h2 className="text text_type_main-large mt-10 ml-10 mr-10">
        Детали ингридиента
      </h2>
      <div className={styles.picture}>
        <img src={ingredient.image_large} alt={ingredient.name} />
        <p className="text text_type_main-medium mt-4">{ingredient.name}</p>
      </div>
      <div
        className={`${styles.rows} mb-15 text text_type_main-default text_color_inactive`}
      >
        <div className={styles.calories}>
          <p className="text text_type_main-small mt-8">Калории ккал</p>
          <p className="text text_type_main-small">{ingredient.calories}</p>
        </div>
        <div className={styles.calories}>
          <p className="text text_type_main-small mt-8">Белки, г</p>
          <p className="text text_type_main-small">{ingredient.proteins}</p>
        </div>
        <div className={styles.calories}>
          <p className="text text_type_main-small mt-8">Жиры, г</p>
          <p className="text text_type_main-small">{ingredient.fat}</p>
        </div>
        <div className={styles.calories}>
          <p className="text text_type_main-small mt-8">Углеводы, г</p>
          <p className="text text_type_main-small">
            {ingredient.carbohydrates}
          </p>
        </div>
      </div>
    </div>
  );
}

// IngredientDetails.propTypes = {
//   id: PropTypes.string.isRequired,
// };

export default IngredientDetails;
