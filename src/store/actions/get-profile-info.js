import { config } from "../../components/api/api";
import { checkResponse } from "../../components/api/api";
import { GET_PROFILE_INFO } from "./actions";
import { fetchWithRefresh } from "./refreshToken";

export const getUserData = (userInfo) => {
  return {
    type: GET_PROFILE_INFO,
    payload: userInfo,
  };
};

export const getUser = () => {
  return (dispatch) => {
    return fetchWithRefresh("https://norma.nomoreparties.space/api/auth/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("accessToken"),
      },
    }).then((res) => {
      if (res.success) {
        dispatch(getUserData(res));
      } else {
        return Promise.reject("Ошибка данных с сервера");
      }
    });
  };
};
