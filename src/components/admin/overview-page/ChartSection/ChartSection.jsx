import styles from "./ChartSection.module.css"
import ReactApexChart from "react-apexcharts";
import {
  donutChartOptions,
  pieChartOptions,
  data2023,
  data2024,
  lineChartOptions,
  series,
} from "../../../../untils/third-lib";
import { Col, Row } from "react-bootstrap";

const ChartSection = () => {
  return (
    <>
      <Row >
        <Col >
          <div className={styles.totalRevenueSection}>
            <p className={styles.chartTitle}>Total Revenue Sale</p>
            <div className="charts-section">
              <Row >
                <Col md={6} >
                  <div id="chart">
                    <ReactApexChart
                      options={donutChartOptions}
                      series={data2023}
                      type="donut"
                    />
                  </div>
                </Col>

                <Col md={6}>
                  <div id="chart">
                    <ReactApexChart
                      options={pieChartOptions}
                      series={data2024}
                      type="pie"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>

      <Row >
        <Col>
          <div className={styles.totalRevenueSection}>
            <p className="chart-title">Revenue sale per month</p>
            <div className="chart-section">
              <ReactApexChart options={lineChartOptions} series={series} />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ChartSection;
