import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  CHANGE_INGREDIENT,
} from "./actions";
import { IData } from "../types";
import { IaddIngredient, IremoveIngredient, IchangeIngredient } from "../types";

export const addIngredient = (ingredient: IaddIngredient) => {
  return {
    type: ADD_INGREDIENT,
    payload: ingredient,
  };
};

// Экшен для удаления ингредиента по его ID
export const removeIngredient = (ingredientId: IremoveIngredient) => {
  return {
    type: REMOVE_INGREDIENT,
    payload: ingredientId,
  };
};

export const changeIngredient = (ingredient: IchangeIngredient) => {
  return {
    type: CHANGE_INGREDIENT,
    payload: ingredient,
  };
};
