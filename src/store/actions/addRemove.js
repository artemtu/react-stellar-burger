import { ADD_INGREDIENT, REMOVE_INGREDIENT, CHANGE_INGREDIENT } from "./actions";


export const addIngredient = (ingredient) => {
    return {
      type: ADD_INGREDIENT,
      payload: ingredient,
    };
  };
  
  // Экшен для удаления ингредиента по его ID
  export const removeIngredient = (ingredientId) => {
    return {
      type: REMOVE_INGREDIENT,
      payload: ingredientId,
    };
  };

  export const changeIngredient = (ingredient) => {
    return {
      type: CHANGE_INGREDIENT,
      payload:ingredient,
    }
  }
  