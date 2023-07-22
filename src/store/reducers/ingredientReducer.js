// Импортируйте необходимые action types
// Замените "SET_INGREDIENTS" на ваш action type для получения списка ингредиентов
import { GET_INGREDIENTS } from "../actions/actions";


// Начальное состояние вашего редьюсера
const initialState = {
  ingredients: [],
};


const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload,
      };


    default:
      return state;
  }
};

export default ingredientReducer;
