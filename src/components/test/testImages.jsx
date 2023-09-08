import styles from "./test.module.css";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useMemo } from "react";

function ImagesIngredients() {
  const [data, setData] = useState([]);

  const ingredients = useSelector((state) => state.getFeed?.getFeed?.orders);
  const AllIngredients = useSelector((state) => state.mainData.data);

  useEffect(() => {
    if (ingredients) {
      setData(ingredients);
    }
  }, [ingredients]);

  // useMemo(()=>{
  //     const id = data.map((item) => item.ingredients)
  //     const orderIngredients = id.map((ingredientId) => {
  //     AllIngredients.filter((ingredient) => ingredient._id === ingredientId)
  //     });
  //     console.log(orderIngredients);

  //     // const images = orderIngredients.map((ingredient) => ingredient.image);
  //     // return { ...id, images };

  // });

  const ids = data.map((item) => item.ingredients);

  // const orderIngredients = useMemo(() => {
  //     if (!AllIngredients) {
  //       return [];
  //     }
  //     return ids.map(
  //       (item) => AllIngredients.filter((ingredient) => ingredient._id === item)[0]
  //     );
  //   }, [ids, AllIngredients]);

  const databaseItems = [
    {
      image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
    },
    {
      image_mobile: "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
    },
    {
      image_mobile: "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
    },
  ];

  // console.log(AllIngredients);

  return (
    <div className={styles.test}>
      {databaseItems.map((item, index) => (
        <div className={`${styles.ingredients}`}>
          <img
            key={index}
            src={item.image_mobile}
            alt=""
            className={styles.ingredientPosition}
          />
        </div>
      ))}
    </div>
  );
}

export default ImagesIngredients;
