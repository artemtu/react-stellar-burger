import { setAuthChecked } from "./set-auth-checked";
import { getUser } from "./get-profile-info";
import { AppDispatch } from "../types";
import { SET_AUTH_CHEKCED } from "./actions";

export const checkUserAuth = () => {
  return (dispatch: AppDispatch) => {
    if (localStorage.getItem("accessToken")) {
      dispatch(getUser())
        .catch((error: Error) => {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
        })
        .finally(() => dispatch(setAuthChecked(true)));
    } else {
      dispatch(setAuthChecked(false));
    }
  };
};
