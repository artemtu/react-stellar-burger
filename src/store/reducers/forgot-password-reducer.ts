import { FORGOT_PASSWORD } from "../actions/actions";
import { ActionTypes } from "../types";

const initialState = {
  isSuccess: false,
};

const forgotPasswordReducer = (state = initialState, action: ActionTypes) => {
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
