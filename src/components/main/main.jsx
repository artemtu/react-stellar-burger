import React, {useEffect, useState} from "react";
import styles from "./main.module.css";
import { TabMenu } from "../tab/tab";
import BunUpConstructor from "./burger-constructor/BunTopConstructor/BunTopConsctructor";
import BunBottomConstructor from "./burger-constructor/BunBottomConstructor/BunBottomConstructor";
import Ingredients from "./burger-constructor/Ingredients/Ingredients";
import IngredientList from "./burger-ingredients/ingredient-list/ingredienList";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients } from "../../store/actions/ingredientActions";
import { getIngredients } from "../../store/actions/constructorActions";
import { getIngredientIds } from "../../store/actions/idIngredients";
import { removeIngredient } from "../../store/actions/addRemove";
import { useDrag, useDrop } from "react-dnd";



import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Extraction from "./burger-constructor/extraction/extraction";

// const ingredients = data.filter((item) => item.type !== "bun");

function Main({ setOrderModal, setIngredientModal }) {
  const dispatch = useDispatch();

  const selectIngredients = useSelector((state) => state.mainData);


  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchIngredients());
    };

    fetchData();
  }, [dispatch]);
 
  useEffect(() => {
    if (selectIngredients.data.length > 0) {
      dispatch(getIngredients(bun, ingredients));
    }
  }, [selectIngredients.data, dispatch]);




  
  const constructorData = useSelector((state) => state.constructorBurger);
  const buns = constructorData.bun;
  const ingredintListFromConstructor = constructorData.ingredients;


  

  useEffect(() => {
    if (buns && ingredintListFromConstructor.length > 0) {
      const allIngredientIds = [...bun, ...ingredients].map((item) => item._id);
      dispatch(getIngredientIds(allIngredientIds));
    }
  }, [buns, ingredintListFromConstructor, dispatch]);

  const ingredientToRemove = '643d69a5c3f7b9001cfa0941';
  const isDataLoaded = selectIngredients.data.length > 0;
  
  useEffect(() => {
    if (isDataLoaded) {
      dispatch(removeIngredient(ingredientToRemove));
    }
  }, [dispatch, isDataLoaded, ingredientToRemove]);

  const[draggedElements, setDraggedElements] = useState([])





  const bunsArray = selectIngredients.data.filter((item) => item.type === "bun");
  const fillingsArray = selectIngredients.data.filter(
    (item) => item.type === "main"
  );
  const sauceArray = selectIngredients.data.filter((item) => item.type === "sauce");
  const bun = selectIngredients.data.filter(
    (item) => item.name === "Краторная булка N-200i"
  );
  const ingredients = selectIngredients.data.filter((item) => item.type !== "bun");

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
      <section className={`${styles.burgerBar} mt-25 ml-10`}>
        <div className={`${styles.burgerBarContainer} ml-4 mr-4`}>
          <BunUpConstructor data={bun} />
          <Ingredients data={ingredients}  />
          <BunBottomConstructor data={bun} />
        </div>
        <Extraction setOrderModal={setOrderModal} />
      </section>
    </main>
  );
}

export default Main;
