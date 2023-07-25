
import { GET_INFO_OPEN_INGREDIENT_MODAL } from "../actions/actions";



const initialState = {
  ingredient: [],
};


const ingredientOpenReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INFO_OPEN_INGREDIENT_MODAL:
      return {
        ingredient: action.payload,
      };
      


    default:
      return state;
  }
};

export default ingredientOpenReducer;
