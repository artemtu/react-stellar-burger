import React from "react";
import { data } from "../../../utils/data";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
const ingredients = data.filter((item) => item.type !== "bun");
function Ingredients() {
  return (
    <>
      {ingredients.map((item) => (
        <ConstructorElement
          key={item._id}
          text={item.name}
          price={item.price}
          thumbnail={item.image_mobile}
        />
      ))}
    </>
  );
}

export default Ingredients;

