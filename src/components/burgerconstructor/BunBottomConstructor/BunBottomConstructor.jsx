import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { data } from "../../../utils/data";

const bun = data.find((item) => item._id === "60666c42cc7b410027a1a9b1");

function BunBottomConstructor() {
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
