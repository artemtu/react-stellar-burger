import { LOGIN_USER } from "../actions/actions";

const initialState = {
  isAuthChecked: false,

};

const loginUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loginUser: action.payload,
        isAuthChecked: true,

      };
    default:
      return state;
  }
};

export default loginUserReducer;