// Импортируйте необходимые action types
// Замените "SET_INGREDIENTS" на ваш action type для получения списка ингредиентов
import { GET_BURGER_CONSTRUCTOR_INGREDIENTS } from "../actions/actions";


// Начальное состояние вашего редьюсера
const initialState = {
  bun: null,
  ingredients: [],
};


const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BURGER_CONSTRUCTOR_INGREDIENTS:
      return {
        ...state,
        bun: action.payload.bun,
        ingredients: action.payload.ingredients,
        isLoading:false,
      };


    default:
      return state;
  }
};

export default constructorReducer;
