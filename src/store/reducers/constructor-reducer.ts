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
  price: number;
  type: string;
  _constId?: string;
  proteins?: number;
  fat?: number;
  carbohydrates?: number;
  calories: number;
  image_mobile: string;
  image_large: string;
}

interface IConstructorState {
  bun: IIngredient[];
  ingredients: IIngredient[];
  isBunDragged: boolean;
}

interface IConstructorTrueState {
  constructorBurger: IConstructorState;
}

// Начальное состояние  редьюсера
export const initialState: IConstructorTrueState = {
  constructorBurger: {
    bun: [],
    ingredients: [],
    isBunDragged: false,
  },
};

export const constructorReducer = (
  state = initialState,
  action: ActionTypes
) => {
  switch (action.type) {
    case GET_BURGER_CONSTRUCTOR_INGREDIENTS:
      return {
        ...state,
        bun: action.payload,
        ingredients: action.payload,
      };
    case ADD_BUN:
      return {
        ...state,
        constructorBurger: {
          ...state.constructorBurger,
          bun: [action.payload],
        },
      };
    case ADD_INGREDIENT:
      return {
        ...state,
        constructorBurger: {
          ...state.constructorBurger,
          ingredients: [...state.constructorBurger.ingredients, action.payload],
        },
      };
    case REMOVE_INGREDIENT:
      const ingredientSelected = state.constructorBurger.ingredients.find(
        (ingredient) => ingredient._constId === action.payload.ingredientId
      );
      return {
        ...state,
        ingredients: state.constructorBurger.ingredients.filter(
          (ingredient) => ingredient !== ingredientSelected
        ),
      };
    case CHANGE_INGREDIENT:
      const { indexFrom, indexTo, ingredient } = action.payload;
      state.constructorBurger.ingredients.splice(indexFrom, 1);
      state.constructorBurger.ingredients.splice(indexTo, 0, ingredient);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default constructorReducer;
