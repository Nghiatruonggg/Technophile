import React from "react";
import "../../assets/admin/adminGlobal.css";
import Subbanner from "../../components/common/Subbanner/Subbanner";
import MainTitle from "../../components/common/MainTitle/MainTitle";
import DashboardHeader from "../../components/admin/common/DashboardHeader/DashboardHeader";
import DashboardNav from "../../components/admin/common/DashboardNav/DashboardNav";
import { Outlet } from "react-router-dom";
import ToastifyContainer from "../../components/popups/ToastifyContainer"
import { Col, Container, Row } from "react-bootstrap";

const LayoutAdmin = () => {
  return (
    <>
      <Subbanner />
      <MainTitle pageSubName={"My Account"} pageName={"Dashboard"} />
      <div className="dashboard-main">
        <Container>
          <DashboardHeader />

          <Row className="mt-4">
            <DashboardNav />

            <Col xs={12} sm={8} md={9}>
              <div className="dashboard-detail">
                <Outlet/>

              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <ToastifyContainer/>
    </>
  );
};

export default LayoutAdmin;
