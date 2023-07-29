// Импортируйте необходимые action types
// Замените "SET_INGREDIENTS" на ваш action type для получения списка ингредиентов
import { GET_BURGER_CONSTRUCTOR_INGREDIENTS } from "../actions/actions";
import { REMOVE_INGREDIENT } from "../actions/actions";
import { ADD_BUN } from "../actions/actions";
import { ADD_INGREDIENT } from "../actions/actions";


// Начальное состояние вашего редьюсера
const initialState = {
  bun: [],
  ingredients: [],
  isBunDragged: false,
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
      case ADD_BUN:
      return {
        ...state,
        bun: [...state.bun, action.payload],
      };
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
      case REMOVE_INGREDIENT:
        const ingredientSelected = state.ingredients.find((ingredient) => ingredient.id === action.payload)
        return {
          ...state,
          ingredients: state.ingredients.filter((ingredient)=> ingredient !== ingredientSelected)
        }
    default:
      return state;
  }
};

export default constructorReducer;
