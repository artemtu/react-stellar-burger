import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
// import { data } from "../../../../utils/data";



function BunBottomConstructor({ data }) {
  return (
    <div className="pl-6" key={data._id}>
      {data.map((item) => (
        <div key={item.id} >
        <ConstructorElement
          key={item._id}
          type="bottom"
          isLocked={true}
          text={item.name + " (низ)"}
          price={item.price}
          thumbnail={item.image}
    
        />
      </div>
      ))}
    </div>
  );
}

export default BunBottomConstructor;

