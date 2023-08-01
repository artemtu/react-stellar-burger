import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { REMOVE_INGREDIENT } from "../../../../store/actions/actions";
import { useEffect } from "react";
import { useDrag, useDrop } from "react-dnd";
import { changeIngredient } from "../../../../store/actions/addRemove";

import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredients.module.css";

function Ingredients({ data }) {
  const dispatch = useDispatch();


  const handleRemoveIngredient = (_constId) => {
    dispatch({ type: REMOVE_INGREDIENT, payload: _constId });
  };


  return (
    <div className={`${styles.list} custom-scroll`}>
      {data.map((item, index) => (
        <DraggableIngredient key={item._constId} data={item} index={index} onRemove={handleRemoveIngredient} />
      ))}
    </div>
  );
}

function DraggableIngredient({ data, onRemove, index }) {
  const dispatch = useDispatch();

  const ingredientsArray = useSelector((store) => store.constructorBurger.ingredients);

  const findIndex = (item) => {
    return ingredientsArray.indexOf(item);
  };

 




  const [{ isDragging }, dragRef] = useDrag({
    type: "sort",
    item: { ingredient: data },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'sort',
    hover({ ingredient }) {
      if (ingredient._constId === data._constId) return;
      dispatch(changeIngredient({
        indexFrom: findIndex(ingredient),
        indexTo: index,
        ingredient: ingredient,
      }));
    },
  });



  return (
    <div ref={node =>dragRef(dropRef(node))} className={styles.constructor}>
      <DragIcon />
      <ConstructorElement
        className="items"
        text={data.name}
        price={data.price}
        thumbnail={data.image}
        handleClose={() => onRemove(data._constId)}
      />
    </div>
  );
}

export default Ingredients;
