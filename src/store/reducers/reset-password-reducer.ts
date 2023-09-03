import { RESET_PASSWORD } from "../actions/actions";
import { ActionTypes } from "../types";

const initialState = {};

const resetPasswordReducer = (state = initialState, action: ActionTypes) => {
  //@ts-ignore
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
