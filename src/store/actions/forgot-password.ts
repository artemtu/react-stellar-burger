import { FORGOT_PASSWORD } from "./actions";
import { config } from "../../components/api/api";
import { checkResponse } from "../../components/api/api";
import { useNavigate } from "react-router-dom";

interface IPasswordData {
  email: string;
}

export const getNewPassword = (passwordData: IPasswordData) => {
  return {
    type: FORGOT_PASSWORD,
    payload: passwordData,
  };
};

//@ts-ignore
export const postResetPassword = (email) => (dispatch) => {
  // const navigate = useNavigate();
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
