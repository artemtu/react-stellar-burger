import { combineReducers } from 'redux';

import ingredientReducer from './ingredient-reducer'; 
import constructorReducer from './constructor-reducer';
import ingredientOpenReducer from './ingredient-open-reducer';
import orderDetailReducer from './order-details-reducer';


const rootReducer = combineReducers({
  mainData: ingredientReducer,
  constructorBurger: constructorReducer,
  ingredient: ingredientOpenReducer,
  orderDetails: orderDetailReducer,
  
});

export default rootReducer;
