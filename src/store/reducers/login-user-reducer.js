import { LOGIN_USER } from "../actions/actions";

const initialState = {

};

const loginUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loginUser: action.payload,
      };
    default:
      return state;
  }
};

export default loginUserReducer;