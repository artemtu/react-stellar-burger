import React, { useEffect, useLayoutEffect, useState } from "react";
import Header from "../app-header/app-header";
import styles from "./my-order-id-modal.module.css";

import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../store/types";

function MyOrderIdModal({ id }) {
  const AllIngredients = useAppSelector((state) => state.mainData.data);
  //@ts-ignore
  const orders = useAppSelector((state) => state.myOrders.getMyFeed.orders);
  const orderId = useAppSelector((state) => state.myOrderId.myOrderId);

  let thisOrder;

  if (id) {
    thisOrder = orders.find((item: any) => item._id === id);
  } else if (orderId) {
    thisOrder = orders.find((item: any) => item._id === orderId);
  }

  // const thisOrder = orders.find((item) => item._id === orderId);

  const countById = thisOrder.ingredients.reduce((acc, id) => {
    acc[id] = (acc[id] || 0) + 1;
    return acc;
  }, {});

  const ingredientsData = AllIngredients.map((item) => ({
    id: item._id,
    image: item.image_mobile,
    name: item.name,
    price: item.price,
  }));

  const idsInOrder = thisOrder.ingredients;

  const test = idsInOrder.reduce((acc, id) => {
    const foundIngredient = ingredientsData.find((item) => item.id === id);

    const existingIngredient = acc.find((item) => item.id === id);

    let incrementValue = countById[id];

    if (
      id === "643d69a5c3f7b9001cfa093d" ||
      id === "643d69a5c3f7b9001cfa093d"
    ) {
      incrementValue *= 2;
    }

    if (existingIngredient) {
      existingIngredient.count += incrementValue;
    } else {
      acc.push({
        ...foundIngredient,
        count: incrementValue,
      });
    }

    return acc;
  }, []);

  const totalSum = test
    .map((item) => item.count * item.price)
    .reduce((acc, val) => acc + val, 0);

  return (
    <>
      <div className={`${styles.orderNumber}`}>
        <p className="text text_type_digits-default mt-15">
          {" "}
          {"#" + thisOrder.number}
        </p>
      </div>
      <p className="text text_type_main-medium mt-10 ml-5">{thisOrder.name}</p>
      <p className={`${styles.textColor} text text_type_main-medium mt-3 ml-5`}>
        {thisOrder.status}
      </p>
      <p className="text text_type_main-medium mt-15 ml-5">Состав:</p>
      <div className={`${styles.scroll} custom-scroll mt-6 ml-5`}>
        {test.map((item, index) => (
          <div className={styles.ingredient} key={index}>
            <div className={styles.nameContainer}>
              <div className={styles.сircle}>
                <img
                  src={item.image}
                  alt=""
                  className={styles.ingredientPosition}
                />
              </div>
              <p className="text text_type_main-small mt-8 ml-5">{item.name}</p>
            </div>
            <div className={styles.price}>
              <p className="text text_type_digits-default mr-2">
                {item.count} x {item.price}
              </p>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.totalContainer}>
        <FormattedDate
          date={new Date(thisOrder.createdAt)}
          className="text text_type_main-default text_color_inactive"
        />
        <div className={styles.totalPrice}>
          <p className="text text_type_digits-default mr-2">{totalSum}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </>
  );
}

export default MyOrderIdModal;
