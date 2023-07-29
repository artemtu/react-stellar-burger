import { GET_ORDER_NUMBER } from "./actions";


export const getOrderNumber = (orderDetails) => {
    return {
      type: GET_ORDER_NUMBER,
      payload: orderDetails,
    };
  };
  

  