import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { REMOVE_INGREDIENT } from "../../../../store/actions/actions";

import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredients.module.css";

function Ingredients({ data }) {
  const dispatch = useDispatch();
  
  const handleRemoveIngredient = (id) => {
    dispatch({ type: REMOVE_INGREDIENT, payload: id });
  };
  return (
    <div className={`${styles.list} custom-scroll`}>
      {data.map((item) => (
        <div key={item.id} >
          <DragIcon />
          <ConstructorElement
            className="items"
            key={item._id}
            text={item.name}
            price={item.price}
            thumbnail={item.image}
            handleClose={() => handleRemoveIngredient(item.id)}
            
          />
        </div>
      ))}
    </div>
  );
}

export default Ingredients;




// {`${styles.header} p10`}

