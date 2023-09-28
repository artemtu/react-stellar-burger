import { FORGOT_PASSWORD } from "./actions";
import { config } from "../../components/api/api";
import { checkResponse } from "../../components/api/api";
import { useNavigate } from "react-router-dom";
import { AppDispatch, IgetNewPassword } from "../types";

export const getNewPassword = (passwordData: IgetNewPassword) => {
  return {
    type: FORGOT_PASSWORD,
    payload: passwordData,
  };
};

export const postResetPassword = (email: string) => (dispatch: AppDispatch) => {
  return fetch(`${config.baseUrl}/password-reset`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify(email),
  })
    .then(checkResponse)
    .then((data) => {
      dispatch(getNewPassword(data));
    })
    .catch(console.error);
};
