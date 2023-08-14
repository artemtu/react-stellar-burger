import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";
import { useDispatch } from "react-redux";

const Protected = ({ UnAuth = true, component }) => {
  const dispatch = useDispatch();
  const isAuthChecked = useSelector((state) => state.loginUser.isAuthChecked);
  const location = useLocation();

  // useEffect(() => {
  //   dispatch(setAuthChecked(false));
  //   dispatch(checkUserAuth());
  // }, [dispatch]);

  if (UnAuth && !isAuthChecked) {
    return <Navigate to="/login" />;
  }

  return component;
};

export const OnlyAuth = (props) => <Protected UnAuth={true} {...props} />;
export const UnAuth = (props) => <Protected UnAuth={false} {...props} />;
// export const OnlyUnAuth = (props) => <Protected onlyUnAuth={true} {...props} />;
