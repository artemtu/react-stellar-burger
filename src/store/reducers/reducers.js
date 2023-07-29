import { combineReducers } from 'redux';

import ingredientReducer from './ingredientReducer'; 
import constructorReducer from './constructorReducer';
import ingredientOpenReducer from './ingredientOpenReducer';
import orderDetailReducer from './orderDetailsReducer';

// Используйте combineReducers для объединения всех ваших редьюсеров в один корневой редьюсер
const rootReducer = combineReducers({
  mainData: ingredientReducer,
  constructorBurger: constructorReducer,
  ingredient: ingredientOpenReducer,
  orderDetails: orderDetailReducer,
  
  // Добавьте другие редьюсеры здесь, если у вас их больше
});

export default rootReducer;
