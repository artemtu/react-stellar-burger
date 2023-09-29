import { GET_BURGER_CONSTRUCTOR_INGREDIENTS } from "./actions";

export interface Ingredient {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  isBunDragged: boolean;
}

export const getIngredients = (
  bun: Ingredient[],
  ingredients: Ingredient[]
) => {
  return {
    type: typeof GET_BURGER_CONSTRUCTOR_INGREDIENTS,
    payload: {
      bun: bun,
      ingredients: ingredients,
    },
  };
};
