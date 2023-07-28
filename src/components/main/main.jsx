import React, { useEffect, useState } from "react";
import styles from "./main.module.css";
import { TabMenu } from "../tab/tab";
import BunUpConstructor from "./burger-constructor/BunTopConstructor/BunTopConsctructor";
import BunBottomConstructor from "./burger-constructor/BunBottomConstructor/BunBottomConstructor";
import Ingredients from "./burger-constructor/Ingredients/Ingredients";
import IngredientList from "./burger-ingredients/ingredient-list/ingredienList";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients } from "../../store/actions/ingredientActions";
import { useDrag, useDrop } from "react-dnd";

import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Extraction from "./burger-constructor/extraction/extraction";

function Main({ setOrderModal, setIngredientModal }) {
  const dispatch = useDispatch();

  const selectIngredients = useSelector((state) => state.mainData);
  const data = useSelector((state) => state.constructorBurger);

  const bunsArray = selectIngredients.data.filter(
    (item) => item.type === "bun"
  );
  const fillingsArray = selectIngredients.data.filter(
    (item) => item.type === "main"
  );
  const sauceArray = selectIngredients.data.filter(
    (item) => item.type === "sauce"
  );

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchIngredients());
    };

    fetchData();
  }, [dispatch]);

  const [{ isOver }, dropRef] = useDrop({
    accept: "ingredients",
    drop: (item) => addIngredientsToConstructor(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  // const addIngredientsToConstructor = (item) => {
  //   console.log(item);
  // }

  const addIngredientsToConstructor = (item) => {
    const { type } = item;
    if (type === "bun") {
      dispatch({ type: "ADD_BUN", payload: item });
    } else {
      dispatch({ type: "ADD_INGREDIENT", payload: item });
    }
  };

  return (
    <main className={`${styles.content}`}>
      <section className={`${styles.menuBar} mt-10`}>
        <h1 className="text text_type_main-large">Соберите бургер</h1>
        <TabMenu />
        <div className={`${styles.scroll} custom-scroll`}>
          <h2 className="text text_type_main-medium mt-10">Булки</h2>
          <IngredientList
            data={bunsArray}
            setIngredientModal={setIngredientModal}
          />
          <h2 className="text text_type_main-medium mt-10">Соусы</h2>
          <IngredientList
            data={sauceArray}
            setIngredientModal={setIngredientModal}
          />
          <h2 className="text text_type_main-medium mt-10">Начинки</h2>
          <IngredientList
            data={fillingsArray}
            setIngredientModal={setIngredientModal}
          />
        </div>
      </section>

      {/* вторая часть страницы */}
      <section className={`${styles.burgerBar} mt-25 ml-10`} ref={dropRef}>
        <div className={`${styles.burgerBarContainer} ml-4 mr-4`}>
          <BunUpConstructor data={data.bun} />
          <Ingredients data={data.ingredients}/>
          <BunBottomConstructor data={data.bun} />
        </div>
        <Extraction setOrderModal={setOrderModal} />
      </section>
    </main>
  );
}

export default Main;
