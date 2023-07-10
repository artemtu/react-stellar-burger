import React from "react";
import { data } from "../../../utils/data";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Ingridients } from "../burgerIngredients";


const fillingsArray = data.filter(item => item.type === "main");




export function Fillings({setIsModalOpen}) {
  return (
    <div className="ingridient-container">
      {fillingsArray.map(item => (
        <Ingridients
          key={item._id}
          image={item.image}
          name={item.name}
          price={item.price}
          setIsModalOpen={setIsModalOpen}
        />
      ))}
    </div>
  );
}

export default Fillings;
