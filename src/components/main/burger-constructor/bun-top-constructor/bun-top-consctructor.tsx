import React from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { IingredientFullInfo } from "../../main";
import { IIngredient } from "../../../../store/reducers/constructor-reducer";

type Props = {
  data: IIngredient[];
};

function BunUpConstructor({ data }: Props) {
  return (
    <div className="pl-6">
      {data.map((item) => (
        <div key={item.id}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={item.name + " (верх)"}
            price={item.price}
            thumbnail={item.image}
          />
        </div>
      ))}
    </div>
  );
}


export default BunUpConstructor;
