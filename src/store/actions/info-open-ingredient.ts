import {
  GET_INFO_OPEN_INGREDIENT_MODAL,
  CLEAR_INGREDIENT_OPEN,
} from "./actions";

import { IingredientOpen } from "../types";
import { IingredientFullInfo } from "../reducers/order-details-reducer";

export const ingredientOpen = (ingredient: IingredientFullInfo) => {
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
