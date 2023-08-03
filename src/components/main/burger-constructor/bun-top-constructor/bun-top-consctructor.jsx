import React from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";




function BunUpConstructor({ data }) {
  
  return (
    <div className="pl-6">
      {data.map((item) => (
        <div key={item.id} >
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
BunUpConstructor.propTypes = {
  data: PropTypes.array.isRequired,
};


export default BunUpConstructor;
