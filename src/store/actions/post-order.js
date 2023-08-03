import { config } from "../../components/api/api";
import { checkResponse } from "../../components/api/api";
import { GET_ORDER_NUMBER } from "./actions";


export const getOrderNumber = (number) => {
  return {
    type: GET_ORDER_NUMBER,
    payload: number,
  };
};


export const postOrder = (order, openModal) => (dispatch) => {
  return fetch(`${config.baseUrl}/orders`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify(order),
  }).then(checkResponse) 
    .then((data) => {
     dispatch(getOrderNumber(data));
     openModal({open:true})
    })
    .catch(console.error) 
};

