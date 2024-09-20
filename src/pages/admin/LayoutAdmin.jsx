import React from "react";
import "../../assets/admin/admin.css";
import Subbanner from "../../components/common/Subbanner";
import MainTitle from "../../components/common/MainTitle";
import DashboardHeader from "../../components/admin/common/DashboardHeader";
import DashboardNav from "../../components/admin/common/DashboardNav";
import { Outlet } from "react-router-dom";
import ToastifyContainer from "../../components/popups/ToastifyContainer"

const LayoutAdmin = () => {
  return (
    <>
      <Subbanner />
      <MainTitle pageSubName={"My Account"} pageName={"Dashboard"} />
      <div className="dashboard-main">
        <div className="container">
          <DashboardHeader />

          <div className="row" id="dashboard-content">
            <DashboardNav />

            <div className="col-12 col-sm-8 col-md-9">
              <div className="dashboard-detail">
                <Outlet/>

              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastifyContainer/>
    </>
  );
};

export default LayoutAdmin;
