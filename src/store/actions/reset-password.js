import { RESET_PASSWORD } from "./actions";
import { config } from "../../components/api/api";
import { checkResponse } from "../../components/api/api";




export const resetPassword = (serverAnswer) => {
    return {
      type: RESET_PASSWORD,
      payload: serverAnswer,
    };
  };
  
  export const postRefreshPassword = (resetOpt) => (dispatch) => {
    return fetch(`${config.baseUrl}/password-reset/reset`, {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify(resetOpt),
    })
      .then(checkResponse)
      .then((data) => {
        dispatch(resetPassword(data));
      })
      .catch(console.error);
  };
  


//   nibs770538@yandex.ru

