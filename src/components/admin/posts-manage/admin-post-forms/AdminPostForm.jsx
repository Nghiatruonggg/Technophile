import React, { useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import ProductLabel from "../../admin-product-forms/form-components/ProductLabel";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { useForm } from "react-hook-form";
import slugify from "slugify";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../../../reducers/postsCRUDSlice";
import ToastPopup from "../../../popups/ToastPopup";
import { useNavigate } from "react-router-dom";

const AdminPostForm = ({ setPostData }) => {
  const [isSlugEdited, setIsSlugEdited] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const redirect = useNavigate();
  const postFunction = useSelector((state) => state.postsCRUD);
  const { posts, isLoading, error } = postFunction;

  const onEditorStateChange = (editorState) => {
    setValue("post_content", editorState);
  };

  const contentText = watch("post_content");
  const titleText = watch("title");
  const slugText = watch("slug");
  const descriptionText = watch("post_description");
  const thumbnail = watch("post_thumbnail");

  const postData = {
    contentText: contentText,
    titleText: titleText,
    slugText: slugText,
    descriptionText: descriptionText,
    thumbnail: thumbnail,
  };

  useEffect(() => {
    setPostData(postData);
  }, [contentText, titleText, slugText, descriptionText, thumbnail]);

  useEffect(() => {
    if (titleText && !isSlugEdited) {
      const sluggedTitle = slugify(`${titleText}`, { lower: true });
      setValue("slug", sluggedTitle);
    }
  }, [titleText, isSlugEdited, setValue]);

  const handleChange = (e) => {
    setIsSlugEdited(true);
    setValue("slug", e.target.value);
  };

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const result = await dispatch(createPost(data));
      if (createPost.fulfilled.match(result)) {
        ToastPopup({ message: "Created Success!", type: "success" });

        reset();
        setTimeout(() => {
          redirect("/dashboard/posts");
        }, 2000);
      }
      if (createPost.rejected.match(result)) {
        const errorMessage = error.data?.error || "Please Try again later";

        ToastPopup({ message: `${errorMessage}`, type: "error" });
      }
    } catch (error) {
      console.log("error occured", error.message);
      ToastPopup({ message: error.message, type: "error" });
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row className="mb-4">
        <Col className="mb-4" xs={12} sm={12} md={12}>
          <div className="form-outline">
            <ProductLabel
              name="Post Title"
              htmlFor="post-title"
              required={true}
            />
            <input
              type="text"
              id="post-title"
              className="form-control"
              {...register("title", { required: true })}
            />
          </div>
        </Col>

        <Col className="mb-4" xs={12} sm={12} md={12}>
          <div className="form-outline">
            <ProductLabel
              name="Post Slug"
              htmlFor="post-slug"
              required={true}
            />
            <input
              type="text"
              id="post-slug"
              value={slugText}
              onChange={handleChange}
              className="form-control"
              {...register("slug", { required: true })}
            />
          </div>
        </Col>

        <Col className="mb-4" xs={12} sm={12} md={12}>
          <div className="form-outline">
            <ProductLabel
              name="Post Description"
              htmlFor="post-description"
              required={true}
            />
            <input
              type="text"
              id="post-description"
              className="form-control"
              {...register("post_description", { required: true })}
            />
          </div>
        </Col>

        <Col className="mb-4" xs={12} sm={12} md={12}>
          <div className="form-outline">
            <ProductLabel
              name="Post Content"
              htmlFor="post-content"
              required={true}
            />
            <ReactQuill
              theme="snow"
              value={contentText}
              onChange={onEditorStateChange}
            />
          </div>
        </Col>

        <Col className="mb-4" xs={12} sm={12} md={12}>
          <div className="form-outline">
            <ProductLabel
              name="Post Thumbnail"
              htmlFor="post-thumbnail"
              value={contentText}
              required={true}
            />
            <input
              type="text"
              id="post-thumbnail"
              className="form-control"
              {...register("post_thumbnail", { required: true })}
            />
          </div>
        </Col>
      </Row>

      <button type="submit" className="add-product">
        Submit
      </button>
    </Form>
  );
};

export default AdminPostForm;
