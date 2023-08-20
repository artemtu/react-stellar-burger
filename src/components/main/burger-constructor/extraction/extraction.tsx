import React from "react";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./extraction.module.css";
import { useDispatch, useSelector } from "react-redux";
import { postOrder } from "../../../../store/actions/post-order";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { IbunConstructor } from "../bun-bottom-constructor/bun-bottom-constructor";

export interface IopenModal {
  openModal: openModalFunction;
}

type openModalFunction = () => void;

function Extraction({ openModal }: IopenModal) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //@ts-ignore
  const data = useSelector((state) => state.constructorBurger);

  //@ts-ignore
  const ingredientsForPrice = useSelector((state) => state.constructorBurger);
  const buns = ingredientsForPrice.bun || [];
  const ingredients = ingredientsForPrice.ingredients || [];

  //@ts-ignore
  const isLoggedIn = useSelector((state) => state.loginUser.isAuthChecked);
  // console.log(isLoggedIn);

  const totalPrice = React.useMemo(() => {
    const bunPrice = buns.reduce(
      (acc: number, item: IbunConstructor) => acc + (item.price * 2 || 0),
      0
    );
    const ingredientsPrice = ingredients.reduce(
      (acc: number, item: IbunConstructor) => acc + (item.price || 0),
      0
    );
    return bunPrice + ingredientsPrice;
  }, [buns, ingredients]);

  const isButtonDisabled =
    ingredientsForPrice.bun.length === 0 &&
    ingredientsForPrice.ingredients.length === 0;

  const onClick = () => {
    const bunsIds = data.bun.map((item: IbunConstructor) => item.id);
    const ingredientsIds = data.ingredients.map(
      (item: IbunConstructor) => item.id
    );
    const allIngredientIds = {
      ingredients: [...bunsIds, ...ingredientsIds],
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
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  );
}

Extraction.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default Extraction;
