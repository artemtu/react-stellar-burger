import { GET_FEED } from "./actions";
import { config } from "../../components/api/api";
import { checkResponse } from "../../components/api/api";
import { IgetIngredients } from "../types";
import { IData } from "../types";

export interface IFeedData {
  success: boolean;
  _id: string;
  ingredients: string[];
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
}

export const getFeed = (data: IFeedData) => {
  return {
    type: GET_FEED,
    payload: data,
  };
};

export const fetchFeed = () => (dispatch) => {
  const socket = new WebSocket("wss://norma.nomoreparties.space/orders/all");

  // Открываем соединение
  socket.addEventListener("open", function (event) {
    console.log("Соединение открыто", event);
  });

  // Ловим сообщения с сервера
  socket.addEventListener("message", function (event) {
    const data = JSON.parse(event.data);

    dispatch(getFeed(data));
  });

  socket.addEventListener("error", function (error) {
    console.error("Ошибка в соединении", error);
  });
  socket.addEventListener("close", function (event) {
    console.log("Соединение закрыто", event);
  });
  return () => {
    socket.close();
  };
};
