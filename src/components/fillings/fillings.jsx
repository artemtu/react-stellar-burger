import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import price from './fillings.css'


const bulka = {
    _id: "60666c42cc7b410027a1a9b1",
    name: "Краторная булка N-200i",
    type: "bun",
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: "https://code.s3.yandex.net/react/code/bun-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
    __v: 0,
  };
  

export function Fillings() {
  return (
    <div className="mt-6  ingridient-container">   
        <div>
        <img className='pl-4' src={bulka.image} alt={bulka.name} style={{outline:'1px solid red'}} />
        <div className="price">
        <p className="text text_type_digits-default pr-2">20 </p>
        <CurrencyIcon type="primary" />
        </div>
        <p className="text text_type_main-default">{bulka.name}</p>
        </div>
      
        <div>
        <img className='pl-4' src={bulka.image} alt={bulka.name} style={{outline:'1px solid red'}} />
        <div className="price">
        <p className="text text_type_digits-default pr-2">20 </p>
        <CurrencyIcon type="primary" />
        </div>
        <p className="text text_type_main-default">{bulka.name}</p>
        </div>
      

    </div>
  );
}

export default Fillings;

