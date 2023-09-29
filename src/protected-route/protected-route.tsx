import { Navigate, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/types";
import { checkUserAuth } from "../store/actions/check-user-auth";
import { useEffect } from "react";

type TProtectedRoute = {
  readonly UnAuth: boolean;
  readonly component: JSX.Element;
};

const Protected = ({
  UnAuth = true,
  component,
}: TProtectedRoute): JSX.Element => {
  const dispatch = useAppDispatch();

  const isAuthChecked = useAppSelector(
    (state) => state.loginUser.isAuthChecked
  );

  const location = useLocation();
  const from = location.state?.from || "/";

  useEffect(() => {
    dispatch(checkUserAuth());
  }, [dispatch]);

  if (UnAuth && !isAuthChecked) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (!UnAuth && isAuthChecked) {
    return <Navigate to={from} />;
  }

  return component;
};

export const OnlyAuth = (props: any) => <Protected UnAuth={true} {...props} />;
export const UnAuth = (props: any) => <Protected UnAuth={false} {...props} />;
