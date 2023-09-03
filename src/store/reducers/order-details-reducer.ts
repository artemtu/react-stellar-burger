import { GET_ORDER_NUMBER } from "../actions/actions";
import { ActionTypes } from "../types";

const initialState = {};

const orderDetailReducer = (state = initialState, action: ActionTypes) => {
  //@ts-ignore
  switch (action.type) {
    case GET_ORDER_NUMBER:
      return {
        ...state,
        orderDetails: action.payload,
      };
    default:
      return state;
  }
};

export default orderDetailReducer;
