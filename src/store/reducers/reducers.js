import { combineReducers } from 'redux';

import ingredientReducer from './ingredient-reducer'; 
import constructorReducer from './constructor-reducer';
import ingredientOpenReducer from './ingredient-open-reducer';
import orderDetailReducer from './order-details-reducer';
import registerUserReducer from './register-user-reducer';
import loginUserReducer from './login-user-reducer';
import profileInfoReducer from './get-profile-info-reducer';
import forgotPasswordReducer from './forgot-password-reducer';
import resetPasswordReducer from './reset-password-reducer';


const rootReducer = combineReducers({
  mainData: ingredientReducer,
  constructorBurger: constructorReducer,
  ingredient: ingredientOpenReducer,
  orderDetails: orderDetailReducer,
  registerUser: registerUserReducer,
  loginUser: loginUserReducer,
  profileInfo: profileInfoReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  
});

export default rootReducer;
