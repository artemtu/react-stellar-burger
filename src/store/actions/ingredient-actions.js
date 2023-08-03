import { config } from "../../components/api/api";
import { checkResponse } from "../../components/api/api";
import { GET_INGREDIENTS, GET_ORDER_NUMBER } from "./actions";


export const getIngredients = (ingredients) => {
  return {
    type: GET_INGREDIENTS,
    payload: ingredients.data,
  };
};

export const fetchIngredients = () => (dispatch) => {
  // Запрос к серверу для получения данных
  return fetch(`${config.baseUrl}/ingredients`,{
    headers:config.headers,
  })
    .then(checkResponse)
    .then((data) => {
      // Сохраняем полученные данные в хранилище Redux
      dispatch(getIngredients(data));
    })  
    .catch((error) => {
      console.error(error);
    });
};





export const getOrderNumber = (number) => {
  return {
    type: GET_ORDER_NUMBER,
    payload: number,
  };
};




export const postOrder = (order) => (dispatch) => {
  return fetch(`${config.baseUrl}/orders`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify(order),
  }).then(checkResponse) 
    .then((meta) => {
      console.log('meta');
     dispatch(getOrderNumber(meta))

    }) 
    .catch(console.error) 
};

