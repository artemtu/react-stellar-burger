import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

function BunBottomConstructor({ data }: IbunConstructorProps) {
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

export interface IbunConstructorProps {
  data: IbunConstructor[];
}

export interface IbunConstructor {
  id: string;
  image: string;
  name: string;
  price: number;
  type: string;
  constId: string;
}

export default BunBottomConstructor;
