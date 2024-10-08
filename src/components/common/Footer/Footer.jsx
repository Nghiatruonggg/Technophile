import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <div className="footer">
        <Container>
          <Row >
            <Col xs={12} sm={12} md={4}>
              <div className="wrap-footer">
                <div className="footer-sub-title">
                  <p>Support</p>
                </div>
                <div className="footer-content">
                  <p>
                    53 Nguyen Ngoc Vu
                    <br />
                    Trung Hoa, Cau Giay
                    <br />
                    Ha Noi, Viet Nam
                  </p>
                </div>
                <div className="footer-detail">
                  <p>
                    <i className="fa-solid fa-phone" />
                    098 378 6808
                  </p>
                  <p>
                    <i className="fa-solid fa-inbox" />
                    nghiatruong110700@gmail.com
                  </p>
                </div>
              </div>
            </Col>

            <Col xs={12} sm={12} md={4} >
              <div className="wrap-footer">
                <div className="footer-sub-title">
                  <p>Account</p>
                </div>
                <div className="footer-content">
                  <ul>
                    <li>
                      <a href="#">My Account</a>
                    </li>
                    <li>
                      <a href="#">Login</a>
                    </li>
                    <li>
                      <a href="#">My Cart</a>
                    </li>
                    <li>
                      <a href="#">Products</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col xs={12} sm={12} md={4} >
              <div className="wrap-footer">
                <div className="footer-sub-title">
                  <p>Quick Link</p>
                </div>
                <div className="footer-content">
                  <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">News</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12">
              <div className="wrap-footer-bottom">
                <p>2024. All Reserved by NghiaTruong</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
