import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";

const Protected = ({component }) => {
  const isAuthChecked = useSelector((state) => state.loginUser.isAuthChecked);

  const location = useLocation();


  if (!isAuthChecked) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  
  return component;
};

export const OnlyAuth = (props) => <Protected isAuthChecked={true || false} {...props} />;
// export const OnlyUnAuth = (props) => <Protected onlyUnAuth={true} {...props} />;
