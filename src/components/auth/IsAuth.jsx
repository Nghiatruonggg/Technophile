import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const IsAuth = ({ component }) => {
  const authFunction = useSelector((state) => state.auth);
  let { user_info } = authFunction;

  return user_info == null && JSON.parse(localStorage.getItem("user_token") == null) ? <Navigate to="/login" replace={true}/> : component
};

export default IsAuth;
