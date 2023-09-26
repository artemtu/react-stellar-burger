import { SET_MY_ORDER_ID } from "../actions/actions";
import { ActionTypes } from "../types";

export const initialState = {
  myOrderId: null,
};

export const myOrderIdReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case SET_MY_ORDER_ID:
      return { ...state, myOrderId: action.payload };
    default:
      return state;
  }
};
