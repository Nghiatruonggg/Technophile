import React from "react";
import avatarEx from "../../../assets/common/images/Faces for Users Reviews/face3.jpeg";
const DashboardHeader = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="dashboard-header">
            <img src={avatarEx} alt="avatar" />
          </div>
          <p className="user-name">Hello Nghia!</p>
          <p className="user-role">Technophile Admin</p>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
