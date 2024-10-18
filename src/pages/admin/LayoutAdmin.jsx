import React from "react";
import "../../assets/admin/adminGlobal.css";
import Subbanner from "../../components/common/Subbanner/Subbanner";
import MainTitle from "../../components/common/MainTitle/MainTitle";
import DashboardHeader from "../../components/admin/common/DashboardHeader/DashboardHeader";
import DashboardNav from "../../components/admin/common/DashboardNav/DashboardNav";
import { matchPath, Outlet, useLocation } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const LayoutAdmin = () => {
  const location = useLocation();

  // Match dynamic route for editing posts
  const isEditingPost = matchPath(
    "/dashboard/posts/edit/:slug",
    location.pathname
  );

  return (
    <>
      <Subbanner />
      <MainTitle pageSubName={"My Account"} pageName={"Dashboard"} />
      <div className="dashboard-main">
        <Container>
          <DashboardHeader />

          {location.pathname == "/dashboard/posts/add" || isEditingPost ? (
            <Row className="mt-4">
              <Outlet />
            </Row>
          ) : (
            <Row className="mt-4">
              <DashboardNav />

              <Col xs={12} sm={8} md={9}>
                <div className="dashboard-detail">
                  <Outlet />
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </>
  );
};

export default LayoutAdmin;
