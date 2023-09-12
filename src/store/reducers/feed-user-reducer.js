import { GET_MY_FEED } from "../actions/actions";
import { ActionTypes } from "../types";

const initialState = {};

const feedMyReducer = (state = initialState, action) => {
  //@ts-ignore
  switch (action.type) {
    case GET_MY_FEED:
      return {
        ...state,
        getMyFeed: action.payload,
      };

    default:
      return state;
  }
};

export default feedMyReducer;
