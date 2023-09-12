import { config } from "../../components/api/api";
import { checkResponse } from "../../components/api/api";
import { GET_ORDER_NUMBER } from "./actions";
import { IgetOrderNumber } from "../types";

export const getOrderNumber = (number: IgetOrderNumber) => {
  return {
    type: GET_ORDER_NUMBER,
    payload: number,
  };
};

let accessToken = localStorage.getItem("accessToken");

export interface IOrder {
  ingredients: string[];
}

export type OpenModalFunction = (arg: { open: boolean }) => void;

export const postOrder =
  (order: IOrder, openModal: OpenModalFunction) => //@ts-ignore
   (dispatch) => {
    return fetch(`${config.baseUrl}/orders`, {
      method: "POST",
      headers: {
        ...config.headers,
        'Authorization': `${accessToken}`
      },
      body: JSON.stringify(order),
      //@ts-ignore
      Authorization: `${accessToken}`
    })
      .then(checkResponse)
      .then((data) => {
        dispatch(getOrderNumber(data));
        openModal({ open: true });
      })
      .catch(console.error);
  };

