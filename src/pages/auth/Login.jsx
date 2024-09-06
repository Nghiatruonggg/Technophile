import React from "react";
import "../../assets/auth/auth.css";
import loginImage from "../../assets/common/images/Login/BannerLogin.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="login-image">
          <img src={loginImage} alt="Technophile" />
        </div>

        <div className="login-section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12">
                <div className="login-header">
                  <div className="sign-up-button">
                    <p>Not a member?</p>
                    <Link>
                      <button>Sign Up Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-sm-12 col-md-12">
                <div className="login-main">
                  <div className="login-form">
                    <div className="login-form-title">
                      <h2>Sign in to Technophile</h2>
                      <p>Enter your detail below</p>
                    </div>

                    <form className="signin-form">
                      <div className="mb-3">
                        <label htmlFor="InputEmail1" className="form-label">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="InputEmail1"
                          aria-describedby="emailHelp"
                        />
                        <div id="emailHelp" className="form-text">
                          We'll never share your email with anyone else.
                        </div>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="InputPassword1" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                        />
                      </div>

                      <div className="signin-bottom">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>

                        <Link>Forget your password?</Link>
                      </div>
                      
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
