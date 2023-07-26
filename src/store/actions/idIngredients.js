import { GET_ID_INGREDIENTS_FOR_ORDER } from "./actions";

export const getIngredientIds = (ingredients) => {
  return {
    type: GET_ID_INGREDIENTS_FOR_ORDER,
    payload: ingredients,
  };
};