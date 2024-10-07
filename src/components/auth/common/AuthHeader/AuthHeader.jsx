import { Link, useLocation} from "react-router-dom";
import styles from "./AuthHeader.module.css"

const AuthHeader = ({ authSub1, authButton }) => {
  const location = useLocation();

  const urlPath = location.pathname === "/register" ? "/login" : "/register";


  return (
    <>
      <div className={styles.authHeader}>
        <div className={styles.authButton}>
          <p>{authSub1}</p>
          <Link to={urlPath}>
            <button>{authButton}</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AuthHeader;
