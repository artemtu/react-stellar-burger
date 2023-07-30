import { combineReducers } from 'redux';

import ingredientReducer from './ingredientReducer'; 
import constructorReducer from './constructorReducer';
import ingredientOpenReducer from './ingredientOpenReducer';
import orderDetailReducer from './orderDetailsReducer';


const rootReducer = combineReducers({
  mainData: ingredientReducer,
  constructorBurger: constructorReducer,
  ingredient: ingredientOpenReducer,
  orderDetails: orderDetailReducer,
  
});

export default rootReducer;
