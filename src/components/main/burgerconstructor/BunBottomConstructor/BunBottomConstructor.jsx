import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
// import { data } from "../../../../utils/data";



function BunBottomConstructor({ data }) {
  return (
    <div className="pl-6">
      {data.map((item) => (
        <ConstructorElement
          key={item._id} // Добавьте ключ для каждого элемента в списке
          type="bottom"
          isLocked={true}
          text={item.name + " (низ)"}
          price={item.price}
          thumbnail={item.image}
    
        />
      ))}
    </div>
  );
}

export default BunBottomConstructor;

