import styles from "./ingredient-line.module.css";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ImagesIngredients from "../images-line/images-line";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setOrderId } from "../../store/actions/feed-modal";
import { useAppSelector } from "../../store/types";

function IngredientsLine({ setIsFeedIdModal }: any) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const ingredients = useAppSelector((state) => state.getFeed?.getFeed?.orders);

  const AllIngredients = useAppSelector((state) => state.mainData.data);

  useEffect(() => {
    if (ingredients) {
      setData(ingredients);
    }
  }, [ingredients]);
  //@ts-ignore
  const newAllIngredients = AllIngredients.reduce((acc, item) => {
    acc[item._id] = item.image_mobile;
    return acc;
  }, {});

  const ids = data.map((item) => item.ingredients);

  const newData = ids.map((idArray) => {
    return idArray.map((id: string) => newAllIngredients[id]);
  });
  //@ts-ignore
  const priceForIngredient = AllIngredients.reduce((acc, item) => {
    acc[item._id] = item.price;
    return acc;
  }, {});

  const priceForOrder = ids.map((idArray) => {
    //@ts-ignore
    return idArray.reduce((acc, id) => acc + priceForIngredient[id], 0);
  });

  const dispatch = useDispatch();

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
