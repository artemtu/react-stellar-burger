import { combineReducers } from 'redux';

import ingredientReducer from './ingredient-reducer'; 
import constructorReducer from './constructor-reducer';
import ingredientOpenReducer from './ingredient-open-reducer';
import orderDetailReducer from './order-details-reducer';
import registerUserReducer from './register-user-reducer';


const rootReducer = combineReducers({
  mainData: ingredientReducer,
  constructorBurger: constructorReducer,
  ingredient: ingredientOpenReducer,
  orderDetails: orderDetailReducer,
  registerUser: registerUserReducer
  
});

export default rootReducer;
