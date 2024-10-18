import { Col, Row, Table } from "react-bootstrap";
import EditButton from "../product-manage/EditButton/EditButton";
import PostDeleteButton from "./PostDeleteButton";
import styles from "./PostsTable.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../../reducers/postsCRUDSlice";
import PostsCard from "./PostsCard/PostsCard";
import AdminPagination from "../common/AdminPagination/AdminPagination";

const PostsTable = () => {
  const postsFunction = useSelector((state) => state.postsCRUD);
  const { posts, error, isLoading } = postsFunction;
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const [slicedPost, setSlicedPost] = useState([]);

  const lastPost = currentPage * postsPerPage;
  const firstPost = lastPost - postsPerPage;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  useEffect(() => {
    if (posts) {
      const slicedPosts = posts.slice(firstPost, lastPost);
      setSlicedPost(slicedPosts);
    }
  }, [posts, firstPost, lastPost]);

  if (isLoading) return <p>Data is Loading</p>;
  console.log(slicedPost);

  return (
    <>
      <Row style={{ marginTop: "20px" }}>
        {slicedPost.map((post) => {
          return (
            <Col key={post.id} xs={12} sm={12} md={6}>
              <PostsCard post={post} />
            </Col>
          );
        })}
      </Row>

      <Row>
        <AdminPagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Row>
    </>
  );
};

export default PostsTable;
