import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import price from './burgerIngredients.css'
import { data } from "../../utils/data";





export function Ingridients(props) {
  const { image, name, price } = props;

  return (
      <div>
        <img className="pl-4 mt-6" src={image} alt={name} style={{ outline: '1px solid red' }} />
        <div className="price mt-1 mb-1">
          <p className="text text_type_digits-default pr-2">{price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className="text text_type_main-default">{name}</p>
      </div>

  );
}




