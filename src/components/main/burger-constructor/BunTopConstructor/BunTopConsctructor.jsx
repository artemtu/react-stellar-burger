import React from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";




function BunUpConstructor({ data }) {
  return (
    <div className="pl-6">
      {data.map((item) => (
        <ConstructorElement
          type="top"
          isLocked={true}
          text={item.name + " (верх)"}
          price={item.price}
          thumbnail={item.image}
          key={item._id}
        />
      ))}
    </div>
  );
}
export default BunUpConstructor;
