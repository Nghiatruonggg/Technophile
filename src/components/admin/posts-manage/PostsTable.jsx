import { Col, Row, Table } from "react-bootstrap";
import EditButton from "../product-manage/EditButton/EditButton";
import PostDeleteButton from "./PostDeleteButton";
import styles from "./PostsTable.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../../reducers/postsCRUDSlice";
import PostsCard from "./PostsCard/PostsCard";

const PostsTable = () => {
  const postsFunction = useSelector((state) => state.postsCRUD);
  const { posts, error, isLoading } = postsFunction;
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getPost());
  }, []);

  if (isLoading) return <p>Data is Loading</p>


  return (
    <Row style={{marginTop: "20px"}}>
      {posts.map((post) => {
        return (
          <Col key={post.id} xs={12} sm={12} md={6}>
            <PostsCard post={post} />
          </Col>
        );
      })}
    </Row>
  );
};

export default PostsTable;
