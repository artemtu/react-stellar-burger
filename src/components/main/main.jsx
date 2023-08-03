import React, { useEffect, useState } from "react";
import styles from "./main.module.css";
import BunUpConstructor from "./burger-constructor/bun-top-constructor/bun-top-consctructor";
import BunBottomConstructor from "./burger-constructor/bun-bottom-constructor/bun-bottom-constructor";
import Ingredients from "./burger-constructor/Ingredients/Ingredients";
import IngredientList from "./burger-ingredients/ingredient-list/ingredient-list";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients } from "../../store/actions/ingredient-actions";
import { useDrag, useDrop } from "react-dnd";
import { v4 as uuidv4 } from "uuid";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import PropTypes from "prop-types";


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

  // const [{ isOver }, dropRef] = useDrop({
  //   accept: "ingredients",
  //   drop: (item) => addIngredientsToConstructor(item),
  //   collect: (monitor) => ({
  //     isOver: !!monitor.isOver(),
  //   }),
  // });

  const [{ isOver }, dropRef] = useDrop({
    accept: "ingredients",
    drop: (data) => {
      const newElement = { ...data, _constId: uuidv4() }; 
      addIngredientsToConstructor(newElement);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
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

  // const dataToSend = {
  //   ingredients: ["643d69a5c3f7b9001cfa0943", "643d69a5c3f7b9001cfa0943"],
  // };

  const bunRef = useRef(null);
  const mainRef = useRef(null);
  const sauceRef = useRef(null);

  const [inViewBunRef, bunIsInView] = useInView({
    threshold: 0.9,
  });
  const [inViewSauceRef, sauceIsInView] = useInView({
    threshold: 0.9,
  });
  const [inViewMainRef, mainIsInView] = useInView({
    threshold: 0.1,
  });

  const [current, setCurrent] = useState("one");




  return (
    <main className={`${styles.content}`}>
      <section className={`${styles.menuBar} mt-10`}>
        <h1 className="text text_type_main-large">Соберите бургер</h1>
        <div className={`${styles.tab} mt-5`}>
          <Tab value="one" active={bunIsInView} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value="two" active={sauceIsInView} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab value="three" active={mainIsInView} onClick={setCurrent}>
            Начинки
          </Tab>
        </div>
        <div className={`${styles.scroll} custom-scroll`} >
          <div ref={bunRef}>
            <div ref={inViewBunRef}>
          <h2 className="text text_type_main-medium mt-10" >Булки</h2>
          <IngredientList
            data={bunsArray}
            setIngredientModal={setIngredientModal}
          />
            </div>
          </div>
          
          <div ref={sauceRef}>
            <div ref={inViewSauceRef}>
          <h2 className="text text_type_main-medium mt-10" >Соусы</h2>
          <IngredientList
            data={sauceArray}
            setIngredientModal={setIngredientModal}
          />
            </div>
          </div>
          <div ref={mainRef}>
            <div ref={inViewMainRef}>
          <h2 className="text text_type_main-medium mt-10" >Начинки</h2>
          <IngredientList
            data={fillingsArray}
            setIngredientModal={setIngredientModal}
          />
            </div>
          </div>
        </div>
      </section>

      {/* вторая часть страницы */}
      <section className={`${styles.burgerBar} mt-25 ml-10`} ref={dropRef}>
        <div className={`${styles.burgerBarContainer} ml-4 mr-4`}>
          <BunUpConstructor data={data.bun} />
          <Ingredients data={data.ingredients} index={data.index} />
          <BunBottomConstructor data={data.bun} />
        </div>
        <Extraction setOrderModal={setOrderModal} />
      </section>
    </main>
  );
}


export default Main;





