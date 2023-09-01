import { config } from "../../components/api/api";
import { checkResponse } from "../../components/api/api";
import { REGISTER_USER } from "./actions";
import { IgetUserRegistration } from "../types";

interface IRegistration {
  email: string;
  password: string;
  name: string;
}

export const getUserRegistration = (profileData: IgetUserRegistration) => {
  return {
    type: REGISTER_USER,
    payload: profileData,
  };
};

export const postUser =
  (registration: IRegistration) =>
  //@ts-ignore
  (dispatch) => {
    return fetch(`${config.baseUrl}/auth/register`, {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify(registration),
    })
      .then(checkResponse)
      .then((data) => {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        dispatch(getUserRegistration(data));
      })
      .catch(console.error);
  };
