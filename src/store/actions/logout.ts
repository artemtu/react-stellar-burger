import { LOGOUT } from "./actions";
import { config } from "../../components/api/api";
import { checkResponse } from "../../components/api/api";
import { setAuthChecked } from "./set-auth-checked";
import { IpostUserLogout } from "../types";

export const postUserLogout = (logoutData: IpostUserLogout) => {
  return {
    type: LOGOUT,
    payload: logoutData,
  };
};

//@ts-ignore
export const postLogout = (logout) => (dispatch) => {
  return fetch(`${config.baseUrl}/auth/logout`, {
    method: "POST",
    headers: {
      ...config.headers,
    },
    body: JSON.stringify(logout),
  })
    .then(checkResponse)
    .then((data) => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      dispatch(postUserLogout(data));
      // console.log(data);
      dispatch(setAuthChecked(false));
    })
    .catch(console.error);
};
