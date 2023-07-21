import React from "react";
import styles from "./main.module.css";
import { TabMenu } from "../tab/tab";
import BunUpConstructor from "./burger-constructor/BunTopConstructor/BunTopConsctructor";
import BunBottomConstructor from "./burger-constructor/BunBottomConstructor/BunBottomConstructor";
import Ingredients from "./burger-constructor/Ingredients/Ingredients";
import IngredientList from "./burger-ingredients/ingredient-list/ingredienList";

import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Extraction from "./burger-constructor/extraction/extraction";

// const ingredients = data.filter((item) => item.type !== "bun");

function Main({ setOrderModal, setIngredientModal, data }) {
  const bunsArray = data.filter((item) => item.type === "bun");
  const fillingsArray = data.filter((item) => item.type === "main");
  const sauceArray = data.filter((item) => item.type === "sauce");
  const bun = data.filter((item) => item.name === "Краторная булка N-200i");
  const ingredients = data.filter((item) => item.type !== "bun");
 

  return (
    <main className={`${styles.content}`}>
      <section className={`${styles.menuBar} mt-10`}>
        <h1 className="text text_type_main-large">Соберите бургер</h1>
        <TabMenu />
        <div className={`${styles.scroll} custom-scroll`}>
          <h2 className="text text_type_main-medium mt-10">Булки</h2>
          <IngredientList data={bunsArray} setIngredientModal={setIngredientModal} />
          <h2 className="text text_type_main-medium mt-10">Соусы</h2>
          <IngredientList data={sauceArray} setIngredientModal={setIngredientModal} />
          <h2 className="text text_type_main-medium mt-10">Начинки</h2>
          <IngredientList
            data={fillingsArray}
            setIngredientModal={setIngredientModal}
          />
        </div>
      </section>

      {/* вторая часть страницы */}
      <section className={`${styles.burgerBar} mt-25 ml-10`}>
        <div className={`${styles.burgerBarContainer} ml-4 mr-4`}>
          <BunUpConstructor data={bun} />
          <Ingredients data={ingredients}/>
          <BunBottomConstructor data={bun} />
        </div>
        <Extraction setOrderModal={setOrderModal} />
      </section>
    </main>
  );
}

export default Main;
