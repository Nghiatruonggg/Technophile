import { Col } from "react-bootstrap";


const NewsFilter = ({styles}) => {
  return (
    <Col xs={12} sm={12} md={4}>
      <div className={styles.newsFilter}>
        <div className={styles.newSearch}>
            <h4>Search</h4>
            <input placeholder="Search here" />
        </div>

        <div className={styles.recentViewed}>
            <h4>Recent Viewed</h4>
            <div className={styles.productCard}>
                
            </div>
        </div>
      </div>
    </Col>
  );
};

export default NewsFilter;
