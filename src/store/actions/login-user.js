import { LOGIN_USER } from "./actions";
import { config } from "../../components/api/api";
import { checkResponse } from "../../components/api/api";

// const accessToken = localStorage.getItem("accessToken").replace("Bearer ", "");


export const getUserLogin = (loginData) => {
    return {
      type: LOGIN_USER,
      payload: loginData,
    };
  };
  
  export const postUserLogin = (login) => (dispatch) => {
    return fetch(`${config.baseUrl}/auth/login`, {
      method: "POST",
      headers: config.headers,
    //   Authorization: `Bearer ${accessToken}`,
      body: JSON.stringify(login),
    })
      .then(checkResponse)
      .then((data) => {
        localStorage.setItem("refreshToken", data.refreshToken);
        localStorage.setItem("accessToken", data.accessToken);
        dispatch(getUserLogin(data));
      })
      .catch(console.error);
  };
  



//   fetch('https://norma.nomoreparties.space/api/auth/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(loginData),
//   })