import { config } from "./api";
import { checkResponse } from "./api";

const accessToken = localStorage.getItem("accessToken");
const refreshToken = localStorage.getItem("refreshToken");


export const patchAuthUser = (updateData) => {
  return fetch(`${config.baseUrl}/auth/user`, {
    method: "PATCH",
    headers: {
      ...config.headers,
      Authorization: accessToken,
    },
    body: JSON.stringify(updateData),
  })
    .then(checkResponse)
    .then((data) => {
      return data
    })
    .catch((error) => {
      console.error(error);
    });
};



// const updateToken = () => {
//     return fetch(`${config.baseUrl}/auth/token`, {
//         method: "POST",
//         headers: {
//           ...config.headers,
//           token: refreshToken,
//         },
//         body: JSON.stringify(updateData),
//       })

// }