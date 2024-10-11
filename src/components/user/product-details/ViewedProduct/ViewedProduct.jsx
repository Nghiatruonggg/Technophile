import ViewedRecently from "./ViewedRecently/ViewedRecently";
import styles from "./ViewedProduct.module.css"
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
const ViewedProduct = () => {

  return (
    <>
      <div className={styles.ViewedProductSection}>
        <Container >
          <Row >
            <Col >
              <div className={styles.wrapViewedTitle}>
                <div className={styles.subViewedTitle}>
                  <p>
                    <FontAwesomeIcon className={styles.bagIcon} icon={faBagShopping} />
                    Recently
                  </p>
                  <h2>Viewed Products</h2>
                </div>
              </div>
            </Col>
          </Row>

          <ViewedRecently styles={styles} />
        </Container>
      </div>
    </>
  );
};

export default ViewedProduct;
