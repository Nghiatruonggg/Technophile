import React from "react";
import "../../assets/auth/auth.css";
import AuthImage from "../../components/auth/common/AuthImage";
import SigninForm from "../../components/auth/SigninForm";
import AuthHeader from "../../components/auth/common/AuthHeader";
import AuthTitle from "../../components/auth/common/AuthTitle";
import { authStructure } from "../../structures/AuthStructure";
import { Bounce, ToastContainer } from "react-toastify";

const Login = () => {
  const loginInfo = authStructure[0];
  return (
    <>
      <div className="auth-container">
        <AuthImage loginImage={loginInfo.AuthImage} />

        <div className="auth-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12">
                <AuthHeader
                  authSub1={loginInfo.authSub1}
                  authButton={loginInfo.authButton}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-sm-12 col-md-12">
                <div className="auth-main">
                  <div className="auth-form">
                    <AuthTitle
                      authSub2={loginInfo.authSub2}
                      authTitle={loginInfo.authTitle}
                    />

                    <SigninForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </>
  );
};

export default Login;
