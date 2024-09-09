import React from "react";
import "../../assets/admin/admin.css";
import avatarEx from "../../assets/common/images/Faces for Users Reviews/face3.jpeg";
import Subbanner from "../../components/common/Subbanner";
import MainTitle from "../../components/common/MainTitle";
import ReactApexChart from "react-apexcharts";
import {
  donutChartOptions,
  pieChartOptions,
  data2023,
  data2024,
  lineChartOptions,
  series,
} from "../../untils/third-lib";

const Dashboard = () => {
  return (
    <>
      <Subbanner />
      <MainTitle pageSubName={"My Account"} pageName={"Dashboard"} />
      <div className="dashboard-main">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12">
              <div className="dashboard-header">
                <img src={avatarEx} alt="avatar" />
              </div>
              <p className="user-name">Hello Nghia!</p>
              <p className="user-role">Technophile Admin</p>
            </div>
          </div>

          <div className="row" id="dashboard-content">
            <div className="col-12 col-sm-4 col-md-3">
              <div className="dashboard-nav">
                <ul className="nav-list">
                  <li>
                    <i className="fa-solid fa-grip"></i>Overview
                  </li>
                  <li>
                    <i className="fa-solid fa-bag-shopping"></i>Products
                  </li>
                  <li>
                    <i className="fa-solid fa-shop"></i>Orders
                  </li>
                  <li>
                    <i className="fa-solid fa-gears"></i>Settings
                  </li>
                  <li>
                    <i className="fa-solid fa-right-from-bracket"></i>Logout
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-sm-8 col-md-9">
              <div className="dashboard-detail">
                <div className="row">
                  <div className="col-12 col-sm-6 col-md-4">
                    <div className="analysis-card">
                      <div className="analysis-logo">
                        <i className="fa-solid fa-money-bill"></i>
                        <p className="analysis-title">Total Sales Revenue</p>
                      </div>

                      <div className="analysis-detail">
                        <h2 className="total-revenue">300K</h2>
                        <p className="analysis-compare">
                          <i class="fa-solid fa-arrow-up-right-dots"></i>
                          <span>32%</span> Balance
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-md-4">
                    <div className="analysis-card">
                      <div className="analysis-logo">
                        <i class="fa-solid fa-trophy"></i>
                        <p className="analysis-title">Total Campaign</p>
                      </div>

                      <div className="analysis-detail">
                        <h2 className="total-revenue">1329</h2>
                        <p className="analysis-compare">
                          <i class="fa-solid fa-equals"></i>
                          <span className="equal-compare">0%</span> Balance
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-sm-6 col-md-4">
                    <div className="analysis-card">
                      <div className="analysis-logo">
                        <i className="fa-solid fa-money-bill"></i>
                        <p className="analysis-title">Total Shipping Count</p>
                      </div>

                      <div className="analysis-detail">
                        <h2 className="total-revenue">766</h2>
                        <p className="analysis-compare">
                          <i class="fa-solid fa-arrow-down-short-wide"></i>
                          <span className="decrease-compare">-20%</span> Balance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12">
                    <div className="total-revenue-section">
                      <p className="chart-title">Total Revenue Sale</p>
                      <div className="charts-section">
                        <div className="row">
                          <div className="col-12 col-sm-12 col-md-6">
                            <div id="chart">
                              <ReactApexChart
                                options={donutChartOptions}
                                series={data2023}
                                type="donut"
                              />
                            </div>
                          </div>

                          <div className="col-12 col-sm-12 col-md-6">
                            <div id="chart">
                              <ReactApexChart
                                options={pieChartOptions}
                                series={data2024}
                                type="pie"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 col-sm-12 col-md-12">
                    <div className="total-revenue-section">
                      <p className="chart-title">Revenue sale per month</p>
                      <div className="chart-section">
                        <ReactApexChart
                          options={lineChartOptions}
                          series={series}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
