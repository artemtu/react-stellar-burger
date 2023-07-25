import { LogoutIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import {GET_INFO_OPEN_INGREDIENT_MODAL} from './actions'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";




export const ingredientOpen = (ingredient) => {
    return {
      type: "GET_INFO_OPEN_INGREDIENT_MODAL",
      payload: ingredient,
    };
  };