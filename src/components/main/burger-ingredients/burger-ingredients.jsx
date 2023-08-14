import React from "react";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredient-list/ingredient-list.module.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export function Ingridients({
  id,
  type,
  image,
  name,
  price,
  setIngredientModal,
}) {


  const [{ isDragging }, dragRef] = useDrag({
    type: "ingredients",
    item: { id, image, name, price, type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const bunsIngredientsFromStore = useSelector(
    (state) => state.constructorBurger
  );

  const bunCount =
    bunsIngredientsFromStore.bun.filter((item) => item.id === id).length * 2;
  const ingredientCount = bunsIngredientsFromStore.ingredients.filter(
    (item) => item.id === id
  ).length;
  const totalCount = bunCount + ingredientCount;


  const onClick = () => {
    window.history.pushState({}, "", `/ingredients/${id}`);
    setIngredientModal({ open: true, id });
  };
  return (
    <div
      ref={dragRef}
      className={isDragging ? styles.dragging : styles.notDragging}
    >
      <div className={styles.relatives}>
        <img className="pl-4 mt-6" src={image} alt={name} onClick={onClick} />
        {totalCount > 0 && (
          <Counter count={totalCount} size="default" extraClass="m-1" />
        )}
      </div>
      <div className={`${styles.prices} mt-1 mb-1`}>
        <p className="text text_type_digits-default pr-2">{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-default">{name}</p>
    </div>
  );
}

Ingridients.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  setIngredientModal: PropTypes.func.isRequired,
};

export default Ingridients;
