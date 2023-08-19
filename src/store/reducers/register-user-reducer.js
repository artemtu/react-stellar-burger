import { REGISTER_USER } from "../actions/actions";

const initialState = {

};

const registerUserReducer = (state = initialState, action) => {
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