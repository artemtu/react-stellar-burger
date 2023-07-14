import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
// import { data } from "../../../../utils/data";



function BunBottomConstructor(bun) {
  return (
    <div className='pl-6' >

      <ConstructorElement
        type="bottom"
        isLocked={true}
        text={bun.name + " (низ)"}
        price={bun.price}
        thumbnail={bun.image}
      />
      </div>
      
  );
}
export default BunBottomConstructor;
