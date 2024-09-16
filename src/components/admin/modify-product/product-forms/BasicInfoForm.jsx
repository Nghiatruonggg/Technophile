import React, { useContext } from "react";
import { adminTabContext } from "../../../../contexts/Contexts";

const BasicInfoForm = ({register}) => {
  return (
    <div className="basic-info-form">
        <>
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" htmlFor="product-name">
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="product-name"
                    className="form-control"
                    {...register("name")}
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" htmlFor="product-price">
                    Product Price
                  </label>
                  <input
                    type="number"
                    id="product-price"
                    className="form-control"
                    {...register("price")}
                  />
                </div>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" htmlFor="category-1">
                    Phone Type
                  </label>
                  <input
                    type="text"
                    id="category-1"
                    className="form-control"
                    {...register("phone_type")}
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" htmlFor="category-2">
                    Price Range
                  </label>
                  <input
                    type="text"
                    id="category-2"
                    className="form-control"
                    {...register("price_range")}
                  />
                </div>
              </div>
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="main-image">
                Main Image URL
              </label>
              <input type="text" id="main-image" className="form-control" {...register("mainImage")} />
            </div>

            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" htmlFor="thumbnail-1">
                    Thumbnail 1 URL
                  </label>
                  <input
                    type="text"
                    id="thumbnail-1"
                    className="form-control"
                    {...register("thumbnail_1")}
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" htmlFor="thumbnail-2">
                    Thumbnail 2 URL
                  </label>
                  <input
                    type="text"
                    id="thumbnail-2"
                    className="form-control"
                    {...register("thumbnail_2")}
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" htmlFor="thumbnail-3">
                    Thumbnail 3 URL
                  </label>
                  <input
                    type="text"
                    id="thumbnail-3"
                    className="form-control"
                    {...register("thumbnail_3")}
                  />
                </div>
              </div>
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="rating-numbers">
                Rating Numbers
              </label>
              <input
                type="number"
                id="rating-numbers"
                className="form-control"
                {...register("rating_numbers")}
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="brief-info">
                Brief Information
              </label>
              <textarea
                className="form-control"
                id="brief-info"
                rows={4}
                defaultValue={""}
                {...register("product_brief_intro")}
              />
            </div>
        </>
    </div>
  );
};

export default BasicInfoForm;
