import { GET_FEED } from "../actions/actions";
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
  total: number;
  totalToday: number;
}

const initialState = {
  success: false,
  orders: [],
  total: 0,
  totalToday: 0,
};

const feedReducer = (state: IfeedState = initialState, action: ActionTypes) => {
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
