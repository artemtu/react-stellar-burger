// const refreshToken = () => {
//   return fetch("https://norma.nomoreparties.space/api/auth/token", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       token: localStorage.getItem("refreshToken"),
//     }),
//   }).then(checkResponse);
// };

// const fetchWithRefresh = async (url, options) => {
//   try {
//     const res = await fetch(url, options);
//     return await checkResponse(res);
//   } catch (err) {
//     if (err.message === "jwt expired") {
//       const refreshData = await refreshToken();
//       if (!refreshData.success) {
//         return Promise.reject(refreshData);
//       }
//       localStorage.setItem("accessToken", refreshData.accessToken);
//       localStorage.setItem("refreshToken", refreshData.refreshToken);
//       options.headers.authorization = refreshData.accessToken;
//       const res = await fetch(url, options);
//       return await checkResponse(res);
//     } else {
//       return Promise.reject(err);
//     }
//   }
// };

// export const getUser = () => {
//   return (dispatch) => {
//     return fetchWithRefresh("https://norma.nomoreparties.space/api/auth/user", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         authorization: localStorage.getItem("accessToken"),
//       },
//     }).then((res) => {
//       if (res.success) {
//         dispatch(setUser(res.user));
//       } else {
//         return Promise.reject("Ошибка данных с сервера");
//       }
//     });
//   };
// };

// export const checkUserAuth = () => {
//   return (dispatch) => {
//     if (localStorage.getItem("accessToken")) {
//       dispatch(getUser())
//         .catch((error) => {
//           localStorage.removeItem("accessToken");
//           localStorage.removeItem("refreshToken");
//         })
//         .finally(() => dispatch(setAuthChecked(true)));
//     } else {
//       dispatch(setAuthChecked(true));
//     }
//   };
// };