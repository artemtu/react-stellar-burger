import { LogoutIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { GET_BURGER_CONSTRUCTOR_INGREDIENTS } from "./actions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface Ingredient {
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

interface BurgerConstructorPayload {
  bun: Ingredient[];
  ingredients: Ingredient[];
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
