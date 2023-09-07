import styles from "./test.module.css";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function LineIngredients() {
  const [data, setData] = useState([]);


  const ingredients = useSelector((state) => state.getFeed?.getFeed?.orders);

  useEffect(() => {
    if (ingredients) {
      setData(ingredients);
    }
  }, [ingredients]);

  return (
    <div className={`${styles.scroll} custom-scroll mt-6 pr-2`}>
      {data.map((item, index) => (
        <div key={index}>
          <div className={`${styles.numberDate} mt-6`}>
            <p className="text text_type_digits-default">{item.number}</p>
            <div className="text text_type_main-default text_color_inactive">
            <FormattedDate date={new Date(item.createdAt)} />
            </div>
          </div>
          <p className="text text_type_main-medium mt-6">{item.name}</p>
          <div className={`${styles.container} mt-6`}>
            <div className={styles.test}>
              <div className={styles.ingredients}>
                <img
                  src="https://code.s3.yandex.net/react/code/bun-02-mobile.png"
                  alt=""
                  className={styles.ingredientPosition}
                />
              </div>
            </div>
            <div className={`${styles.totalPrice} mt-6`}>
              <p className="text text_type_digits-default mr-2">111</p>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LineIngredients;
