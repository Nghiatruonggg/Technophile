import React from "react";

const AuthImage = ({loginImage}) => {
  return (
    <div className="login-image">
      <img src={loginImage} alt="Technophile" />
    </div>
  );
};

export default AuthImage;
