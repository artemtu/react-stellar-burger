import styles from "../ingredient-line/ingredient-line.module.css";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useMemo } from "react";

function ImagesIngredients({images}) {
  const ingredients = useSelector((state) => state.getFeed?.getFeed?.orders);
  const AllIngredients = useSelector((state) => state.mainData.data);

  return (
    <div className={styles.test}>
      {images &&
        images.map((item, index) => (
          <div key={index} className={styles.ingredients}>
            <img src={item} alt="" className={styles.ingredientPosition} />
          </div>
        ))}
    </div>
  );
}

export default ImagesIngredients;
