import React from "react";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import price from "./burgerIngredients.css";

export function Ingridients({
  id,
  type,
  image,
  name,
  price,
  setIngredientModal,
})


  {
  const bunsInStore = useSelector((state) => state.constructorBurger.bun.length);
  console.log(bunsInStore);



  const [{ isDragging }, dragRef] = useDrag({
    type: "ingredients",
    item: { id, image, name, price, type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    canDrag: () => {
      if (type === "bun" && bunsInStore > 0) {
        return false;
      } else {
        return true;
      }}

  });
  
  

  const bunsIngredientsFromStore = useSelector((state) => state.constructorBurger);

  const bunCount = bunsIngredientsFromStore.bun.filter((item) => item.id === id).length * 2;
  const ingredientCount = bunsIngredientsFromStore.ingredients.filter((item) => item.id === id).length;
  const totalCount = bunCount + ingredientCount;


  const onClick = () => {
    setIngredientModal({ open: true, id });
  };
  return (
    <div
      ref={dragRef}
      style={{ border: isDragging ? "20px solid red" : "0px" }}
    >
      <div style={{ position: "relative" }}>
        <img className="pl-4 mt-6" src={image} alt={name} onClick={onClick} />
        {totalCount > 0 && <Counter count={totalCount} size="default" extraClass="m-1" />}
      </div>
      <div className="price mt-1 mb-1">
        <p className="text text_type_digits-default pr-2">{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-default">{name}</p>
    </div>
  );
}

export default Ingridients;
