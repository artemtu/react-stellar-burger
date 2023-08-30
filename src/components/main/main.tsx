import React, { useEffect, useState } from "react";
import styles from "./main.module.css";
import BunUpConstructor from "./burger-constructor/bun-top-constructor/bun-top-consctructor";
import BunBottomConstructor from "./burger-constructor/bun-bottom-constructor/bun-bottom-constructor";
import Ingredients from "./burger-constructor/Ingredients/Ingredients";
import IngredientList from "./burger-ingredients/ingredient-list/ingredient-list";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients } from "../../store/actions/fetch-data";
import { useDrag, useDrop } from "react-dnd";
import { v4 as uuidv4 } from "uuid";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import PropTypes from "prop-types";
import { ADD_BUN } from "../../store/actions/actions";
import { ADD_INGREDIENT } from "../../store/actions/actions";
import { openModalFunction } from "./burger-constructor/extraction/extraction";
import { IngredientModalState } from "./burger-ingredients/ingredient-list/ingredient-list";

import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Extraction from "./burger-constructor/extraction/extraction";

export interface IModalFunctions {
  openModal: openModalFunction;
  setIngredientModal: React.Dispatch<
    React.SetStateAction<IngredientModalState>
  >;
}

export interface IingredientFullInfo {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  calories: number;
  carbohydrates: number;
  image: string;
  image_large: string;
  image_mobile: string;
  __v: number;
}

interface IingredientWithId extends IingredientFullInfo {
  _constId: string;
}

function Main({ openModal, setIngredientModal }: IModalFunctions) {
  const dispatch = useDispatch();

  //@ts-ignore
  const selectIngredients = useSelector((state) => state.mainData);

  //@ts-ignore
  const data = useSelector((state) => state.constructorBurger);

  const bunsArray = selectIngredients.data.filter(
    (item: IingredientFullInfo) => item.type === "bun"
  );
  const fillingsArray = selectIngredients.data.filter(
    (item: IingredientFullInfo) => item.type === "main"
  );
  const sauceArray = selectIngredients.data.filter(
    (item: IingredientFullInfo) => item.type === "sauce"
  );

  const [{ isOver }, dropRef] = useDrop({
    accept: "ingredients",
    drop: (data: object) => {
      const newElement: IingredientWithId = { ...data as IingredientFullInfo, _constId: uuidv4() };
      addIngredientsToConstructor(newElement);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const addIngredientsToConstructor = (item: IingredientFullInfo) => {
    const { type } = item;
    if (type === "bun") {
      dispatch({ type: ADD_BUN, payload: item });
    } else {
      dispatch({ type: ADD_INGREDIENT, payload: item });
    }
  };

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
        <div className={`${styles.scroll} custom-scroll`}>
          <div ref={bunRef}>
            <div ref={inViewBunRef}>
              <h2 className="text text_type_main-medium mt-10">Булки</h2>
              <IngredientList
                data={bunsArray}
                setIngredientModal={setIngredientModal}
              />
            </div>
          </div>

          <div ref={sauceRef}>
            <div ref={inViewSauceRef}>
              <h2 className="text text_type_main-medium mt-10">Соусы</h2>
              <IngredientList
                data={sauceArray}
                setIngredientModal={setIngredientModal}
              />
            </div>
          </div>
          <div ref={mainRef}>
            <div ref={inViewMainRef}>
              <h2 className="text text_type_main-medium mt-10">Начинки</h2>
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
          <Ingredients data={data.ingredients} />
          <BunBottomConstructor data={data.bun} />
        </div>
        <Extraction openModal={openModal} />
      </section>
    </main>
  );
}

// Main.propTypes = {
//   openModal: PropTypes.func.isRequired,
//   setIngredientModal: PropTypes.func.isRequired,
// };

export default Main;
