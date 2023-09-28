import { LOGIN_USER } from "../actions/actions";
import { SET_AUTH_CHEKCED } from "../actions/actions";
import { ActionTypes } from "../types";

export interface IloginUser {
  success: boolean;
  accessToken: string;
  refreshToken: string;
  user: {
    email: string;
    name: string;
  };
}

interface IloginUserFull {
  loginUser: IloginUser;
  isAuthChecked: boolean;
}

export const initialState: IloginUserFull = {
  loginUser: {
    success: false,
    accessToken: "",
    refreshToken: "",
    user: {
      email: "",
      name: "",
    },
  },
  isAuthChecked: false,
};

export const loginUserReducer = (state = initialState, action: ActionTypes) => {
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
        isAuthChecked: action.payload.isAuthChecked,
      };
    default:
      return state;
  }
};

export default loginUserReducer;
