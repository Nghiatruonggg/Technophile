import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { url_login } from "../../untils/variable";
import { useSelector } from "react-redux";
import { Bounce, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const SigninForm = () => {
  const authFunction = useSelector((state) => state.auth);

  // Acquire the account info of the user
  const redirect = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const user = {
    email: email,
    password: password,
  };

  // Send the data to the server
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      setIsLoading(true);
      const response = await axios.post(url_login, user);

      setIsLoading(false);

      // Save to localStorage
      localStorage.setItem("USER_INFO", JSON.stringify(response.data.user));

      // Login Popup
      toast.success("🦄 Login Successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      // Redirect to localStorage

      setTimeout(() => {
        redirect("/dashboard");
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      throw new Error();
    }
  };

  // Check to see if user has loginned
  useEffect(() => {
    const isAuth = JSON.parse(localStorage.getItem("USER_INFO"));
    if (isAuth) return redirect("/dashboard");
  }, []);

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
