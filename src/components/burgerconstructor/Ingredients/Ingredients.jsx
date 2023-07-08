import React from "react";
import { data } from "../../../utils/data";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";




const ingredients = data.filter((item) => item.type !== "bun");

function Ingredients() {
  return (
    <>
      {ingredients.map((item) => (  
        <div  >
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
    </>
  );
}

export default Ingredients;


// {filteredData.map(item => (
//   <ConsructorItem  здесь item, тип не нужен>
//   }