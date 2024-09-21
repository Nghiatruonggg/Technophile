import React, { useEffect, useState } from "react";
import { Link, useLocation} from "react-router-dom";

const AuthHeader = ({ authSub1, authButton }) => {
  const location = useLocation();

  const urlPath = location.pathname === "/register" ? "/login" : "/register";


  return (
    <>
      <div className="auth-header">
        <div className="auth-button">
          <p>{authSub1}</p>
          <Link to={urlPath}>
            <button>{authButton}</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AuthHeader;
