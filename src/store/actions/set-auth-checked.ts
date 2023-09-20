import { SET_AUTH_CHEKCED } from "./actions";
import { IsetAuthChecked } from "../types";

export const setAuthChecked = (value:boolean) => ({
    type: SET_AUTH_CHEKCED,
    payload: value,
  });