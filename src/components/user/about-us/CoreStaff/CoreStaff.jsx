import React from "react";
import useCallAPI from "../../../../hooks/useCallAPI";
import { core_staffs } from "../../../../untils/variable";
import StaffSection from "./StaffSection/StaffSection";
import styles from "./CoreStaff.module.css"
import { Col, Container, Row } from "react-bootstrap";

const CoreStaff = () => {
  const { data, isLoading } = useCallAPI(core_staffs);
  return (
    <>
      {/* Core Staff  */}
      <div className={styles.coreStaffSection}>
        <Container>
          <Row>
            <Col >
              <div className={styles.wrapStaffTitle}>
                <div className={styles.subStaffTitle}>
                  <p>
                    <i className="fa-solid fa-people-group" />
                    Core Staff
                  </p>
                  <h2>Our Team</h2>
                </div>
              </div>
            </Col>
          </Row>

          <StaffSection data={data} styles={styles} isLoading={isLoading} />
        </Container>
      </div>
    </>
  );
};

export default CoreStaff;
