// import { config } from "./api";
// import { checkResponse } from "./api";

// const accessToken = localStorage.getItem("accessToken");

// export const getAuthUser = () => {
//   return fetch(`${config.baseUrl}/auth/user`, {
//     method: "GET",
//     headers: {
//       ...config.headers,
//       Authorization: accessToken,
//     },
//   })
//     .then(checkResponse)
//     .then((data) => {
//       return data
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };
