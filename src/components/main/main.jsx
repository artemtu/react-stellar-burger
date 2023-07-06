import React from "react";
import content from "./main.css";
import { TabMenu } from "../tab/tab";
import {Ingridients} from "../burgerIngredients/burgerIngredients";
import {Buns} from "../burgerIngredients/buns/buns";
import Sauce from "../burgerIngredients/sauces/sauces";
import Fillings from "../burgerIngredients/fillings/fillings";
import BunUpConstructor from "../burgerconstructor/BunTopConstructor/BunTopConsctructor"; 
import BunBottomConstructor from "../burgerconstructor/BunBottomConstructor/BunBottomConstructor";
import Ingredients from "../burgerconstructor/Ingredients/Ingredients";


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
      <section className="burger-bar custom-scroll mt-25 ml-10">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <BunUpConstructor/>
        <Ingredients/>
        <BunBottomConstructor/>
        </div>

      </section>
    </main>
  );
}

export default Main;



