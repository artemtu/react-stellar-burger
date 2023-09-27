import { SET_MY_ORDER_ID } from "../actions/actions";
import { ActionTypes } from "../types";

interface ImyOrderState {
  myOrderId: string;
}

export const initialState: ImyOrderState = {
  myOrderId: "",
};

export const myOrderIdReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case SET_MY_ORDER_ID:
      return { ...state, myOrderIdRed: action.payload };
    default:
      return state;
  }
};
