import { combineReducers } from 'redux';

import ingredientReducer from './ingredientReducer'; 

// Используйте combineReducers для объединения всех ваших редьюсеров в один корневой редьюсер
const rootReducer = combineReducers({
  ingredients: ingredientReducer,
  // Добавьте другие редьюсеры здесь, если у вас их больше
});

export default rootReducer;
