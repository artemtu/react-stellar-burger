import { SET_ORDER_ID } from "./actions";

export const setOrderId = (id) => ({
  type: 'SET_ORDER_ID',
  payload: id,
});
