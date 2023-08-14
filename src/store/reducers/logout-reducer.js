import { LOGOUT } from "../actions/actions";

const initialState = {

};

const logoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        logout: action.payload,

      };
    default:
      return state;
  }
};

export default logoutReducer;