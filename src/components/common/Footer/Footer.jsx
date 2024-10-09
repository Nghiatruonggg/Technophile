import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

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
                      <Link href="#">My Account</Link>
                    </li>
                    <li>
                      <Link href="#">Login</Link>
                    </li>
                    <li>
                      <Link href="#">My Cart</Link>
                    </li>
                    <li>
                      <Link href="#">Products</Link>
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
                      <Link href="#">About Us</Link>
                    </li>
                    <li>
                      <Link href="#">News</Link>
                    </li>
                    <li>
                      <Link href="#">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/contact-us">Contact</Link>
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
