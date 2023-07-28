import React from "react";
import { useDrag } from "react-dnd";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import price from "./burgerIngredients.css";

export function Ingridients({
  id,
  type,
  image,
  name,
  price,
  setIngredientModal,
}) {
  const [{ isDragging }, dragRef] = useDrag({
    type: "ingredients",
    item: { id, image, name, price, type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

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
        <Counter count={1} size="default" extraClass="m-1" />
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
