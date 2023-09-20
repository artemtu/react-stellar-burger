import { setAuthChecked } from "./set-auth-checked";
import { getUser } from "./get-profile-info";

export const checkUserAuth = () => {
  return (dispatch) => {
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
