import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { REMOVE_INGREDIENT } from "../../../../store/actions/actions";
import { useEffect } from "react";
import { useDrag } from "react-dnd";

import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredients.module.css";

function Ingredients({ data }) {
  const dispatch = useDispatch();

  const ingredientsArray = useSelector((store) => store.constructorBurger.ingredients);

  const findIndex = (item) => {
    return ingredientsArray.indexOf(item);
  };

  const handleRemoveIngredient = (_constId) => {
    dispatch({ type: REMOVE_INGREDIENT, payload: _constId });
  };

  return (
    <div className={`${styles.list} custom-scroll`}>
      {data.map((item) => (
        <DraggableIngredient key={item._constId} data={item} onRemove={handleRemoveIngredient} />
      ))}
    </div>
  );
}

function DraggableIngredient({ data, onRemove }) {
  const dispatch = useDispatch();

  const [{ isDragging }, dragRef] = useDrag({
    type: "sort",
    item: { ingredient: data },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={dragRef} style={{display:'flex', alignItems:'center'}}>
      <DragIcon />
      <ConstructorElement
        className="items"
        key={data._constId}
        text={data.name}
        price={data.price}
        thumbnail={data.image}
        handleClose={() => onRemove(data._constId)}
      />
    </div>
  );
}

export default Ingredients;
