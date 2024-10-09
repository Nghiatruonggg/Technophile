import React from "react";
import ProductLabel from "./ProductLabel";
import ErrorsRequired from "./ErrorsRequired";
import { Col, Row } from "react-bootstrap";

const BasicInfoForm = ({ register, errors }) => {
  return (
    <div className="basic-info-form">
      <>
        <Row className=" mb-4">
          <Col>
            <div className="form-outline">
              <ProductLabel
                name="Product Name"
                htmlFor="product-name"
                required={true}
              />
              <input
                type="text"
                id="product-name"
                className="form-control"
                {...register("name", { required: true })}
              />
              <ErrorsRequired errors={errors} field="name" />
            </div>
          </Col>

          <Col>
            <div className="form-outline">
              <ProductLabel
                name="Product Price"
                htmlFor="product-price"
                required={true}
              />
              <input
                type="number"
                id="product-price"
                className="form-control"
                {...register("price", { required: true })}
              />
              <ErrorsRequired errors={errors} field="price" />
            </div>
          </Col>
        </Row>

        <Row className=" mb-4">
          <Col>
            <div className="form-outline">
              <ProductLabel
                name="Phone Type"
                htmlFor="category-1"
                required={true}
              />
              <input
                type="text"
                id="category-1"
                className="form-control"
                {...register("phone_type", { required: true })}
              />
              <ErrorsRequired errors={errors} field="phone_type" />
            </div>
          </Col>
          <Col>
            <div className="form-outline">
              <ProductLabel
                name="Price Range"
                htmlFor="category-2"
                required={true}
              />
              <input
                type="text"
                id="category-2"
                className="form-control"
                {...register("price_range", { required: true })}
              />
              <ErrorsRequired errors={errors} field="price_range" />
            </div>
          </Col>
        </Row>

        <div className="form-outline mb-4">
          <ProductLabel
            name="Main Image URL"
            htmlFor="main-image"
            required={true}
          />
          <input
            type="text"
            id="main-image"
            className="form-control"
            {...register("mainImage", { required: true })}
          />
          <ErrorsRequired errors={errors} field="mainImage" />
        </div>

        <Row className="mb-4">
          <Col>
            <div className="form-outline">
              <ProductLabel
                name="Thumbnail 1 URL"
                htmlFor="thumbnail-1"
                required={true}
              />
              <input
                type="text"
                id="thumbnail-1"
                className="form-control"
                {...register("thumbnail_1", { required: true })}
              />
              <ErrorsRequired errors={errors} field="thumbnail_1" />
            </div>
          </Col>
          <Col>
            <div className="form-outline">
              <ProductLabel
                name="Thumbnail 2 URL"
                htmlFor="thumbnail-2"
                required={true}
              />
              <input
                type="text"
                id="thumbnail-2"
                className="form-control"
                {...register("thumbnail_2", { required: true })}
              />
              <ErrorsRequired errors={errors} field="thumbnail_2" />
            </div>
          </Col>
          <Col>
            <div className="form-outline">
              <ProductLabel
                name="Thumbnail 3 URL"
                htmlFor="thumbnail-3"
                required={true}
              />
              <input
                type="text"
                id="thumbnail-3"
                className="form-control"
                {...register("thumbnail_3", { required: true })}
              />
              <ErrorsRequired errors={errors} field="thumbnail_3" />
            </div>
          </Col>
        </Row>

        <div className="form-outline mb-4">
          <ProductLabel
            name="Rating Numbers"
            htmlFor="rating-numbers"
            required={true}
          />
          <input
            type="number"
            id="rating-numbers"
            className="form-control"
            {...register("rating_numbers", { required: true })}
          />
          <ErrorsRequired errors={errors} field="rating_numbers" />
        </div>

        <div className="form-outline mb-4">
          <ProductLabel
            name="Brief Information"
            htmlFor="brief-info"
            required={true}
          />
          <textarea
            className="form-control"
            id="brief-info"
            rows={4}
            defaultValue={""}
            {...register("product_brief_intro", { required: true })}
          />
          <ErrorsRequired errors={errors} field="product_brief_intro" />
        </div>
      </>
    </div>
  );
};

export default BasicInfoForm;
