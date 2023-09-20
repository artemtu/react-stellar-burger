import { GET_FEED } from "../actions/actions";
// import { getFeed } from "../actions/feed-all-orders";
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

interface IfeedState {
  success: boolean;
  orders: Iorders[];
  total: string;
  totalToday: string;
}

interface IfeedTrueState {
  getFeed: IfeedState;
}

const initialState: IfeedTrueState = {
  getFeed: {
    success: false,
    orders: [],
    total: "",
    totalToday: "",
  },
};

const feedReducer = (state = initialState, action: ActionTypes) => {
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
