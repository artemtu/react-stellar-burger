import React from "react";
import content from "./main.css";
import { TabMenu } from "../tab/tab";
import {Ingridients} from "../burgerIngredients/burgerIngredients";
import {Buns} from "../burgerIngredients/buns/buns";
import Sauce from "../burgerIngredients/sauces/sauces";
import Fillings from "../burgerIngredients/fillings/fillings";
import Bun from "../burgerconstructor/bun/bun";
import Constructorelement from "../burgerconstructor/constructorelement";


function Main() {
  return (
    <main className="content">
      <section className="menu-bar mt-10 ">
        <h1 className="text text_type_main-large">Соберите бургер</h1>
        <TabMenu />
        <div className="scroll custom-scroll">
        <h2 className="text text_type_main-medium mt-10">Булки</h2>
        <Buns/>
        <h2 className="text text_type_main-medium mt-10">Соусы</h2>
        <Sauce/>
        <h2 className="text text_type_main-medium mt-10">Начинки</h2>
        <Fillings/>
        </div>
   
        
      </section>

      {/* вторая часть страницы */}
      <section className="burger-bar mt-25">
        <Constructorelement/>

      </section>
    </main>
  );
}

export default Main;



