import { LOGIN_USER } from "./actions";
import { config } from "../../components/api/api";
import { checkResponse } from "../../components/api/api";
import { AppDispatch, IgetUserLogin } from "../types";

export const getUserLogin = (loginData: IgetUserLogin) => {
  return {
    type: LOGIN_USER,
    payload: loginData,
  };
};

export const postUserLogin = (login: any) => (dispatch: AppDispatch) => {
  return fetch(`${config.baseUrl}/auth/login`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify(login),
  })
    .then(checkResponse)
    .then((data) => {
      localStorage.setItem("refreshToken", data.refreshToken);
      localStorage.setItem("accessToken", data.accessToken);
      dispatch(getUserLogin(data));
      // console.log(data);
    })
    .catch(console.error);
};
