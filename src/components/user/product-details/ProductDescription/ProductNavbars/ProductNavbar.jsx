import { Col, Row } from "react-bootstrap";
import styles from "../ProductNavbars/ProductNavbars.module.css";
const ProductNavbar = ({ activeTab, handleActive }) => {
  return (
    <>
      <Row >
        <Col >
          <div className={styles.wrapProductNavbar}>
            <ul>
              <li
                className={activeTab == "description" ? `${styles.active}` : ""}
                onClick={() => handleActive("description")}
              >
                <p>Description</p>
              </li>

              <li
                className={activeTab == "specification" ? `${styles.active}` : ""}
                onClick={() => handleActive("specification")}
              >
                <p>Technical Specification</p>
              </li>
              <li
                className={activeTab === "reviews" ? `${styles.active}` : ""}
                onClick={() => handleActive("reviews")}
              >
                <p>Reviews</p>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ProductNavbar;
