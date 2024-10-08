import { Col, Container, Row } from "react-bootstrap";
import { AUGraphics } from "../../../../structures/UserStructure";
import styles from "../Achievement/Achievement.module.css";

const Achievement = () => {
  return (
    <>
      {/* Achievement Section */}
      <div className={styles.achievementSection}>
        <Container>
          <Row className="justify-content-center">
            {AUGraphics.map((graphic) => {
              return (
                <Col xs={12} sm={6} md={4} key={graphic.graphic}>
                  <div className={styles.wrapAchievement}>
                    <div className={styles.achievementContent}>
                      <img src={graphic.graphic} alt={graphic.alt} />
                      <p className={styles.mainAchievementTitle}>
                        {graphic.mainTitle}
                      </p>
                      <p className={styles.achievementText}>
                        {graphic.content}
                      </p>
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

export default Achievement;
