import React from "react";

const AnalysisCard = () => {
  return (
    <>
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
                <i className="fa-solid fa-arrow-up-right-dots"></i>
                <span>32%</span> Balance
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4">
          <div className="analysis-card">
            <div className="analysis-logo">
              <i className="fa-solid fa-trophy"></i>
              <p className="analysis-title">Total Campaign</p>
            </div>

            <div className="analysis-detail">
              <h2 className="total-revenue">1329</h2>
              <p className="analysis-compare">
                <i className="fa-solid fa-equals"></i>
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
                <i className="fa-solid fa-arrow-down-short-wide"></i>
                <span className="decrease-compare">-20%</span> Balance
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalysisCard;
