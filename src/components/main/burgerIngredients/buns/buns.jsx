import React from "react";
import { Ingridients } from "../burgerIngredients";



export function Buns({data,setIsModalOpen}) {
  return (
    <div className="ingridient-container" >
      {data.map((item) => (
        <Ingridients
          key={item._id}
          image={item.image}
          name={item.name}
          price={item.price}
          setIsModalOpen={setIsModalOpen}
        />
      ))}
    </div>
  );
}
export default Buns;
