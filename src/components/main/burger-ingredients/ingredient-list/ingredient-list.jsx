import React from "react";
import { Ingridients } from "../burger-ingredients";
import { useSelector } from "react-redux";
import { useDrag } from "react-dnd";
import styles from './ingredient-list.module.css'
import PropTypes from "prop-types";


export function IngredientList({ setIngredientModal, data }) {



  return (
    <div className={styles.ingridientContainer}>
      {data.map((item) => (
        <Ingridients
          id={item._id}
          key={item._id}
          image={item.image}
          name={item.name}
          price={item.price}
          type={item.type}
          setIngredientModal={setIngredientModal}
        />
      ))}
    </div>
  );
}

IngredientList.propTypes = {
  data: PropTypes.array.isRequired,
  setIngredientModal:PropTypes.func.isRequired , 
};
export default IngredientList;