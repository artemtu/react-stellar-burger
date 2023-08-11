import { RESET_PASSWORD } from "../actions/actions";

const initialState = {

};

const resetPasswordReducer = (state = initialState, action) => {
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