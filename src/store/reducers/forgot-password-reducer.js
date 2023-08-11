import { FORGOT_PASSWORD } from "../actions/actions";

const initialState = {

};

const forgotPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD:
      return {
        ...state,
        forgotPassword: action.payload,
      };
    default:
      return state;
  }
};

export default forgotPasswordReducer;