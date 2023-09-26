import { config } from "./api";
import { checkResponse } from "./api";

const accessToken = localStorage.getItem("accessToken");

type IupdateData = {
  email: string;
  password: string;
  name: string;
};

export const patchAuthUser = (updateData: IupdateData) => {
  return fetch(`${config.baseUrl}/auth/user`, {
    method: "PATCH",
    headers: {
      ...config.headers,
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(updateData),
  })
    .then(checkResponse)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
};
