import { GET_INFO_OPEN_INGREDIENT_MODAL, CLEAR_INGREDIENT_OPEN } from "../actions/actions";

const initialState = {
  ingredient: [],
};

const ingredientOpenReducer = (state = initialState, action) => {
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
