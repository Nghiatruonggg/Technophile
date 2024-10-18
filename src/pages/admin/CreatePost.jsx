import { Link } from "react-router-dom";
import styles from "../../components/admin/posts-manage/CreatePost/CreatePost.module.css";
import { Col } from "react-bootstrap";
import AdminPostForm from "../../components/admin/posts-manage/admin-post-forms/AdminPostForm";
import { useState } from "react";
import ModifyPostView from "../../components/admin/posts-manage/ModifyPostView/ModifyPostView";

const CreatePost = () => {
    const [postData, setPostData] = useState({});
  return (
    <>
      <Col xs={12} sm={12} md={6}>
        <div className="common-listing">
          <div className="listing-header">
            <p className="chart-title">Add Post</p>
          </div>

          <AdminPostForm setPostData={setPostData} />
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

          <ModifyPostView postData={postData}/>
        </div>
      </Col>
    </>
  );
};

export default CreatePost;
