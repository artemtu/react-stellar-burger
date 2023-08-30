import React from "react";
export const config = {
  baseUrl: "https://norma.nomoreparties.space/api",
  headers: {
    "Content-Type": "application/json",
  },
};

export function checkResponse<T>(res: Response) {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
}
