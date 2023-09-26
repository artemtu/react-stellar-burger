import { LOGOUT } from "../actions/actions";
import { ActionTypes } from "../types";

export const initialState = {};

export const logoutReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        logout: action.payload,
      };
    default:
      return state;
  }
};

export default logoutReducer;
