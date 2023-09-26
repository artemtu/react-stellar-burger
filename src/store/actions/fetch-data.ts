import { GET_INGREDIENTS } from "./actions";
import { config } from "../../components/api/api";
import { checkResponse } from "../../components/api/api";
import { AppDispatch, IgetIngredients } from "../types";
import { useAppDispatch } from "../types";



export const getIngredients = (data: IgetIngredients) => {
  return {
    type: GET_INGREDIENTS,
    //@ts-ignore
    payload: data.data,
  };
};

export const fetchIngredients = () => (dispatch : AppDispatch) => {
  // Запрос к серверу для получения данных
  return fetch(`${config.baseUrl}/ingredients`, {
    headers: config.headers,
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
