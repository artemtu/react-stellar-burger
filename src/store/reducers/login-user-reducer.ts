import { LOGIN_USER } from "../actions/actions";
import { SET_AUTH_CHEKCED } from "../actions/actions";
import { ActionTypes } from "../types";

const initialState = {
  isAuthChecked: false,
};

const loginUserReducer = (state = initialState, action: ActionTypes) => {
  //@ts-ignore
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        loginUser: action.payload,
        isAuthChecked: true,
      };
    case SET_AUTH_CHEKCED:
      return {
        ...state,
        isAuthChecked: action.payload,
      };
    default:
      return state;
  }
};

export default loginUserReducer;
