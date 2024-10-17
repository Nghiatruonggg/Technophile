import React from "react";
import { Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import useCallAPIwithPagination from "../../../../../hooks/useCallAPIwithPagination";
import { posts_manage } from "../../../../../untils/variable";

const NewsDisplay = ({ styles }) => {
  const { data, isLoading } = useCallAPIwithPagination(posts_manage);

  return (
    <Col xs={12} sm={12} md={8}>
      {isLoading ? (
        <p>Data is Loading</p>
      ) : (
        data.map((post) => {
          return (
            <div className={styles.newsDisplay}>
              <Link to={post.slug} className={styles.newsCard}>
                <img src={post.blog_thumbnail} alt={post.blog_description} />

                <div className={styles.newsText}>
                  <h2>{post.title}</h2>
                  <p>{post.blog_description}</p>
                  <Button>Read More</Button>
                </div>
              </Link>
            </div>
          );
        })
      )}
    </Col>
  );
};

export default NewsDisplay;
