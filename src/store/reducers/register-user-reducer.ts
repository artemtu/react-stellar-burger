import { REGISTER_USER } from "../actions/actions";
import { ActionTypes } from "../types";

const initialState = {};

const registerUserReducer = (state = initialState, action: ActionTypes) => {
  //@ts-ignore
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
