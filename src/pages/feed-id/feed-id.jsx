import React, { useEffect } from "react";
import Header from "../../components/app-header/app-header";
import styles from "./feed-id.module.css";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function FeedPage() {
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
    <>
    <div className={styles.container}>
      <p className="text text_type_digits-default"> #03402304</p>
      <p className="text text_type_main-medium mt-10">Death Star Starship Main Burger</p>
      <p className={`${styles.textColor} text text_type_main-medium mt-3`}>Выполнен</p>
      <p className= "text text_type_main-medium mt-15">Состав:</p>
    </div>

    <div>
      
    </div>
    </>
  );
}

export default FeedPage;
