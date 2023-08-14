import { config } from "../../components/api/api";
import {checkResponse} from "../../components/api/api";
import { GET_PROFILE_INFO } from "./actions";

const accessToken = localStorage.getItem("accessToken");

export const getUserData = (userInfo) => {
  return {
    type: GET_PROFILE_INFO,
    payload: userInfo,
  };
};



export const getUser = () => (dispatch) => {
    return fetch(`${config.baseUrl}/auth/user`, {
      method: "GET",
      headers: {
        ...config.headers,
        Authorization: accessToken, 
      },
    })
    .then(checkResponse)
    .then((data) => {
      dispatch(getUserData(data))
      return data
    })
    .catch(console.error);
  }
  