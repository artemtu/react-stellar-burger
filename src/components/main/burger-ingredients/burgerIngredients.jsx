import React from "react";
import { useDrag } from "react-dnd";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import price from "./burgerIngredients.css";


export function Ingridients({ id, image, name, price, setIngredientModal }) {
  

  
  const onClick = () => {
    setIngredientModal({open:true, id})
  };
  return (
    <div >
      <div style={{ position: "relative"  }}>
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
