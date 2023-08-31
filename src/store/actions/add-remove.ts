import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  CHANGE_INGREDIENT,
} from "./actions";
import { IData } from "../types";

export const addIngredient = (ingredient: IData) => {
  return {
    type: typeof ADD_INGREDIENT,
    payload: ingredient,
  };
};

// Экшен для удаления ингредиента по его ID
export const removeIngredient = (ingredientId: string) => {
  return {
    type: typeof REMOVE_INGREDIENT,
    payload: ingredientId,
  };
};

export const changeIngredient = (ingredient: IData) => {
  return {
    type: typeof CHANGE_INGREDIENT,
    payload: ingredient,
  };
};
