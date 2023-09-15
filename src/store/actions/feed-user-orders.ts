import { GET_MY_FEED } from "./actions";
import { config } from "../../components/api/api";
import { checkResponse } from "../../components/api/api";
import { IgetIngredients } from "../types";
import { IData } from "../types";

export const getMyFeed = (data) => {
  return {
    type: GET_MY_FEED,
    payload: data,
  };
};
let accessToken = localStorage.getItem("accessToken");

if (accessToken && accessToken.startsWith("Bearer ")) {
  accessToken = accessToken.slice(7);
}

export const fetchMyFeed = () => (dispatch) => {
  const socket = new WebSocket(
    `wss://norma.nomoreparties.space/orders?token=${accessToken}`
  );
  //   console.log(accessToken);

  // Открываем соединение
  socket.addEventListener("open", function (event) {
    // console.log("Соединение открыто личные заказы", event);
  });

  // Ловим сообщения с сервера
  socket.addEventListener("message", function (event) {
    const data = JSON.parse(event.data);
    // console.log("Получены данные", data);
    dispatch(getMyFeed(data));
  });

  socket.addEventListener("error", function (error) {
    console.error("Ошибка в соединении", error);
  });
  socket.addEventListener("close", function (event) {
    // console.log("Соединение закрыто  личные заказы", event);
  });
  return () => {
    socket.close();
  };
};
