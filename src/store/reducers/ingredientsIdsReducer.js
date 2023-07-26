import { GET_ID_INGREDIENTS_FOR_ORDER } from "../actions/actions";

const initialState = {
  ingredients: [],
};

const ingredientIdsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ID_INGREDIENTS_FOR_ORDER:
      return {
        ...state,
        ingredients: action.payload,
      };
    default:
      return state;
  }
};

export default ingredientIdsReducer;