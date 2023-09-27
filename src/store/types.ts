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
  CLEAR_INGREDIENT_OPEN,
  GET_INFO_OPEN_INGREDIENT_MODAL,
  GET_BURGER_CONSTRUCTOR_INGREDIENTS,
  GET_INGREDIENTS,
  GET_FEED,
  GET_MY_FEED,
  SET_MY_ORDER_ID,
  SET_ORDER_ID,
} from "./actions/actions";
import { store } from "../index";
import { IingredientFullInfo } from "../components/main/main";
import { Action } from "redux";
import { IloginUser } from "./reducers/login-user-reducer";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { IorderState } from "./reducers/order-details-reducer";
import { ThunkDispatch } from "redux-thunk";

export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
export type AppDispatch = ThunkDispatch<RootState, undefined, Action>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export interface IData {
  success: boolean;
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
}

interface Iorders {
  _id: string;
  ingredients: string;
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: string;
}

interface IfeedState {
  success: boolean;
  orders: Iorders[];
  total: string;
  totalToday: string;
}

interface Iid {
  id: string;
}

interface IdataState {
  data: IingredientFullInfo[];
  success: boolean;
}

export interface IgetIngredients {
  type: typeof GET_INGREDIENTS;
  payload: IdataState;
}

export interface IaddIngredient {
  type: typeof ADD_INGREDIENT;
  payload: IData;
}

export interface IaddBun {
  type: typeof ADD_BUN;
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

export interface IgetNewPassword {
  type: typeof FORGOT_PASSWORD;
  payload: {
    passwordData: string;
  };
}

export interface IgetUserData {
  type: typeof GET_PROFILE_INFO;
  payload: {
    email: string;
    name: string;
  };
}

export interface IingredientOpen {
  type: typeof GET_INFO_OPEN_INGREDIENT_MODAL;
  payload: IData;
}

export interface IclearIngredientOpen {
  type: typeof CLEAR_INGREDIENT_OPEN;
}

export interface IgetUserLogin {
  type: typeof LOGIN_USER;
  payload: IloginUser;
}

export interface IpostUserLogout {
  type: typeof LOGOUT;
  payload: {
    message: string;
    success: boolean;
  };
}

export interface IgetOrderNumber {
  type: typeof GET_ORDER_NUMBER;
  payload: {
    orderDetails: IorderState;
  };
}

export interface IgetUserRegistration {
  type: typeof REGISTER_USER;
  payload: {
    success: boolean;
    accessToken: string;
    refreshToken: string;
    user: Array<{
      email: string;
      name: string;
    }>;
  };
}

export interface IresetPassword {
  type: typeof RESET_PASSWORD;
  payload: {
    success: boolean;
    message: string;
  };
}

export interface IsetAuthChecked {
  type: typeof SET_AUTH_CHEKCED;
  payload: {
    value: boolean;
  };
}

export interface IburgerIngredients {
  type: typeof GET_BURGER_CONSTRUCTOR_INGREDIENTS;
  payload: IData;
}

export interface IfeedData {
  type: typeof GET_FEED;
  payload: IfeedState;
}

export interface IgetMyFeed {
  type: typeof GET_MY_FEED;
  payload: IfeedState;
}

export interface IsetMyOrderId {
  type: typeof SET_MY_ORDER_ID;
  payload: Iid;
}

export interface IsetOrderId {
  type: typeof SET_ORDER_ID;
  payload: Iid;
}

export type ActionTypes =
  | IgetIngredients
  | IaddIngredient
  | IremoveIngredient
  | IchangeIngredient
  | IgetNewPassword
  | IgetUserData
  | IingredientOpen
  | IclearIngredientOpen
  | IgetUserLogin
  | IpostUserLogout
  | IgetOrderNumber
  | IgetUserRegistration
  | IresetPassword
  | IsetAuthChecked
  | IburgerIngredients
  | IaddBun
  | IfeedData
  | IgetMyFeed
  | IsetMyOrderId
  | IsetOrderId;

// | BurgerConstructorPayload;
