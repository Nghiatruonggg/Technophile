import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const IsAuth = ({ component }) => {
  const authFunction = useSelector((state) => state.auth);
  let { user_info } = authFunction;

  if ((user_info = null)) {
    <Navigate to="/login" replace={true} />;
  }
  {
    return component;
  }
};

export default IsAuth;
