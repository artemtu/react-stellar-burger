import { LogoutIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import {GET_BURGER_CONSTRUCTOR_INGREDIENTS} from './actions'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";



export const getIngredients = (bun, ingredients) => {
  return {
    type: GET_BURGER_CONSTRUCTOR_INGREDIENTS,
    payload: {
      bun: bun,
      ingredients: ingredients,
    },
  };
};

