import { ActionTypes } from "../types";
import { SET_ORDER_ID } from "../actions/actions";

export const initialState = {
  orderId: null,
};

export const orderIdReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case SET_ORDER_ID:
      return { ...state, orderId: action.payload };
    default:
      return state;
  }
};
