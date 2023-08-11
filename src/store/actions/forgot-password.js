import { FORGOT_PASSWORD } from "./actions";
import { config } from "../../components/api/api";
import { checkResponse } from "../../components/api/api";

export const getNewPassword = (passwordData) => {
  return {
    type: FORGOT_PASSWORD,
    payload: passwordData,
  };
};

export const postResetPassword = (email) => (dispatch) => {
  return fetch(`${config.baseUrl}/password-reset`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify(email),
  })
    .then(checkResponse)
    .then((data) => {
      dispatch(getNewPassword(data));
      return "/reset-password/";
    })
    .catch(console.error);
};
