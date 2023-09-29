import { GET_MY_FEED } from "../actions/actions";
import { ActionTypes } from "../types";

interface Iorders {
  _id: string;
  ingredients: string;
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: string;
}

export interface IfeedState {
  getMyFeed: {
    success: boolean;
    orders: Iorders[];
    total: string;
    totalToday: string;
  };
}

export const initialState: IfeedState = {
  getMyFeed: {
    success: false,
    orders: [],
    total: "",
    totalToday: "",
  },
};

export const feedMyReducer = (state = initialState, action: ActionTypes) => {
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
