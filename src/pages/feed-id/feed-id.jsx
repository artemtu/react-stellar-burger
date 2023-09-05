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
    <div className={styles.container}>
      <p className="text text_type_digits-default"> #03402304</p>
    </div>
  );
}

export default FeedPage;
