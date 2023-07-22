import { GET_INGREDIENTS } from "./actions";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const fetchIngredients = () => (dispatch) => {
  // Запрос к серверу для получения данных
  fetch("https://norma.nomoreparties.space/api/ingredients")
    .then((res) => res.json())
    .then((lel) => {
      // Сохраняем полученные данные в хранилище Redux
      dispatch(getIngredients(lel));
    })
    .catch((error) => {
      console.error("Произошла ошибка при получении данных:", error);
    });
};

export const getIngredients = (ingredients) => {
  return {
    type: "GET_INGREDIENTS",
    payload: ingredients,
  };
};



// function MyComponent() {
//     const dispatch = useDispatch();
  
//     useEffect(() => {
//       // Call the action to fetch ingredients
//       dispatch(fetchIngredients());
//     }, []);
  
//     const ingredients = useSelector((state) => state.ingredients);
  
//     console.log(ingredients);
  
//     // Rest of your component code...
//   }
  
//   export default MyComponent;
  


