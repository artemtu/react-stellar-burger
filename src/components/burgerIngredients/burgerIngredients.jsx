import React from "react";
import { CurrencyIcon , Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import price from './burgerIngredients.css'
import { data } from "../../utils/data";





export function Ingridients(props) {
  const { image, name, price } = props;

  return (
      <div >
          <div style={{ position: 'relative' }}>
        <img className="pl-4 mt-6" src={image} alt={name}  />
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




