import React from "react";
import { Ingridients } from "../burgerIngredients";

export function IngredientList({ setIngredientModal, data }) {
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
export default IngredientList;