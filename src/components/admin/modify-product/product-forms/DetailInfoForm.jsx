import React, { useContext } from "react";
import { adminTabContext } from "../../../../contexts/Contexts";

const DetailInfoForm = ({ register }) => {
  return (
    <div className="detail-info-form">
      <>
        <div className="row mb-4">
          <div className="col">
            <div data-mdb-input-init="" className="form-outline">
              <label className="form-label" htmlFor="description-title-1">
                Description Title 1
              </label>
              <input
                type="text"
                id="description-title-1"
                className="form-control"
                {...register("description_title_1")}
              />
            </div>
          </div>
        </div>

        <div data-mdb-input-init="" className="form-outline mb-4">
          <label className="form-label" htmlFor="description-text-1">
            Description Text 1
          </label>
          <textarea
            className="form-control"
            id="description-text-1"
            rows={4}
            defaultValue={""}
            {...register("description_text_1")}
          />
        </div>

        <div data-mdb-input-init="" className="form-outline mb-4">
          <label className="form-label" htmlFor="description-title-2">
            Description Title 2
          </label>
          <input
            type="text"
            id="description-title-2"
            className="form-control"
            {...register("description_title_2")}
          />
        </div>

        <div data-mdb-input-init="" className="form-outline mb-4">
          <label className="form-label" htmlFor="description-text-2">
            Description Text 2
          </label>
          <textarea
            className="form-control"
            id="description-text-2"
            rows={4}
            defaultValue={""}
            {...register("description_text_2")}
          />
        </div>

        <div data-mdb-input-init="" className="form-outline mb-4">
          <label className="form-label" htmlFor="description-subtitle-1">
            Description Subtitle 1
          </label>
          <input
            type="text"
            id="description-subtitle-1"
            className="form-control"
            {...register("description_sub_title_1")}
          />
        </div>

        <div data-mdb-input-init="" className="form-outline mb-4">
          <label className="form-label" htmlFor="description-text-3">
            Description Text 3
          </label>
          <textarea
            className="form-control"
            id="description-text-3"
            rows={4}
            defaultValue={""}
            {...register("description_text_3")}
          />
        </div>

        <div data-mdb-input-init="" className="form-outline mb-4">
          <label className="form-label" htmlFor="description-image-1">
            Description Image 1
          </label>
          <input
            type="text"
            id="description-image-1"
            className="form-control"
            {...register("description_image_1")}
          />
        </div>

        <div data-mdb-input-init="" className="form-outline mb-4">
          <label className="form-label" htmlFor="description-text-4">
            Description Text 4
          </label>
          <textarea
            className="form-control"
            id="description-text-4"
            rows={4}
            defaultValue={""}
            {...register("description_text_4")}
          />
        </div>

        <div data-mdb-input-init="" className="form-outline mb-4">
          <label className="form-label" htmlFor="description-subtitle-2">
            Description Subtitle 2
          </label>
          <input
            type="text"
            id="description-subtitle-2"
            className="form-control"
            {...register("description_sub_title_2")}
          />
        </div>

        <div data-mdb-input-init="" className="form-outline mb-4">
          <label className="form-label" htmlFor="description-text-5">
            Description Text 5
          </label>
          <textarea
            className="form-control"
            id="description-text-5"
            rows={4}
            defaultValue={""}
            {...register("description_text_5")}
          />
        </div>

        <div data-mdb-input-init="" className="form-outline mb-4">
          <label className="form-label" htmlFor="description-image-2">
            Description Image 2
          </label>
          <input
            type="text"
            id="description-image-2"
            className="form-control"
            {...register("description_image_2")}
          />
        </div>

        <div data-mdb-input-init="" className="form-outline mb-4">
          <label className="form-label" htmlFor="description-text-6">
            Description Text 6
          </label>
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
