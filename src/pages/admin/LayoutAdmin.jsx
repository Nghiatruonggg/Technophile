import React from "react";
import "../../assets/admin/admin.css";
import Subbanner from "../../components/common/Subbanner";
import MainTitle from "../../components/common/MainTitle";
import DashboardHeader from "../../components/admin/common/DashboardHeader";
import DashboardNav from "../../components/admin/common/DashboardNav";
import { Outlet } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";

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
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
};

export default LayoutAdmin;
