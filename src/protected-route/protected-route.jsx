import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import React from "react";

const Protected = ({ UnAuth = true ,component }) => {
  const isAuthChecked = useSelector((state) => state.loginUser.isAuthChecked);

  const location = useLocation();


  if (UnAuth && !isAuthChecked) {
    return <Navigate to='/login' />;
  }

  // if (UnAuth && !isAuthChecked) {
  //   return <Navigate to='/profile' />;
  // }



  // if (!UnAuth && isAuthChecked) {
  //   const { from } = location.state || { from: { pathname: "/profile" } };
  //   return <Navigate to={from} />;
  // }


  
  return component;
};

export const OnlyAuth = (props) => <Protected  UnAuth={true} {...props} />;
export const UnAuth = (props) => <Protected UnAuth={false} {...props} />;
// export const OnlyUnAuth = (props) => <Protected onlyUnAuth={true} {...props} />;
