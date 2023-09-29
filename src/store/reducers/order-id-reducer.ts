import { ActionTypes } from "../types";
import { SET_ORDER_ID } from "../actions/actions";

interface IorderId {
  orderId: string;
}

export const initialState: IorderId = {
  orderId: "",
};

export const orderIdReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case SET_ORDER_ID:
      return { ...state, orderReduceer: action.payload };
    default:
      return state;
  }
};
