import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import price from './burgerIngredients.css'

export const data = [
  {
     "_id":"60666c42cc7b410027a1a9b1",
     "name":"Краторная булка N-200i",
     "type":"bun",
     "proteins":80,
     "fat":24,
     "carbohydrates":53,
     "calories":420,
     "price":1255,
     "image":"https://code.s3.yandex.net/react/code/bun-02.png",
     "image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
     "image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png",
     "__v":0
  },
  {
     "_id":"60666c42cc7b410027a1a9b5",
     "name":"Говяжий метеорит (отбивная)",
     "type":"main",
     "proteins":800,
     "fat":800,
     "carbohydrates":300,
     "calories":2674,
     "price":3000,
     "image":"https://code.s3.yandex.net/react/code/meat-04.png",
     "image_mobile":"https://code.s3.yandex.net/react/code/meat-04-mobile.png",
     "image_large":"https://code.s3.yandex.net/react/code/meat-04-large.png",
     "__v":0
  },
  {
     "_id":"60666c42cc7b410027a1a9b6",
     "name":"Биокотлета из марсианской Магнолии",
     "type":"main",
     "proteins":420,
     "fat":142,
     "carbohydrates":242,
     "calories":4242,
     "price":424,
     "image":"https://code.s3.yandex.net/react/code/meat-01.png",
     "image_mobile":"https://code.s3.yandex.net/react/code/meat-01-mobile.png",
     "image_large":"https://code.s3.yandex.net/react/code/meat-01-large.png",
     "__v":0
  },
  {
     "_id":"60666c42cc7b410027a1a9b7",
     "name":"Соус Spicy-X",
     "type":"sauce",
     "proteins":30,
     "fat":20,
     "carbohydrates":40,
     "calories":30,
     "price":90,
     "image":"https://code.s3.yandex.net/react/code/sauce-02.png",
     "image_mobile":"https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
     "image_large":"https://code.s3.yandex.net/react/code/sauce-02-large.png",
     "__v":0
  },

]



export function Fillings(props) {
  const { image, name, price } = props;

  return (
    
    <div>
      
      <div>
        <img className="pl-4 mt-6" src={image} alt={name} style={{ outline: '1px solid red' }} />
        <div className="price mt-1 mb-1">
          <p className="text text_type_digits-default pr-2">{price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className="text text_type_main-default">{name}</p>
      </div>

    </div>
  );
}

export function ParentComponent() {
  return (
    <div className="ingridient-container">
      {data.map(item => (
        <Fillings
          key={item._id}
          image={item.image}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default ParentComponent;


