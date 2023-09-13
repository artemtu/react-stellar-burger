import React from "react";
import { Ingridients } from "../burger-ingredients";
import styles from "./ingredient-list.module.css";
import { IingredientFullInfo } from "../../main";

type Props = {
  setIngredientModal: React.Dispatch<
    React.SetStateAction<IngredientModalState>
  >;
  data: IingredientFullInfo[];
};

export type IngredientModalState = {
  open: boolean;
  id?: number | null;
};

export function IngredientList({ setIngredientModal, data }: Props) {
  return (
    <div className={styles.ingridientContainer}>
      {data.map((item) => (
        <Ingridients
          id={item._id}
          key={item._id}
          image={item.image}
          name={item.name}
          price={item.price}
          type={item.type}
          setIngredientModal={setIngredientModal}
        />
      ))}
    </div>
  );
}

export default IngredientList;
