import styles from "./TextDetail.module.css";
import { Col } from "react-bootstrap";
import parse from 'html-react-parser';


const TextDetail = ({ detailData }) => {
  console.log(detailData);
  return (
    <Col xs={12} sm={12} md={8}>
      <div className={styles.textWrap}>
        <div className={styles.titleWrap}>
          <h1>{detailData?.title}</h1>
          <p>{detailData?.date}</p>
        </div>

        <div className={styles.mainWrap}>
            {parse(`${detailData.blog_content}`)}
        </div>
      </div>
    </Col>
  );
};

export default TextDetail;
