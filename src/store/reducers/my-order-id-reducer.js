import { SET_MY_ORDER_ID } from "../actions/actions";

const initialState = {
    myOrderId: null,
  };
  
  export const myOrderIdReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_MY_ORDER_ID':
        return { ...state, myOrderId: action.payload };
      default:
        return state;
    }
  };
  