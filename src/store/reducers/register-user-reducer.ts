import { REGISTER_USER } from "../actions/actions";
import { ActionTypes } from "../types";

export const initialState = {};

export const registerUserReducer = (
  state = initialState,
  action: ActionTypes
) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        registerUser: action.payload,
      };
    default:
      return state;
  }
};

export default registerUserReducer;
