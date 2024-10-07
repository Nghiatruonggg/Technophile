import styles from "./DashboardHeader.module.css"
import avatarEx from "../../../../assets/common/images/Faces for Users Reviews/face3.jpeg";
const DashboardHeader = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12">
          <div className={styles.dashboardHeader}>
            <img src={avatarEx} alt="avatar" />
          </div>
          <p className={styles.userName}>Hello Nghia!</p>
          <p className={styles.userRole}>Technophile Admin</p>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
