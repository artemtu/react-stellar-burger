import React from "react";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./extraction.module.css";
import { useSelector } from "react-redux";
import { postOrder } from "../../../../store/actions/ingredientActions";



function Extraction({ setOrderModal }) {

  
  const data = useSelector((state) => state.constructorBurger);
  
  const ingredientsForPrice = useSelector((state) => state.constructorBurger);
  const buns = ingredientsForPrice.bun || [];
  const ingredients = ingredientsForPrice.ingredients || [];
  
  const totalPrice = React.useMemo(() => {
    const bunPrice = buns.reduce((acc, item) => acc + (item.price * 2 || 0), 0);
    const ingredientsPrice = ingredients.reduce(
      (acc, item) => acc + (item.price || 0),
      0
      );
      return bunPrice + ingredientsPrice;
    }, [buns, ingredients]);
    
    const isButtonDisabled =
    ingredientsForPrice.bun.length === 0 &&
    ingredientsForPrice.ingredients.length === 0;
    
    // async function postOrder(order) {
    //   const url = "https://norma.nomoreparties.space/api/orders";
      
    //   try {
    //     const response = await fetch(url, {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(order),
    //     });
        
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     const data = await response.json();
    //     return data;
    //   } catch (error) {
    //     console.error("Error:", error);
    //   }
    // }


    const onClick = () => {
      const bunsIds = data.bun.map((item) => item.id);
      const ingredientsIds = data.ingredients.map((item) => item.id);
      const allIngredientIds = {
        ingredients: [...bunsIds, ...ingredientsIds],
      };
      postOrder(allIngredientIds)
      .then((response) => setOrderModal({open:true, orderNumber:response.order.number}))
    };

   
    
    return (
      <div className={`${styles.extraction} mr-4 mt-10`}>
      <p className="text text_type_digits-medium pr-2">{totalPrice}</p>
      <CurrencyIcon />
      <div className="ml-10">
        <Button
          htmlType="button"
          type="primary"
          size="large"
          extraClass="ml-2"
          onClick={onClick}
          disabled={isButtonDisabled}
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  );
}


export default Extraction;
