import styles from "./AuthImage.module.css"

const AuthImage = ({loginImage}) => {
  return (
    <div className={styles.loginImage}>
      <img src={loginImage} alt="Technophile" />
    </div>
  );
};

export default AuthImage;
