import React from "react";
import { Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import useCallAPIwithPagination from "../../../../../hooks/useCallAPIwithPagination";
import { posts_manage } from "../../../../../untils/variable";
import UserPagination from "../../../UserPagination/UserPagination";
import AdminPagination from "../../../../admin/common/AdminPagination/AdminPagination";

const NewsDisplay = ({ styles }) => {
  const { data, isLoading, totalPages, currentPage, setCurrentPage } =
    useCallAPIwithPagination(posts_manage, 4);

  return (
    <Col xs={12} sm={12} md={8}>
      {isLoading ? (
        <p>Data is Loading</p>
      ) : (
        data.map((post) => {
          return (
            <>
              <div className={styles.newsDisplay}>
                <Link to={post.slug} className={styles.newsCard}>
                  <img src={post.post_thumbnail} alt={post.post_description} />

                  <div className={styles.newsText}>
                    <h2>{post.title}</h2>
                    <p>{post.post_description}</p>
                    <Button>Read More</Button>
                  </div>
                </Link>
              </div>
            </>
          );
        })
      )}
      {!isLoading && (
        <AdminPagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      )}
    </Col>
  );
};

export default NewsDisplay;
