import React, {useEffect} from "react";
import styles from "./main.module.css";
import { TabMenu } from "../tab/tab";
import BunUpConstructor from "./burger-constructor/BunTopConstructor/BunTopConsctructor";
import BunBottomConstructor from "./burger-constructor/BunBottomConstructor/BunBottomConstructor";
import Ingredients from "./burger-constructor/Ingredients/Ingredients";
import IngredientList from "./burger-ingredients/ingredient-list/ingredienList";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients } from "../../store/actions/ingredientActions";
import { getIngredients } from "../../store/actions/constructorActions";









import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Extraction from "./burger-constructor/extraction/extraction";

// const ingredients = data.filter((item) => item.type !== "bun");

function Main({ setOrderModal, setIngredientModal }) {
  const dispatch = useDispatch();

  const selectIngredients = useSelector((state) => state.ingredients);
  // useEffect(() => {
  //   dispatch(fetchIngredients());
  // }, []);


  // useEffect(() => {
  //   dispatch(getIngredients(bun, ingredients));
  // }, []);

  // if (selectIngredients.isLoading) {
  //   return <span>загрузка</span>;
  // }
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
          <Ingredients data={ingredients} />
          <BunBottomConstructor data={bun} />
        </div>
        <Extraction setOrderModal={setOrderModal} />
      </section>
    </main>
  );
}

export default Main;
