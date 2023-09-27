import {
  GET_INFO_OPEN_INGREDIENT_MODAL,
  CLEAR_INGREDIENT_OPEN,
} from "../actions/actions";
import { ActionTypes } from "../types";
import { IingredientFullInfo } from "./order-details-reducer";

interface IingredientOpenTrueState {
  ingredient: IingredientFullInfo;
}

export const initialState: IingredientOpenTrueState = {
  ingredient: {
    _id: "",
    id: "",
    name: "",
    type: "",
    proteins: 0,
    fat: 0,
    calories: 0,
    carbohydrates: 0,
    image: "",
    image_large: "",
    image_mobile: "",
    __v: 0,
    price: 0,
    _constId: "",
  },
};

export const ingredientOpenReducer = (
  state = initialState,
  action: ActionTypes
) => {
  switch (action.type) {
    case GET_INFO_OPEN_INGREDIENT_MODAL:
      return {
        ingredient: action.payload,
      };
    case CLEAR_INGREDIENT_OPEN:
      return initialState;

    default:
      return state;
  }
};

export default ingredientOpenReducer;
