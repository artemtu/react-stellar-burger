import { SET_AUTH_CHEKCED } from "./actions";

export const setAuthChecked = (value) => ({
    type: SET_AUTH_CHEKCED,
    payload: value,
  });