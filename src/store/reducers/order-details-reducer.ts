import { GET_ORDER_NUMBER } from "../actions/actions";
import { ActionTypes } from "../types";

export interface IingredientFullInfo {
  _id?: string;
  id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  calories: number;
  carbohydrates: number;
  image: string;
  image_large: string;
  image_mobile: string;
  __v?: number;
  price: number;
  _constId?: string;
}

export interface IorderState {
  success: boolean;
  name: string;
  order: {
    ingredients: IingredientFullInfo[];
    _id: string;
    owner: {
      name: string;
      email: string;
      createdAt: string;
      updatedAt: string;
    };
    status: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    number: number;
    price: number;
  };
}

export interface IorderTrueState {
  orderDetails: IorderState;
}

const initialState: IorderTrueState = {
  orderDetails: {
    success: false,
    name: "",
    order: {
      ingredients: [],
      _id: "",
      owner: {
        name: "",
        email: "",
        createdAt: "",
        updatedAt: "",
      },
      status: "",
      name: "",
      createdAt: "",
      updatedAt: "",
      number: null,
      price: null,
    },
  },
};

const orderDetailReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case GET_ORDER_NUMBER:
      return {
        ...state,
        orderDetails: action.payload,
      };
    default:
      return state;
  }
};

export default orderDetailReducer;
