import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { REMOVE_INGREDIENT } from "../../../../store/actions/actions";
import { useEffect } from "react";
import { useDrag, useDrop } from "react-dnd";


import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredients.module.css";

function Ingredients({ data }) {
  const dispatch = useDispatch();

  const ingredientsArray = useSelector(store => store.constructorBurger.ingredients);
  const findIndex = (item) => {
    return ingredientsArray.indexOf(item);
  }

 
  const handleRemoveIngredient = (id) => {
    dispatch({ type: REMOVE_INGREDIENT, payload: id });
  };

  const [{ isDragging }, dragRef] = useDrag({
    type: "sort",
    item: {ingredient: data},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  // const[, dropRef] = useDrop({
  //   accept:'sort',
  //   hover({ingredient}) {
  //     dispatch({
  //       indexFrom: findIndex(ingredient),
  //       indexTo: index,
  //       ingredient: ingredient,
  //     })
  //   }
  // })

  return (
    <div className={`${styles.list} custom-scroll`} >
      {data.map((item, index) => (
        
        <div key={`${item.id}${index}`}ref={dragRef}>
          <DragIcon/>
          <ConstructorElement
            className="items"
            key={`${item.id}${index}`}
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

