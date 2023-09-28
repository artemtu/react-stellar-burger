import React from "react";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./extraction.module.css";
import { postOrder } from "../../../../store/actions/post-order";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../store/types";

type Props = {
  openModal: () => void;
};

type AllIngredientsIds = {
  ingredients: string[];
};

function Extraction({ openModal }: Props) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const data = useAppSelector((state) => state.constructorBurger);

  const ingredientsForPrice = useAppSelector(
    (state) => state.constructorBurger
  );

  const buns = ingredientsForPrice.constructorBurger.bun || [];

  const ingredients = ingredientsForPrice.constructorBurger.ingredients || [];

  const isLoggedIn = useAppSelector(
    (state) => state.loginUser.loginUser.isAuthChecked
  );

  const totalPrice = React.useMemo(() => {
    const bunPrice = buns.reduce(
      (acc: any, item) => acc + (item.price * 2 || 0),
      0
    );
    const ingredientsPrice = ingredients.reduce(
      (acc: any, item) => acc + (item.price || 0),
      0
    );
    return bunPrice + ingredientsPrice;
  }, [buns, ingredients]);

  const isButtonDisabled =
    ingredientsForPrice.constructorBurger.bun.length === 0 &&
    ingredientsForPrice.constructorBurger.ingredients.length === 0;

  const onClick = () => {
    const bunsIds = data.constructorBurger.bun.map((item) => item.id);

    const ingredientsIds = data.constructorBurger.ingredients.map(
      (item) => item.id
    );
    const allIngredientIds: AllIngredientsIds = {
      ingredients: [...bunsIds, ...ingredientsIds].filter(Boolean as any),
    };

    if (isLoggedIn) {
      dispatch(postOrder(allIngredientIds, openModal));
    } else {
      navigate("/login");
    }
  };

  return (
    <div className={`${styles.extraction} mr-4 mt-10`}>
      <p className="text text_type_digits-medium pr-2">{totalPrice}</p>
      <CurrencyIcon type="primary" />
      <div className="ml-10">
        <Button
          htmlType="button"
          type="primary"
          size="large"
          extraClass="ml-2"
          onClick={onClick}
          disabled={isButtonDisabled}
          id="extractionButton"
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  );
}

export default Extraction;
