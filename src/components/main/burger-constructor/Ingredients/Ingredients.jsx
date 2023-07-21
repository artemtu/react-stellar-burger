import React from "react";

import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredients.module.css";

function Ingredients({ data }) {
  return (
    <div className={`${styles.list} custom-scroll`} >
      {data.map((item) => (
        <div key={item._id}>
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


// {`${styles.header} p10`}