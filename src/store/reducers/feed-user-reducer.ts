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

interface IfeedState {
  success: boolean;
  orders: Iorders[];
  total: string;
  totalToday: string;
}

const initialState = {
  success: false,
  orders: [],
  total: "",
  totalToday: "",
};

const feedMyReducer = (
  state: IfeedState = initialState,
  action: ActionTypes
) => {
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
