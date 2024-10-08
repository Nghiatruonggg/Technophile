import { Link, NavLink } from "react-router-dom";
import HeaderNav from "./HeaderNav/HeaderNav";
import { Col, Container, Row } from "react-bootstrap";

const Header = () => {
  return (
    <>
      {/* Header Top */}
      <div className="header-top">
        <Container>
          <Row>
            <Col>
              <p>Welcome to the world's most friendliest store!</p>
            </Col>
          </Row>
        </Container>
      </div>
      <HeaderNav/>
    </>
  );
};

export default Header;
