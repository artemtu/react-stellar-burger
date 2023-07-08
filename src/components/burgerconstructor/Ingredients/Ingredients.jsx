import React from "react";
import { data } from "../../../utils/data";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ingredientZ from './ingredients.css'




const ingredients = data.filter((item) => item.type !== "bun");

function Ingredients() {
  return (
    <div className="ingredientZ custom-scroll" style={{gap:'10px'}}>
      {ingredients.map((item) => (  
        <div>
          <DragIcon/>

          <ConstructorElement
          className='items'
            key={item._id}
            text={item.name}
            price={item.price}
            thumbnail={item.image}
          />
        </div>
      ))
} 
    </div>
  );
}

export default Ingredients;


