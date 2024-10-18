import styles from "./ModifyPostView.module.css";
import ProductLabel from "../../admin-product-forms/form-components/ProductLabel";
import { Col, Row } from "react-bootstrap";
import parse from "html-react-parser";

const ModifyPostView = ({ postData }) => {
  const { contentText } = postData;
  return (
    <Row className="mb-4">
      <Col className="mb-3" xs={12} sm={12} md={12}>
        <div className={`form-outline ${styles.wrapBox}`}>
          <ProductLabel
            name="Post Title"
            htmlFor="post-title"
            required={true}
          />
          <p className={styles.viewedDisplay}>{postData.titleText}</p>
        </div>
      </Col>

      <Col className="mb-3" xs={12} sm={12} md={12}>
        <div className={`form-outline ${styles.wrapBox}`}>
          <ProductLabel name="Post Slug" htmlFor="post-slug" required={true} />
          <p className={styles.viewedDisplay}>{postData.slugText}</p>
        </div>
      </Col>

      <Col className="mb-4" xs={12} sm={12} md={12}>
        <div className={`form-outline ${styles.wrapBox}`}>
          <ProductLabel
            name="Post Description"
            htmlFor="post-description"
            required={true}
          />
          <p className={styles.viewedDisplay}>{postData.descriptionText}</p>
        </div>
      </Col>

      <Col xs={12} sm={12} md={12}>
        <div className={`form-outline ${styles.wrapBox}`}>
          <ProductLabel
            name="Post Content"
            htmlFor="post-content"
            required={true}
          />
          <div style={{marginBottom: "0"}} className={styles.viewedDisplay}>
            {contentText ? parse(`${contentText}`) : ""}
          </div>
        </div>
      </Col>

      <Col className="mb-3" xs={12} sm={12} md={12}>
        <div className={`form-outline ${styles.wrapBox}`}>
          <ProductLabel
            name="Post Thumbnail"
            htmlFor="post-thumbnail"
            required={true}
          />
          <img src={postData.thumbnail} className={`${styles.viewedDisplay} ${styles.thumbnailView}`}/>
        </div>
      </Col>
    </Row>
  );
};

export default ModifyPostView;
