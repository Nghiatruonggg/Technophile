import { Col, Container, Row } from "react-bootstrap";
import styles from "./AddressSection.module.css";

const AddressSection = () => {
  return (
    <>
      {/* Address Section */}
      <div className={styles.addressSection}>
        <Container className="container">
          <Row className="row">
            <Col>
              <div className={styles.googleMap}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.5838558753358!2d105.80860687517588!3d21.009312080635183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac9ddf58a429%3A0xf074d3391240c023!2zTmcuNTMgxJAuIE5ndXnhu4VuIE5n4buNYyBWxaksIFRydW5nIEhvw6AsIEPhuqd1IEdp4bqleSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1719429881662!5m2!1svi!2s"
                  width="100%"
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AddressSection;
