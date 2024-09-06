import React from "react";
import { Link } from "react-router-dom";

const SigninForm = () => {
  return (
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
  );
};

export default SigninForm;