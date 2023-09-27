import { GET_INGREDIENTS } from "../actions/actions";
import { ActionTypes } from "../types";
import { IingredientFullInfo } from "../../components/main/main";

interface IdataState {
  data: IingredientFullInfo[];
  success: boolean;
}

interface IdataTrueState {
  mainData: IdataState;
}

export const initialState: IdataTrueState = {
  mainData: {
    data: [],
    success: false,
  },
};

export const ingredientReducer = (
  state = initialState,
  action: ActionTypes
) => {
  switch (action.type) {
    case GET_INGREDIENTS:
      return {
        ...state,
        mainData: action.payload,
      };

    default:
      return state;
  }
};

export default ingredientReducer;
