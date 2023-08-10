import { config } from "../../components/api/api";
import { checkResponse } from "../../components/api/api";
import { REGISTER_USER } from "./actions";


export const getUserRegistration = (profileData) => {
  return {
    type: REGISTER_USER,
    payload: profileData,
  };
};


export const postUser = (registration) => (dispatch) => {
  return fetch(`${config.baseUrl}/auth/register`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify(registration),
  }).then(checkResponse) 
    .then((data) => {
     dispatch(getUserRegistration(data));
    })
    .catch(console.error) 
};

