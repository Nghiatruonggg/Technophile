import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { url_login } from "../../untils/variable";
import { useDispatch, useSelector } from "react-redux";
import { submitLogin } from "../../reducers/authReducerSlice";

const SigninForm = () => {
  const authFunction = useSelector(state => state.auth)
  const {user_info, isLoading, error } = authFunction
  console.log(user_info)



  // Acquire the account info of the user
  const redirect = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = {
    email: email,
    password: password,
  };

  // Send the data to the server
  const handleLogin = (event) => {
    event.preventDefault();

    try {
      dispatch(submitLogin(user))

      redirect("/dashboard")
    } catch (error) {
      throw new error
    }

  };


  return (
    <form className="signin-form" onSubmit={handleLogin}>
      <div className="mb-3">
        <label htmlFor="InputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="InputEmail1"
          aria-describedby="emailHelp"
          onChange={(event) => setEmail(event.target.value)}
          required={true}
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
          onChange={(event) => setPassword(event.target.value)}
          required={true}
        />
      </div>

      <div className="signin-bottom">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isLoading ? true : false}
        >
          Submit
        </button>

        <Link>Forget your password?</Link>
      </div>
    </form>
  );
};

export default SigninForm;
