import { GET_INGREDIENTS } from "../actions/actions";
import { IgetIngredients } from "../types";
import { IData } from "../types";

type IngredientType = IData;

interface IngredientState {
  data: IngredientType[];
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
