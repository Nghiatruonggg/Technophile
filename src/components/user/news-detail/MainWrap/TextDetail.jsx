import styles from "./TextDetail.module.css";
import { Col } from "react-bootstrap";
import parse from "html-react-parser";

const TextDetail = ({ detailData }) => {
  const postContent = detailData?.post_content || "";
  if (!detailData) {
    return (
      <Col xs={12} sm={12} md={8}>
        <div className={styles.textWrap}>
          <h1>Data is Loading</h1> 
        </div>
      </Col>
    );
  }
  return (
    <Col xs={12} sm={12} md={8}>
      <div className={styles.textWrap}>
        <div className={styles.titleWrap}>
          <h1>{detailData?.title}</h1>
          <p>{detailData?.date}</p>
        </div>

        <div className={styles.mainWrap}>
          {parse(postContent)}
        </div>
      </div>
    </Col>
  );
};

export default TextDetail;
