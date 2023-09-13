import styles from "../ingredient-line/ingredient-line.module.css";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useMemo } from "react";

function ImagesIngredients({images}:any) {
  //@ts-ignore
  const ingredients = useSelector((state) => state.getFeed?.getFeed?.orders);
    //@ts-ignore
  const AllIngredients = useSelector((state) => state.mainData.data);

  const displayedImages = images ? images.slice(0, 5) : [];
  const hiddenCount = images ? images.length - 5 : 0;

  return (
    <div className={styles.test}>
      {displayedImages.map((item:any, index:number) => (
        <div key={index} className={styles.ingredients}>
          <img src={item} alt="" className={styles.ingredientPosition} />
        </div>
      ))}
      {hiddenCount > 0 && (
          <div className={styles.additionalIngredients}>+{hiddenCount}</div>
      )}
    </div>
  );
}

export default ImagesIngredients;

