import React, { useEffect, useState } from "react";
import styles from "./orderdetails.module.css";
import orderImg from "../../../images/doneorder-done.png";
import { useSelector, useDispatch } from "react-redux";
import { getOrderNumber } from "../../../store/actions/orderNumber";

export function OrderDetails() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.constructorBurger);
  const order = useSelector((state) => state.orderDetails.orderDetails);

  const [orderNumber, setOrderNumber] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const buns = data.bun;
      const ingredientsFromConstructor = data.ingredients;
      const bunIds = buns.map((item) => item.id);
      const ingredientIds = ingredientsFromConstructor.map((item) => item.id);

      const allIngredientIds = {
        ingredients: [...bunIds, ...ingredientIds],
      };

      const url = "https://norma.nomoreparties.space/api/orders";

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(allIngredientIds),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        dispatch(getOrderNumber(data));
        setOrderNumber(data.order?.number);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [data, dispatch]);

  return (
    <div className={styles.figures}>
      <span className="text text_type_digits-large mt-30">{orderNumber || 0}</span>
      <p className="text text_type_main-default mt-8">идентификатор заказа</p>
      <img src={orderImg} alt="заказ готов" className="mt-15" />
      <p className="mt-15 text text_type_main-small">
        Ваш заказ начали готовить
      </p>
      <p className="mt-2 text text_type_main-default text_color_inactive pb-30">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}

export default OrderDetails;
