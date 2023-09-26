import {
  GET_INFO_OPEN_INGREDIENT_MODAL,
  CLEAR_INGREDIENT_OPEN,
} from "./actions";

import { IingredientOpen, IclearIngredientOpen } from "../types";

export const ingredientOpen = (ingredient: IingredientOpen) => {
  return {
    type: GET_INFO_OPEN_INGREDIENT_MODAL,
    payload: ingredient,
  };
};

export const clearIngredientOpen = () => {
  return {
    type: CLEAR_INGREDIENT_OPEN,
  };
};
