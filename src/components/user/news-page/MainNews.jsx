import styles from "./MainNews.module.css";
import { Container, Row } from "react-bootstrap";
import NewsDisplay from "./MainNews/NewsDisplay/NewsDisplay";
import NewsFilter from "./MainNews/NewsFilter/NewsFilter";

const MainNews = () => {
  return (
    <>
      <Container>
        <Row className={styles.customRow}>
          <NewsDisplay styles={styles} />

          <NewsFilter />
        </Row>
      </Container>
    </>
  );
};

export default MainNews;
