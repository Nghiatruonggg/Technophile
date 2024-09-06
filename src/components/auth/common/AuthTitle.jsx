import React from "react";

const AuthTitle = ({authSub2, authTitle}) => {
  return (
    <>
      <div className="login-form-title">
        <h2>{authTitle}</h2>
        <p>{authSub2}</p>
      </div>
    </>
  );
};

export default AuthTitle;
