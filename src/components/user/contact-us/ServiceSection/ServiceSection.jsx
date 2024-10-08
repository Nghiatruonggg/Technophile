import styles from "./ServiceSection.module.css";
import { serviceGraphic } from "../../../../structures/UserStructure";
import { Col, Container, Row } from "react-bootstrap";

const ServiceSection = () => {
  return (
    <>
      {/* Service Section */}
      <div className={styles.serviceSection}>
        <Container >
          <Row>
            {serviceGraphic.map((service) => {
              const { addedClassname } = service;

              const dynamicClassNames = addedClassname
                .split(" ")
                .map((name) => styles[name])
                .join(" ");
              return (
                <Col xs={12} sm={6} md={3}
                  key={service.graphic}
                  className="mb-3"
                >
                  <div className={dynamicClassNames}>
                    <div className={styles.serviceImage}>
                      <img src={service.graphic} alt={service.title} />
                    </div>
                    <div className={styles.serviceText}>
                      <p className={styles.upperText}>{service.title}</p>
                      <p className={styles.bottomText}>{service.subText}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ServiceSection;
