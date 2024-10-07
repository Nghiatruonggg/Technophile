import styles from "./AuthTitle.module.css"

const AuthTitle = ({authSub2, authTitle}) => {
  return (
    <>
      <div className={styles.loginFormTitle}>
        <h2>{authTitle}</h2>
        <p>{authSub2}</p>
      </div>
    </>
  );
};

export default AuthTitle;
