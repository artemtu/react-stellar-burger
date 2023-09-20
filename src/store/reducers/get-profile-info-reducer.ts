import { GET_PROFILE_INFO } from "../actions/actions";
import { ActionTypes } from "../types";

const initialState = {
  profileInfo: {
    user: {
      name: "",
      email: "",
    },
  },
};

const profileInfoReducer = (state = initialState, action: ActionTypes) => {
  //@ts-ignore
  switch (action.type) {
    case GET_PROFILE_INFO:
      return {
        ...state,
        profileInfo: action.payload,
      };
    default:
      return state;
  }
};

export default profileInfoReducer;
