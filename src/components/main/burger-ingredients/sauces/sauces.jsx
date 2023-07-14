import React from "react";
import { data } from "../../../../utils/data";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Ingridients } from "../burgerIngredients";

export function Sauce({ setIngredientModal, data }) {
  return (
    <div className="ingridient-container">
      {data.map((item) => (
        <Ingridients
          id={item._id}
          key={item._id}
          image={item.image}
          name={item.name}
          price={item.price}
          setIngredientModal={setIngredientModal}
        />
      ))}
    </div>
  );
}

export default Sauce;
