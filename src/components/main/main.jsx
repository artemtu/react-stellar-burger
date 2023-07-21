import React from "react";
import content from "./main.css";
import { TabMenu } from "../tab/tab";
import { Ingridients } from "./burger-ingredients/burgerIngredients";
import { Buns } from "./burger-ingredients/buns/buns";
import Sauce from "./burger-ingredients/sauces/sauces";
import Fillings from "./burger-ingredients/fillings/fillings";
import BunUpConstructor from "./burger-constructor/BunTopConstructor/BunTopConsctructor";
import BunBottomConstructor from "./burger-constructor/BunBottomConstructor/BunBottomConstructor";
import Ingredients from "./burger-constructor/Ingredients/Ingredients";

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
    <main className="content">
      <section className="menu-bar mt-10">
        <h1 className="text text_type_main-large">Соберите бургер</h1>
        <TabMenu />
        <div className="scroll custom-scroll">
          <h2 className="text text_type_main-medium mt-10">Булки</h2>
          <Buns data={bunsArray} setIngredientModal={setIngredientModal} />
          <h2 className="text text_type_main-medium mt-10">Соусы</h2>
          <Sauce data={sauceArray} setIngredientModal={setIngredientModal} />
          <h2 className="text text_type_main-medium mt-10">Начинки</h2>
          <Fillings
            data={fillingsArray}
            setIngredientModal={setIngredientModal}
          />
        </div>
      </section>

      {/* вторая часть страницы */}
      <section className="burger-bar mt-25 ml-10">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            maxHeight: "60vh",
          }}
          className="ml-4 mr-4"
        >
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

// {`${styles.header} p10`}