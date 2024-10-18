import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import AdminPostForm from "../../components/admin/posts-manage/admin-post-forms/AdminPostForm";
import { Link, useParams } from "react-router-dom";
import ModifyPostView from "../../components/admin/posts-manage/ModifyPostView/ModifyPostView";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../reducers/postsCRUDSlice";

const EditPost = () => {
  const [postData, setPostData] = useState({});
  const [detailData, setDetailData] = useState({});
  const param = useParams();

  const postFunction = useSelector((state) => state.postsCRUD);
  const { posts, isLoading, error } = postFunction;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost());
  }, []);

  useEffect(() => {
    if (posts) {
      const detailData = posts.find((post) => {
        return post.slug == param.slug;
      });

      if (detailData) {
        setDetailData(detailData);
      }
    }
  }, []);

  return (
    <>
      <Col xs={12} sm={12} md={6}>
        <div className="common-listing">
          <div className="listing-header">
            <p className="chart-title">Edit Post</p>
          </div>

          <AdminPostForm
            setPostData={setPostData}
            oldData={detailData}
            oldIsLoading={isLoading}
          />
        </div>
      </Col>

      <Col xs={12} sm={12} md={6}>
        <div className="common-listing">
          <div className="listing-header">
            <p className="chart-title">View Post</p>
            <Link to="/dashboard/posts">
              <button className="add-product">Back</button>
            </Link>
          </div>

          <ModifyPostView postData={postData} />
        </div>
      </Col>
    </>
  );
};

export default EditPost;
