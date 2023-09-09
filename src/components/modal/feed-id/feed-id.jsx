import React, { useEffect } from "react";
import Header from "../../app-header/app-header";
import styles from "./feed-id.module.css";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";

function FeedPage({id}) {




  const today = new Date();
  const yesterday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 1,
    today.getHours(),
    today.getMinutes() - 1,
    0
  );

 // orderNumber, name, status,  image, name , quantitym price for one, total price

  return (
    <>
      <div className={styles.container} >
        <p className="text text_type_digits-default"> 03402304</p>
        <p className="text text_type_main-medium mt-10">
          Death Star Starship Main Burger
        </p>
        <p className={`${styles.textColor} text text_type_main-medium mt-3`}>
          Выполнен
        </p>
        <p className="text text_type_main-medium mt-15">Состав:</p>
        <div className={`${styles.scroll} custom-scroll mt-6`}>
          <div className={styles.ingredient}>
            <img
              src="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
              alt=""
            />
            <div className={styles.price}>
              <p className="text text_type_main-small mr-30">
                Краторная булка N-200i
              </p>
              <p className="text text_type_digits-default mr-2">2 x 988</p>
              <CurrencyIcon type="primary" />
            </div>
          </div>

          <div className={styles.ingredient}>
            <img
              src="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
              alt=""
            />
            <div className={styles.price}>
              <p className="text text_type_main-small mr-30">
                Краторная булка N-200i
              </p>
              <p className="text text_type_digits-default mr-2">2 x 988</p>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </div>

        <div className={styles.totalContainer}>
          <FormattedDate
            date={yesterday}
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
