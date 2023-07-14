import React from "react";

import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import list from "./ingredients.css";

function Ingredients({ data }) {
  return (
    <div className="list custom-scroll" style={{ gap: "10px" }}>
      {data.map((item) => (
        <div>
          <DragIcon />
          <ConstructorElement
            className="items"
            key={item._id}
            text={item.name}
            price={item.price}
            thumbnail={item.image}
          />
        </div>
      ))}
    </div>
  );
}

export default Ingredients;
