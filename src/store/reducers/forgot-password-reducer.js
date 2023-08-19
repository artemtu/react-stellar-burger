import { FORGOT_PASSWORD } from "../actions/actions";

const initialState = {
  isSuccess: false,

};

const forgotPasswordReducer = (state = initialState, action) => {
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