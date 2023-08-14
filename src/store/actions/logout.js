import { LOGOUT } from "./actions";
import { config } from "../../components/api/api";
import { checkResponse } from "../../components/api/api";
import { setAuthChecked } from "./set-auth-checked";

const refreshToken = localStorage.getItem("refreshToken");

export const postUserLogout = (logoutData) => {
  return {
    type: LOGOUT,
    payload: logoutData,
  };
};

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
      dispatch(setAuthChecked(false));
    })
    .catch(console.error);
};

// fetch("https://norma.nomoreparties.space/api/auth/logout", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     token: refreshToken,
//   },
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
