import { config } from "../../components/api/api";
import { checkResponse } from "../../components/api/api";
import { GET_ORDER_NUMBER } from "./actions";
import { AppDispatch, IgetOrderNumber } from "../types";

export const getOrderNumber = (orderDetails: IgetOrderNumber) => {
  return {
    type: GET_ORDER_NUMBER,
    payload: orderDetails,
  };
};

let accessToken = localStorage.getItem("accessToken");

export interface IOrder {
  ingredients: string[];
}

export type OpenModalFunction = (arg: { open: boolean }) => void;

export const postOrder =
  (order: IOrder, openModal: OpenModalFunction) => (dispatch: AppDispatch) => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      console.error("Token is missing");
      return;
    }
    return fetch(`${config.baseUrl}/orders`, {
      method: "POST",
      headers: {
        ...config.headers,
        Authorization: `${accessToken}`,
      },
      body: JSON.stringify(order),

      // Authorization: `${accessToken}`,
    })
      .then(checkResponse)
      .then((data) => {
        dispatch(getOrderNumber(data));
        openModal({ open: true });
      })
      .catch(console.error);
  };
