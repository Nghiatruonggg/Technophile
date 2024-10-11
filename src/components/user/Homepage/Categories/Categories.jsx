import { Link } from "react-router-dom";
import { categoryLogo } from "../../../../structures/UserStructure";
import styles from "./Categories.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

const Categories = () => {
  return (
    <>
      {/* Categories */}
      <div className={styles.categoriesSection}>
        <Container>
          {/* Categories Title */}
          <Row>
            <Col>
              <div className={`${styles.subCategoriesTitle} sub-title`}>
                <p>
                  <FontAwesomeIcon icon={faTag} className="icon" />
                  Categories
                </p>
                <h1>Browse by Category</h1>
              </div>
            </Col>
          </Row>

          {/* Categories Main */}
          <Row>
            {categoryLogo.map((category) => {
              return (
                <Col key={category.id} xs={6} sm={4} md={2}>
                  <Link 
                    className={styles.linkCategory}
                    to={category.redirectPath}
                  >
                    <div className={styles.categoryProduct}>
                      <div className={styles.categoryGraphic}>
                        <img src={category.imageSrc} alt="MobileLogo" />
                      </div>
                      <div className={styles.categoryProductTitle}>
                        <p>{category.name}</p>
                      </div>
                    </div>
                  </Link>
                </Col>
              );
            })}

          </Row>
        </Container>
      </div>
    </>
  );
};

export default Categories;
