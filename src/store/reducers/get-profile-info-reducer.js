import { GET_PROFILE_INFO } from "../actions/actions";

const initialState = {
  profileInfo: {
    user: {
      name: "",
      email: "",
    },
  },
};

const profileInfoReducer = (state = initialState, action) => {
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
