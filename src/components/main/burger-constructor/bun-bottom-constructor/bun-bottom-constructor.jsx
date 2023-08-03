import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";



function BunBottomConstructor({ data }) {
  return (
    <div className="pl-6" key={data._id}>
      {data.map((item) => (
        <div key={item.id} >
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

BunBottomConstructor.propTypes = {
  data: PropTypes.array.isRequired,
};


export default BunBottomConstructor;

