import React from "react";
import ProductLabel from "./ProductLabel";
import ErrorsRequired from "./ErrorsRequired";
import { Col, Row } from "react-bootstrap";

const DetailInfoForm = ({register, errors}) => {
  return (
    <div className="detail-info-form">
      <>
        <Row className=" mb-4">
          <Col>
            <div data-mdb-input-init="" className="form-outline">
              <ProductLabel
                name="Description Title 1"
                htmlFor="description-title-1"
                required={true}
              />
              <input
                type="text"
                id="description-title-1"
                className="form-control"
                {...register("description_title_1", { required: true })}
              />
              <ErrorsRequired errors={errors} field="description-title-1" />
            </div>
          </Col>
        </Row>

        <div data-mdb-input-init="" className="form-outline mb-4">
          <ProductLabel
            name="Description Text 1"
            htmlFor="description-text-1"
            required={true}
          />
          <textarea
            className="form-control"
            id="description-text-1"
            rows={4}
            defaultValue={""}
            {...register("description_text_1", { required: true })}
          />
          <ErrorsRequired errors={errors} field="description_text_1" />
        </div>

        <div data-mdb-input-init="" className="form-outline mb-4">
          <ProductLabel
            name="Description Title 2"
            htmlFor="description-title-2"
            required={true}
          />
          <input
            type="text"
            id="description-title-2"
            className="form-control"
            {...register("description_title_2", { required: true })}
          />
          <ErrorsRequired errors={errors} field="description_title_2" />
        </div>

        <div data-mdb-input-init="" className="form-outline mb-4">
          <ProductLabel
            name="Description Text 2"
            htmlFor="description-text-2"
            required={true}
          />
          <textarea
            className="form-control"
            id="description-text-2"
            rows={4}
            defaultValue={""}
            {...register("description_text_2", { required: true })}
          />
          <ErrorsRequired errors={errors} field="description_text_2" />
        </div>

        <div data-mdb-input-init="" className="form-outline mb-4">
          <ProductLabel
            name="Description Subtitle 1"
            htmlFor="description-subtitle-1"
            required={true}
          />
          <input
            type="text"
            id="description-subtitle-1"
            className="form-control"
            {...register("description_sub_title_1", { required: true })}
          />
          <ErrorsRequired errors={errors} field="description_sub_title_1" />
        </div>

        <div data-mdb-input-init="" className="form-outline mb-4">
          <ProductLabel
            name="Description Text 3"
            htmlFor="description-text-3"
            required={true}
          />
          <textarea
            className="form-control"
            id="description-text-3"
            rows={4}
            defaultValue={""}
            {...register("description_text_3", { required: true })}
          />
          <ErrorsRequired errors={errors} field="description_text_3" />
        </div>

        <div data-mdb-input-init="" className="form-outline mb-4">
          <ProductLabel
            name="Description Image 1"
            htmlFor="description-image-1"
            required={true}
          />
          <input
            type="text"
            id="description-image-1"
            className="form-control"
            {...register("description_image_1", { required: true })}
          />
          <ErrorsRequired errors={errors} field="description_image_1" />
        </div>

        <div data-mdb-input-init="" className="form-outline mb-4">
          <ProductLabel
            name="Description Text 4"
            htmlFor="description-text-4"
            required={true}
          />
          <textarea
            className="form-control"
            id="description-text-4"
            rows={4}
            defaultValue={""}
            {...register("description_text_4", { required: true })}
          />
          <ErrorsRequired errors={errors} field="description_text_4" />
        </div>

        <div data-mdb-input-init="" className="form-outline mb-4">
          <ProductLabel
            name="Description Subtitle 2"
            htmlFor="description-subtitle-2"
            required={false}
          />
          <input
            type="text"
            id="description-subtitle-2"
            className="form-control"
            {...register("description_sub_title_2")}
          />
        </div>

        <div data-mdb-input-init="" className="form-outline mb-4">
          <ProductLabel
            name="Description Text 5"
            htmlFor="description-text-5"
            required={false}
          />
          <textarea
            className="form-control"
            id="description-text-5"
            rows={4}
            defaultValue={""}
            {...register("description_text_5")}
          />
        </div>

        <div data-mdb-input-init="" className="form-outline mb-4">
          <ProductLabel
            name="Description Image 2"
            htmlFor="description-image-2"
            required={false}
          />
          <input
            type="text"
            id="description-image-2"
            className="form-control"
            {...register("description_image_2")}
          />
        </div>

        <div data-mdb-input-init="" className="form-outline mb-4">
          <ProductLabel
            name="Description Text 6"
            htmlFor="description-text-6"
            required={false}
          />
          <textarea
            className="form-control"
            id="description-text-6"
            rows={4}
            defaultValue={""}
            {...register("description_text_6")}
          />
        </div>
      </>
    </div>
  );
};

export default DetailInfoForm;
