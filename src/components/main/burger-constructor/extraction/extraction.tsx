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
import { IingredientFullInfo } from "../../main";
import { useAppDispatch, useAppSelector } from "../../../../store/types";

type Props = {
  openModal: () => void;
};

function Extraction({ openModal }: Props) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const data = useAppSelector((state) => state.constructorBurger);

  const ingredientsForPrice = useAppSelector(
    (state) => state.constructorBurger
  );
  const buns = ingredientsForPrice.bun || [];
  const ingredients = ingredientsForPrice.ingredients || [];

  const isLoggedIn = useAppSelector((state) => state.loginUser.isAuthChecked);

  const totalPrice = React.useMemo(() => {
    const bunPrice = buns.reduce(
      (acc: number, item: IingredientFullInfo) => acc + (item.price * 2 || 0),
      0
    );
    const ingredientsPrice = ingredients.reduce(
      (acc: number, item: IingredientFullInfo) => acc + (item.price || 0),
      0
    );
    return bunPrice + ingredientsPrice;
  }, [buns, ingredients]);

  const isButtonDisabled =
    ingredientsForPrice.bun.length === 0 &&
    ingredientsForPrice.ingredients.length === 0;

  const onClick = () => {
    const bunsIds = data.bun.map((item: IingredientFullInfo) => item.id);
    const ingredientsIds = data.ingredients.map(
      (item: IingredientFullInfo) => item.id
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
          id="extractionButton"
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
