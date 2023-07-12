import React from "react";
import { data } from "../../../../utils/data";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Ingridients } from "../burgerIngredients";

const bunsArray = data.filter((item) => item.type === "bun");

export function Buns({setIsModalOpen}) {
  return (
    <div className="ingridient-container" >
      {bunsArray.map((item) => (
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
export default Buns;
