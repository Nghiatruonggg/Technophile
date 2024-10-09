import "../../assets/auth/authGlobal.css";
import AuthImage from "../../components/auth/common/AuthImage/AuthImage";
import AuthHeader from "../../components/auth/common/AuthHeader/AuthHeader";
import AuthTitle from "../../components/auth/common/AuthTitle/AuthTitle";
import { authStructure } from "../../structures/AuthStructure";
import SignupForm from "../../components/auth/SignupForm";
import { Col, Container, Row } from "react-bootstrap";

const Signup = () => {
  const signupInfo = authStructure[1];
  return (
    <>
      <div className="auth-container">
        <AuthImage loginImage={signupInfo.AuthImage} />

        <div className="auth-section">
          <Container>
            <Row >
              <Col>
                <AuthHeader
                  authSub1={signupInfo.authSub1}
                  authButton={signupInfo.authButton}
                />
              </Col>
            </Row>

            <Row >
              <Col>
                <div className="auth-main">
                  <div className="auth-form">
                    <AuthTitle
                      authSub2={signupInfo.authSub2}
                      authTitle={signupInfo.authTitle}
                    />

                    <SignupForm/>
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

export default Signup;
