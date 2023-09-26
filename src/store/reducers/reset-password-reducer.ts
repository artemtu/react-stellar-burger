import { RESET_PASSWORD } from "../actions/actions";
import { ActionTypes } from "../types";

export const initialState = {};

export const resetPasswordReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case RESET_PASSWORD:
      return {
        ...state,
        resetPassword: action.payload,
      };
    default:
      return state;
  }
};

export default resetPasswordReducer;
