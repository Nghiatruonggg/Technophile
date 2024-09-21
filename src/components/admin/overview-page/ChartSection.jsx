import React from "react";
import ReactApexChart from "react-apexcharts";
import {
  donutChartOptions,
  pieChartOptions,
  data2023,
  data2024,
  lineChartOptions,
  series,
} from "../../../untils/third-lib";

const ChartSection = () => {
  return (
    <>
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
              <ReactApexChart options={lineChartOptions} series={series} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartSection;
