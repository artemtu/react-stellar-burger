import styles from "./ingredient-line.module.css";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect, useState } from "react";
import ImagesIngredients from "../images-line/images-line";
import { useNavigate } from "react-router-dom";
import { setOrderId } from "../../store/actions/feed-modal";
import { useAppSelector, useAppDispatch } from "../../store/types";
import { Iorders } from "../../store/types";

interface IngredientsLineProps {
  setIsFeedIdModal: React.Dispatch<
    React.SetStateAction<{ open: boolean; id: string }>
  >;
}

function IngredientsLine({ setIsFeedIdModal }: IngredientsLineProps) {
  const [data, setData] = useState<Iorders[]>([]);
  const navigate = useNavigate();

  const ingredients = useAppSelector((state) => state.getFeed?.getFeed?.orders);

  const AllIngredients = useAppSelector(
    (state) => state.mainData.mainData.data
  );

  useEffect(() => {
    if (ingredients) {
      setData(ingredients);
    }
  }, [ingredients]);

  const newAllIngredients = AllIngredients.reduce<Record<string, string>>(
    (acc, item) => {
      if (item._id && item.image_mobile) {
        acc[item._id] = item.image_mobile;
      }
      return acc;
    },
    {}
  );

  const ids = data.map((item) => item.ingredients);

  const newData = ids.map((idArray) => {
    if (!Array.isArray(idArray)) return null;
    return idArray.map((id: string) => newAllIngredients[id]);
  });

  const priceForIngredient = AllIngredients.reduce<Record<string, number>>(
    (acc, item) => {
      if (item._id && item.price) {
        acc[item._id] = item.price;
      }
      return acc;
    },
    {}
  );

  const priceForOrder = ids.map((idArray) => {
    if (!Array.isArray(idArray)) return null;
    return idArray.reduce((acc, id) => acc + priceForIngredient[id], 0);
  });

  const dispatch = useAppDispatch();

  const handleOrderClick = (id: string) => {
    window.history.pushState({}, "", `/feed/${id}`);
    dispatch(setOrderId(id));
    setIsFeedIdModal({ open: true, id });
  };

  return (
    <div className={`${styles.scroll} custom-scroll mt-6 pr-2`}>
      {data.map((item, index) => (
        <div
          key={index}
          className={styles.containerStyle}
          onClick={() => handleOrderClick(item._id)}
        >
          <div className={`${styles.numberDate} mt-6`}>
            <p className="text text_type_digits-default mt-3 ml-3">
              {item.number}
            </p>
            <div className="text text_type_main-default text_color_inactive mt-3 mr-3">
              <FormattedDate date={new Date(item.createdAt)} />
            </div>
          </div>

          <p className="text text_type_main-medium mt-6 ml-3">{item.name}</p>
          <div className={`${styles.container} mt-6`}>
            <ImagesIngredients images={newData[index]} />

            <div className={`${styles.totalPrice} mt-6`}>
              <p className="text text_type_digits-default mr-2">
                {priceForOrder[index]}
              </p>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default IngredientsLine;
