import { Col, Container, Row } from "react-bootstrap";
import AboutUs1 from "../../../../assets/common/images/About Us Section/AU-1.webp"

const Overview = () => {
  return (
    <>
      {/* Overview Section */}
      <div className="overview-section">
        <Container>
          <Row id="wrap-info-section">
            <Col xs={12} sm={12} md={5}>
              <div className="info-image">
                <img src={AboutUs1} alt="Customer having a good time" />
              </div>
            </Col>
            <Col xs={12} sm={12} md={7}>
              <div className="info-text">
                <div className="wrap-info-text">
                  <div className="sub-info-title">
                    <p>
                      <i className="fa-solid fa-basket-shopping" />
                      About Us
                    </p>
                    <h2>Your Ultimate Online Tech Retail Destination</h2>
                  </div>
                  <div className="info-detail">
                    <p>
                      Welcome to Technophile, your go-to shop for the latest
                      gadgets, cutting-edge electronics, and top accessories.
                      From smartphones and laptops to smart home devices and
                      gaming gear, we have everything you need. Enjoy a seamless
                      shopping experience and discover the future of technology
                      with Technophile!
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Overview;
