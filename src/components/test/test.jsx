import React, { useEffect, useLayoutEffect, useState } from "react";
import Header from "../app-header/app-header";
import styles from "./test.module.css";

import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

function TestPage({id}) {


  const orders = useSelector((state) => state.getFeed.getFeed);



  const thisOrder = orders.find((item) => item._id === id);

  // const thisOrder = orders.find((item) => item._id === feedModalId);

  const AllIngredients = useSelector((state) => state.mainData.data);

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
    if (existingIngredient) {
      existingIngredient.count += 1;
    } else {
      acc.push({
        ...foundIngredient,
        count: countById[id],
      });
    }
    return acc;
  }, []);

  const totalSum = test
    .map((item) => item.count * item.price)
    .reduce((acc, val) => acc + val, 0);

  return (
    <>
      <div className={styles.container}>
        <p className="text text_type_digits-default">
          {" "}
          {"#" + thisOrder.number}
        </p>
        <p className="text text_type_main-medium mt-10">{thisOrder.name}</p>
        <p className={`${styles.textColor} text text_type_main-medium mt-3`}>
          {thisOrder.status}
        </p>
        <p className="text text_type_main-medium mt-15">Состав:</p>
        <div className={`${styles.scroll} custom-scroll mt-6`}>
          {test.map((item, index) => (
            <div className={styles.ingredient}>
              <div className={styles.nameContainer}>
                <div className={styles.сircle}>
                  <img
                    src={item.image}
                    alt=""
                    className={styles.ingredientPosition}
                  />
                </div>
                <p className="text text_type_main-small mt-8 ml-5">
                  {item.name}
                </p>
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
      </div>
    </>
  );
}

export default TestPage;
