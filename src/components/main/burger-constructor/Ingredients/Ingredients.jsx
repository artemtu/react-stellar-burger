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

function Ingredients({ data , _constId}) {
  const dispatch = useDispatch();

  const ingredientsArray = useSelector(store => store.constructorBurger.ingredients);
  const findIndex = (item) => {
    return ingredientsArray.indexOf(item);
  }



 
  const handleRemoveIngredient = (_constId) => {
    dispatch({ type: REMOVE_INGREDIENT, payload: _constId });
  };

  const [{ isDragging }, dragRef] = useDrag({
    type: "sort",
    item: {item:_constId},
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
    <div className={`${styles.list} custom-scroll`} ref={dragRef} >
      {data.map((item, _constId) => (
        <div key={_constId} >
          <DragIcon/>
          <ConstructorElement
            className="items"
            key={_constId}
            text={item.name}
            price={item.price}
            thumbnail={item.image}
            handleClose={() => handleRemoveIngredient(item._constId)}
            
          />
        </div>
      ))}
    </div>
  );
}

export default Ingredients;




// {`${styles.header} p10`}

