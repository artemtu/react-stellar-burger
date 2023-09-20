import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { IingredientFullInfo } from "../../main";

type Props = {
  data: IingredientFullInfo[];
};
function BunBottomConstructor({ data }: Props) {
  return (
    <div className="pl-6">
      {data.map((item) => (
        <div key={item.id}>
          <ConstructorElement
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
