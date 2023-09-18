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
  total: string;
  totalToday: string;
}

const initialState = {
  success: false,
  orders: [],
  total: "",
  totalToday: "",
};

const feedReducer = (state: IfeedState = initialState, action: ActionTypes) => {
  switch (action.type) {
    case GET_FEED:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default feedReducer;
