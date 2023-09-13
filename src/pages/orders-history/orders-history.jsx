import React, { useState } from "react";
import styles from "./orders-history.module.css";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import ImagesIngredients from "../../components/images-line/images-line";

function OrdersHistory() {
  const myOrders = useSelector((state) => state.myOrders.getMyFeed.orders);
  const AllIngredients = useSelector((state) => state.mainData.data);

  const newAllIngredients = AllIngredients.reduce((acc, item) => {
    acc[item._id] = item.image_mobile;
    return acc;
  }, {});

  const ids = myOrders.map((item) => item.ingredients);

  const newData = ids.map((idArray) => {
    return idArray.map((id) => newAllIngredients[id]);
  });

  // const priceForIngredient = AllIngredients.reduce((acc, item) => {
  //   acc[item._id] = item.price;
  //   return acc;
  // }, {});

  const priceForIngredient = AllIngredients.reduce((acc, item) => {
    let price = item.price;

    if (
      item._id === "643d69a5c3f7b9001cfa093d" ||
      item._id === "643d69a5c3f7b9001cfa093d"
    ) {
      price *= 2;
    }

    acc[item._id] = price;
    return acc;
  }, {});

  const priceForOrder = ids.map((idArray) => {
    return idArray.reduce((acc, id) => acc + priceForIngredient[id], 0);
  });

  return (
    <div className={`${styles.scroll} custom-scroll mt-20 pr-2`}>
      {myOrders.map((item, index) => (
        <div className={styles.containerStyle}>
          <div className={`${styles.numberDate} mt-6`}>
            <p className="text text_type_digits-default mt-5 ml-5">
              {item.number}
            </p>
            <div className="text text_type_main-default text_color_inactive mt-5 mr-3">
              <FormattedDate date={new Date(item.createdAt)} />
            </div>
          </div>
          <p className="text text_type_main-medium mt-6 ml-5">
            Death Star Starship Main Burger
          </p>
          <p className={`text text_type_main-small mt-2 ml-5`}>{item.status}</p>
          <div className={`${styles.container} mt-6 ml-5`}>
            <div className={styles.test}>
              <div className={styles.container}>
                <ImagesIngredients images={newData[index]} />
              </div>
            </div>

            <div className={`${styles.totalPrice} mt-6 mr-5`}>
              <p className="text text_type_digits-default mr-2">
                {" "}
                {priceForOrder[index]}
              </p>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrdersHistory;
