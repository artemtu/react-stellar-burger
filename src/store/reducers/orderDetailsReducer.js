import { GET_ORDER_NUMBER } from "../actions/actions";

const initialState = {
  details: [],
};

const orderDetailReducer = (state = initialState, action) => {
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