import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { submitLogin } from "../../reducers/authReducerSlice";
import "react-toastify/dist/ReactToastify.css";
import ToastPopup from "../popups/ToastPopup";
import styles from "./AuthForm.module.css"
import { Form } from "react-bootstrap";

const SigninForm = () => {
  const authFunction = useSelector((state) => state.auth);
  const { user_info, isLoading } = authFunction;

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
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const result = await dispatch(submitLogin(user));

      if (submitLogin.fulfilled.match(result)) {
        ToastPopup({
          message: "Logged In Successfully",
          type: "success",
        });
        setTimeout(() => {
          redirect("/dashboard");
        }, 2000);
      }

      if (submitLogin.rejected.match(result)) {
        let errorMessage =
          result.payload.data?.error || "Login failed! Try again";
        ToastPopup({ message: `${errorMessage}`, type: "error" });
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    let userToken = JSON.parse(localStorage.getItem("user_token"));
    if (user_info || userToken) {
      redirect("/dashboard");
    }
  }, [user_info]);



  return (
    <>
      <Form className={styles.signinForm} onSubmit={handleLogin}>
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

        <div className={styles.signinBottom}>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isLoading ? true : false}
          >
            Submit
          </button>

          <Link>Forget your password?</Link>
        </div>
      </Form>
    </>
  );
};

export default SigninForm;
