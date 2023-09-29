import { Middleware } from "redux";
import { GET_FEED, GET_MY_FEED } from "./actions/actions";
export const socketUrl = "wss://norma.nomoreparties.space/orders";

export type SocketEvent = "INIT" | "CLOSE";

interface SocketActionTypes {
  message: typeof GET_FEED | typeof GET_MY_FEED;
}

interface SocketMeta {
  socket: {
    event: SocketEvent;
    uri: string;
    actionTypes: SocketActionTypes;
    token?: string;
  };
}

interface SocketAction {
  type: string;
  meta?: SocketMeta;
}

let sockets: { [key: string]: WebSocket } = {};

export const socketMiddleware: Middleware<{}, any, any> =
  (store) => (next) => (action: SocketAction) => {
    if (!action.meta || !action.meta.socket) {
      return next(action);
    }

    const { type, meta } = action;
    const {
      socket: { event, uri, actionTypes, token },
    } = meta;

    switch (event) {
      case "INIT":
        if (sockets[uri]) sockets[uri].close();
        let url = uri;
        if (token) {
          const accessToken = localStorage.getItem(token);
          if (!accessToken || !accessToken.startsWith("Bearer ")) {
            console.error("Token is missing");
            return;
          }
          url += `?token=${accessToken.slice(7)}`;
        }

        const socket = new WebSocket(url);
        socket.addEventListener("message", (event) => {
          const data = JSON.parse(event.data);
          store.dispatch({ type: actionTypes.message, payload: data });
        });
        sockets[uri] = socket;
        break;

      case "CLOSE":
        if (sockets[uri]) {
          sockets[uri].close();
          delete sockets[uri];
        }
        break;

      default:
        next(action);
        break;
    }
  };
