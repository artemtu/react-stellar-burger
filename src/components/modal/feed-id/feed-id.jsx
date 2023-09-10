import React, { useEffect, useLayoutEffect, useState } from "react";
import Header from "../../app-header/app-header";
import styles from "./feed-id.module.css";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function FeedPage() {
  const { id } = useParams();


  const orders = useSelector((state) => state.getFeed.getFeed.orders);
  const thisOrder = orders.find((item) => item._id === id);
  const AllIngredients = useSelector((state) => state.mainData.data);

  const imagesFromStore = AllIngredients.reduce((acc, item) => {
    acc[item._id] = item.image_mobile;
    return acc;
  }, {});

  console.log(imagesFromStore);



  const idsInOrder = thisOrder.ingredients

  const imagesInOrder = idsInOrder.map((id) => imagesFromStore[id]);





  // const newData = lel.map((idArray) => {
  //   return idArray.map((id) => imagesFromStore[id]);
  // });

  // const newData = lel.map((idArray) => {
  //   return idArray.map((id) => imagesFromStore[id]);
  // });







  // orderNumber, name, status,  image, name , quantitym price for one, total price

  return (
    <>
      <div className={styles.container}>
        <p className="text text_type_digits-default"> {thisOrder.number}</p>
        <p className="text text_type_main-medium mt-10">{thisOrder.name}</p>
        <p className={`${styles.textColor} text text_type_main-medium mt-3`}>
          Выполнен
        </p>
        <p className="text text_type_main-medium mt-15">Состав:</p>
        <div className={`${styles.scroll} custom-scroll mt-6`}>
          {imagesInOrder.map((item, index) => (
          <div className={styles.ingredient}>
            <div className={styles.сircle}>
            <img
              src={item}
              alt=""
              className={styles.ingredientPosition}
            />
            </div>
            <div className={styles.price}>
              <p className="text text_type_main-small mr-30 ml-5">
                Краторная булка N-200i
              </p>
              <p className="text text_type_digits-default mr-2">2 x 988</p>
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
            <p className="text text_type_digits-default mr-2">500</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </>
  );
}

export default FeedPage;
