import { config } from "../../components/api/api";
import { checkResponse } from "../../components/api/api";

export const getIngredients = (ingredients) => {
  return {
    type: "GET_INGREDIENTS",
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
};







export async function postOrder(order) {  
  try {
    const response = await fetch(`${config.baseUrl}/orders`, {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify(order),
    });

    const data = await checkResponse(response);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}
