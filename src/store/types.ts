import {
  SET_AUTH_CHEKCED,
  LOGOUT,
  RESET_PASSWORD,
  FORGOT_PASSWORD,
  GET_PROFILE_INFO,
  LOGIN_USER,
  REGISTER_USER,
  ADD_BUN,
  CHANGE_INGREDIENT,
  GET_ORDER_NUMBER,
  REMOVE_INGREDIENT,
  ADD_INGREDIENT,
  GET_ID_INGREDIENTS_FOR_ORDER,
  CLEAR_INGREDIENT_OPEN,
  GET_INFO_OPEN_INGREDIENT_MODAL,
  GET_BURGER_CONSTRUCTOR_INGREDIENTS,
  GET_INGREDIENTS,
} from "./actions/actions";

export interface IData {
  success: boolean;
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

export interface IgetIngredients {
  type: typeof GET_INGREDIENTS;
  payload: IData;
}

export interface IaddIngredient {
  type: typeof ADD_INGREDIENT;
  payload: IData;
}

export interface IremoveIngredient {
  type: typeof REMOVE_INGREDIENT;
  payload: {
    ingredientId: string;
  };
}

export interface IchangeIngredient {
  type: typeof CHANGE_INGREDIENT;
  payload: IData;
}
