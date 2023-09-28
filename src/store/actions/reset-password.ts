import { RESET_PASSWORD } from "./actions";
import { config } from "../../components/api/api";
import { checkResponse } from "../../components/api/api";
import { AppDispatch, IresetPassword } from "../types";

interface IResetOpt {
  password: string;
  token: string;
}

export const resetPassword = (serverAnswer: IresetPassword) => {
  return {
    type: RESET_PASSWORD,
    payload: serverAnswer,
  };
};

export const postRefreshPassword =
  (resetOpt: IResetOpt) => (dispatch: AppDispatch) => {
    return fetch(`${config.baseUrl}/password-reset/reset`, {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify(resetOpt),
    })
      .then(checkResponse)
      .then((data) => {
        dispatch(resetPassword(data));
        return "/login";
      })
      .catch(console.error);
  };

//   nibs770538@yandex.ru
