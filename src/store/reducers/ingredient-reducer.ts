import { GET_INGREDIENTS } from "../actions/actions";
import { ActionTypes } from "../types";

// Начальное состояние редьюсера
const initialState = {
  data: [],
  isLoading: true,
};

const ingredientReducer = (state = initialState, action: ActionTypes) => {
  //@ts-ignore
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
