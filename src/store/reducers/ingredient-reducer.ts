import { GET_INGREDIENTS } from "../actions/actions";
import { IgetIngredients } from "../types";
import { IData } from "../types";

// type IngredientType = IData;

interface IingredientFullInfo {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  calories: number;
  carbohydrates: number;
  image: string;
  image_large: string;
  image_mobile: string;
  __v: number;
  _constId?: string;
}


interface IngredientState {
  data: IingredientFullInfo[];
  isLoading: boolean;
}
// Начальное состояние редьюсера
const initialState: IngredientState = {
  data: [],
  isLoading: true,
};

const ingredientReducer = (state = initialState, action: IgetIngredients) => {
  switch (action.type) {
    case GET_INGREDIENTS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default ingredientReducer;
