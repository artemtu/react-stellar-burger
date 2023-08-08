import { LogoutIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { GET_INFO_OPEN_INGREDIENT_MODAL, CLEAR_INGREDIENT_OPEN } from "./actions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const ingredientOpen = (ingredient) => {
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
