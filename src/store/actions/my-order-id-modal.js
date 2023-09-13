import { SET_MY_ORDER_ID } from "./actions";

export const setMyOrderId = (id) => ({
  type: 'SET_MY_ORDER_ID',
  payload: id,
});
