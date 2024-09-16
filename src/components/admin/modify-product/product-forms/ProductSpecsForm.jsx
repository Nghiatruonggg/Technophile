import React from "react";

const ProductSpecsForm = ({ register }) => {
  return (
    <div className="product-specs-form">
      <>
        <div className="row mb-4">
          <div className="col">
            <div data-mdb-input-init="" className="form-outline">
              <label className="form-label" htmlFor="monitor-size">
                Monitor Size
              </label>
              <input
                type="text"
                id="monitor-size"
                className="form-control"
                {...register("monitor_size")}
              />
            </div>
          </div>
          <div className="col">
            <div data-mdb-input-init="" className="form-outline">
              <label className="form-label" htmlFor="display-tech">
                Display Technology
              </label>
              <input
                type="text"
                id="display-tech"
                className="form-control"
                {...register("display_technology")}
              />
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col">
            <div data-mdb-input-init="" className="form-outline">
              <label className="form-label" htmlFor="back-camera">
                Back Camera
              </label>
              <input
                type="text"
                id="back-camera"
                className="form-control"
                {...register("back_camera")}
              />
            </div>
          </div>
          <div className="col">
            <div data-mdb-input-init="" className="form-outline">
              <label className="form-label" htmlFor="front-camera">
                Front Camera
              </label>
              <input
                type="text"
                id="front-camera"
                className="form-control"
                {...register("front_camera")}
              />
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col">
            <div data-mdb-input-init="" className="form-outline">
              <label className="form-label" htmlFor="ram-size">
                Ram size
              </label>
              <input
                type="text"
                id="ram-size"
                className="form-control"
                {...register("ram_size")}
              />
            </div>
          </div>
          <div className="col">
            <div data-mdb-input-init="" className="form-outline">
              <label className="form-label" htmlFor="memory-capacity">
                Memory Capacity
              </label>
              <input
                type="text"
                id="memory-capacity"
                className="form-control"
                {...register("memory_capacity")}
              />
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col">
            <div data-mdb-input-init="" className="form-outline">
              <label className="form-label" htmlFor="simcard-slots">
                Simcard Slots
              </label>
              <input
                type="text"
                id="simcard-slots"
                className="form-control"
                {...register("simcard_number")}
              />
            </div>
          </div>
          <div className="col">
            <div data-mdb-input-init="" className="form-outline">
              <label className="form-label" htmlFor="display-tech">
                Operating System
              </label>
              <input
                type="text"
                id="display-tech"
                className="form-control"
                {...register("operating_system")}
              />
            </div>
          </div>
          <div className="col">
            <div data-mdb-input-init="" className="form-outline">
              <label className="form-label" htmlFor="aspect-ratio">
                Aspect Ratio
              </label>
              <input
                type="text"
                id="aspect-ratio"
                className="form-control"
                {...register("aspect_ratio")}
              />
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col">
            <div data-mdb-input-init="" className="form-outline">
              <label className="form-label" htmlFor="chipset-cpu">
                Chipset CPU
              </label>
              <input
                type="text"
                id="chipset-cpu"
                className="form-control"
                {...register("chipset_cpu")}
              />
            </div>
          </div>
          <div className="col">
            <div data-mdb-input-init="" className="form-outline">
              <label className="form-label" htmlFor="battery-size">
                Battery Size
              </label>
              <input
                type="text"
                id="battery-size"
                className="form-control"
                {...register("battery_size")}
              />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default ProductSpecsForm;
