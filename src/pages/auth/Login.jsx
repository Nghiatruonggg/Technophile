import React from "react";
import "../../assets/auth/authGlobal.css";
import AuthImage from "../../components/auth/common/AuthImage/AuthImage";
import SigninForm from "../../components/auth/SigninForm";
import AuthHeader from "../../components/auth/common/AuthHeader/AuthHeader";
import AuthTitle from "../../components/auth/common/AuthTitle/AuthTitle";
import { authStructure } from "../../structures/AuthStructure";
import { Col, Container, Row } from "react-bootstrap";

const Login = () => {
  const loginInfo = authStructure[0];
  return (
    <>
      <div className="auth-container">
        <AuthImage loginImage={loginInfo.AuthImage} />

        <div className="auth-section">
          <Container>
            <Row>
              <Col>
                <AuthHeader
                  authSub1={loginInfo.authSub1}
                  authButton={loginInfo.authButton}
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <div className="auth-main">
                  <div className="auth-form">
                    <AuthTitle
                      authSub2={loginInfo.authSub2}
                      authTitle={loginInfo.authTitle}
                    />

                    <SigninForm />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

    </>
  );
};

export default Login;
