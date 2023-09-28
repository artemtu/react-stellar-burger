import { GET_PROFILE_INFO } from "../actions/actions";
import { ActionTypes } from "../types";

interface IprofileInfo {
  user: {
    name: string;
    email: string;
  };
}

interface IprofileInfoTrueState {
  profileInfo: IprofileInfo;
}

export const initialState: IprofileInfoTrueState = {
  profileInfo: {
    user: {
      name: "",
      email: "",
    },
  },
};

export const profileInfoReducer = (
  state = initialState,
  action: ActionTypes
) => {
  switch (action.type) {
    case GET_PROFILE_INFO:
      return {
        ...state,
        profileInfoRed: action.payload,
      };
    default:
      return state;
  }
};

export default profileInfoReducer;
