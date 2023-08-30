import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { REMOVE_INGREDIENT } from "../../../../store/actions/actions";
import { useEffect } from "react";
import { useDrag, useDrop } from "react-dnd";
import { changeIngredient } from "../../../../store/actions/add-remove";
import PropTypes from "prop-types";

import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ingredients.module.css";
import { IbunConstructorProps } from "../bun-bottom-constructor/bun-bottom-constructor";

function Ingredients({ data }: IbunConstructorProps) {
  const dispatch = useDispatch();

  //@ts-ignore
  const handleRemoveIngredient = (_constId) => {
    dispatch({ type: REMOVE_INGREDIENT, payload: _constId });
  };

  return (
    <div className={`${styles.list} custom-scroll`}>
      {data.map((item, index) => (
        <DraggableIngredient
          key={item._constId}
          data={item}
          index={index}
          onRemove={handleRemoveIngredient}
        />
      ))}
    </div>
  );
}

interface IDraggableIngredientProps {
  data: {
    _id: string;
    name: string;
    price: number;
    image: string;
    _constId: string;
  };
  index: number;
  onRemove: (id: string, index?: number) => void;
}

interface IHoverProps {
  ingredient: {
    _id: string;
    _constId: string;
  };
}

function DraggableIngredient({
  data,
  onRemove,
  index,
}: IDraggableIngredientProps) {
  const dispatch = useDispatch();

  const ingredientsArray = useSelector(
    //@ts-ignore
    (store) => store.constructorBurger.ingredients
  );

  interface Styles {
    constructor: string;
  }

  const findIndex = (item: string) => ingredientsArray.indexOf(item);

  const [{ isDragging }, dragRef] = useDrag({
    type: "sort",
    item: { ingredient: data },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "sort",
    hover({ ingredient }: IHoverProps) {
      if (ingredient._constId === data._constId) return;
      dispatch(
        changeIngredient({
          //@ts-ignore
          indexFrom: findIndex(ingredient),
          indexTo: index,
          ingredient: ingredient,
        })
      );
    },
  });

  return (
    <div ref={(node) => dragRef(dropRef(node))} className={styles.constructorBurger}>
      <DragIcon type="primary" />
      <ConstructorElement
        // className="items"
        text={data.name}
        price={data.price}
        thumbnail={data.image}
        handleClose={() => onRemove(data._constId)}
      />
    </div>
  );
}

// Ingredients.propTypes = {
//   data: PropTypes.array.isRequired,
// };

export default Ingredients;
