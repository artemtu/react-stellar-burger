import { FORGOT_PASSWORD } from "../actions/actions";
import { ActionTypes } from "../types";

export const initialState = {
  isSuccess: false,
};

export const forgotPasswordReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case FORGOT_PASSWORD:
      return {
        ...state,
        forgotPassword: action.payload,
        isSuccess: true,
      };
    default:
      return state;
  }
};

export default forgotPasswordReducer;
