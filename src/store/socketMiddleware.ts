import { GET_FEED, GET_MY_FEED } from "./actions/actions";
let feedSocket;
let myFeedSocket;
let accessToken = localStorage.getItem("accessToken");

if (accessToken && accessToken.startsWith("Bearer ")) {
  accessToken = accessToken.slice(7);
}

export const socketMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case "WS_FEED_INIT":
      feedSocket = new WebSocket("wss://norma.nomoreparties.space/orders/all");
      feedSocket.addEventListener("message", (event) => {
        const data = JSON.parse(event.data);
        store.dispatch({ type: GET_FEED, payload: data });
      });
      break;

    case "WS_MY_FEED_INIT":
    //   const accessToken = localStorage.getItem("accessToken");
      myFeedSocket = new WebSocket(
        `wss://norma.nomoreparties.space/orders?token=${accessToken}`
      );
      myFeedSocket.addEventListener("message", (event) => {
        const data = JSON.parse(event.data);
        store.dispatch({ type: GET_MY_FEED, payload: data });
        console.log('приватное соединение включено');
        
      });
      break;

    case "WS_FEED_CLOSE":
      if (feedSocket) feedSocket.close();
      break;

    case "WS_MY_FEED_CLOSE":
      if (myFeedSocket) myFeedSocket.close();
      console.log('приватное соединение ВЫКЛ');
      break;

    default:
      next(action);
      break;
  }
};
