import {
  CHANGE_INGREDIENT,
  GET_BURGER_CONSTRUCTOR_INGREDIENTS,
} from "../actions/actions";
import { REMOVE_INGREDIENT } from "../actions/actions";
import { ADD_BUN } from "../actions/actions";
import { ADD_INGREDIENT } from "../actions/actions";
import { ActionTypes } from "../types";

export interface IIngredient {
  id?: string;
  image: string;
  name: string;
  price: string;
  type: string;
  _constId?: string;
}

// Тип для начального состояния
interface IConstructorState {
  bun: IIngredient[];
  ingredients: IIngredient[];
  isBunDragged: boolean;
}

// Начальное состояние  редьюсера
export const initialState = {
  bun: [],
  ingredients: [],
  isBunDragged: false,
};

export const constructorReducer = (
  state: IConstructorState = initialState,
  action: ActionTypes
) => {
  switch (action.type) {
    case GET_BURGER_CONSTRUCTOR_INGREDIENTS:
      return {
        ...state,
        bun: action.payload,
        ingredients: action.payload,
        isLoading: false,
      };
    case ADD_BUN:
      return {
        ...state,
        bun: [action.payload],
      };
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    case REMOVE_INGREDIENT:
      const ingredientSelected = state.ingredients.find(
        (ingredient) => ingredient._constId === action.payload.ingredientId
      );
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (ingredient) => ingredient !== ingredientSelected
        ),
      };
    case CHANGE_INGREDIENT:
      const { indexFrom, indexTo, ingredient } = action.payload;
      state.ingredients.splice(indexFrom, 1);
      state.ingredients.splice(indexTo, 0, ingredient);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default constructorReducer;
