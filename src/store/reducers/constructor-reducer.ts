
import {
  CHANGE_INGREDIENT,
  GET_BURGER_CONSTRUCTOR_INGREDIENTS,
} from "../actions/actions";
import { REMOVE_INGREDIENT } from "../actions/actions";
import { ADD_BUN } from "../actions/actions";
import { ADD_INGREDIENT } from "../actions/actions";
 import { ActionTypes } from "../types";



interface IIngredient {
  _constId: string;
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


export const constructorReducer = (state:IConstructorState = initialState, action:ActionTypes) => {

  switch (action.type) {
    case GET_BURGER_CONSTRUCTOR_INGREDIENTS:
      return {
        ...state,
        //@ts-ignore
        bun: action.payload.bun,
        //@ts-ignore
        ingredients: action.payload.ingredients,
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
        //@ts-ignore
        (ingredient) => ingredient._constId === action.payload
      );
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (ingredient) => ingredient !== ingredientSelected
        ),
      };
    case CHANGE_INGREDIENT:
      //@ts-ignore
      const { indexFrom, indexTo, ingredient } = action.payload;
      state.ingredients.splice(indexFrom, 1);
      //@ts-ignore
      state.ingredients.splice(indexTo, 0, ingredient);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default constructorReducer;
