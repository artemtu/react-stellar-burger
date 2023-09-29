import { config } from "../../components/api/api";
import { checkResponse } from "../../components/api/api";
import { GET_PROFILE_INFO } from "./actions";
import { fetchWithRefresh } from "./refreshToken";
import { IgetUserData } from "../types";
import { AppDispatch } from "../types";
import { IprofileInfo } from "../reducers/get-profile-info-reducer";

export const getUserData = (userInfo: IprofileInfo) => {
  return {
    type: GET_PROFILE_INFO,
    payload: userInfo,
  };
};

export const getUser = () => {
  return (dispatch: AppDispatch) => {
    return fetchWithRefresh(`${config.baseUrl}/auth/user`, {
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
