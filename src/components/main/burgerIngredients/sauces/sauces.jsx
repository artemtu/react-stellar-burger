import React from "react";
import { data } from "../../../../utils/data";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Ingridients } from "../burgerIngredients";

const sauceArray = data.filter((item) => item.type === "sauce");

export function Sauce({setIngredientModal}) {
  return (
    <div className="ingridient-container">
      {sauceArray.map((item) => (
        <Ingridients
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
