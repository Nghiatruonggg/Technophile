import styles from "./AuthForm.module.css"
import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <>
      <form className={styles.signinForm}>
        <div className="mb-3">
          <label htmlFor="InputEmail1" className="form-label">
            Username
          </label>
          <input
            type="email"
            className="form-control"
            id="InputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
          </div>
        </div>
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

        <div className={styles.signinBottom}>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>

          <Link>Forget your password?</Link>
        </div>
      </form>
    </>
  );
};

export default SignupForm;
