import { GET_FEED } from "../actions/actions";
import { ActionTypes } from "../types";

const initialState = {};

const feedReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FEED:
      return {
        ...state,
        getFeed: action.payload,
      };

    default:
      return state;
  }
};

export default feedReducer;
