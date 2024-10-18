import { useEffect, useState } from "react";
import useCallAPI from "../../hooks/useCallAPI";
import { posts_manage } from "../../untils/variable";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import NewsImage from "../../components/user/news-detail/NewsImage";
import styles from "../../components/user/news-detail/NewsDetail.module.css";
import Subbanner from "../../components/common/Subbanner/Subbanner";
import NewsFilter from "../../components/user/news-page/MainNews/NewsFilter/NewsFilter";
import TextDetail from "../../components/user/news-detail/MainWrap/TextDetail";

const NewsDetail = () => {
  const { data, isLoading } = useCallAPI(posts_manage);
  const [detailData, setDetailData] = useState({});
  const param = useParams();

  useEffect(() => {
    if (data) {
      const detailData = data.find((post) => {
        return post.slug == param.slug;
      });
      setDetailData(detailData || {});
    }
  }, [data, param.slug]);

  return (
    <>
      <Subbanner />
      <Container>
        {detailData && (
          <>
            <Row>
              <Col className={styles.imageWrap}>
                <NewsImage detailData={detailData} styles={styles} />
              </Col>
            </Row>

            <Row className={styles.mainWrap}>
              <TextDetail detailData={detailData} />
              <NewsFilter />
            </Row>
          </>
        )}
      </Container>
    </>
  );
};

export default NewsDetail;
