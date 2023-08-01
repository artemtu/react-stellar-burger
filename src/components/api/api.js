import React from "react";
export const config = {
    baseUrl:"https://norma.nomoreparties.space/api",
    headers: {
        "Content-Type":"application/json",
    },
};

export function checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
}


