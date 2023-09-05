import React from "react";
import styles from "./feed.module.css";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function Feed() {
  const today = new Date();
  const yesterday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 1,
    today.getHours(),
    today.getMinutes() - 1,
    0
  );

  return (
    <section className={`${styles.menuBar} mt-10`}>
      <h1 className="text text_type_main-large">Лента заказов</h1>
      <div>
        <div className={`${styles.numberDate} mt-6`}>
          <p className="text text_type_digits-default"> #03402304</p>
          <FormattedDate
            date={yesterday}
            className="text text_type_main-default text_color_inactive"
          />
        </div>
        <p className="text text_type_main-medium mt-6">
          Death Star Starship Main Burger
        </p>
        <div className={`${styles.container} mt-6`}>
          <div className={styles.ingredients}>
            <img
              src="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
              alt=""
              className={styles.kek}
            />
          </div>
          <div className={`${styles.totalPrice} mt-6`}>
          <p className="text text_type_digits-default mr-2">4800</p>
          <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feed;
