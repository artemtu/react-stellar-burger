import { GET_INGREDIENTS } from "./actions";
import { config } from "../../components/api/api";
import { checkResponse } from "../../components/api/api";

export interface IData {
  data: Array<{
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
    isLoading: boolean;
  }>;
}

export const getIngredients = (ingredients: IData) => {
  return {
    type: GET_INGREDIENTS,
    payload: ingredients.data,
  };
};

//@ts-ignore
export const fetchIngredients = () => (dispatch) => {
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
