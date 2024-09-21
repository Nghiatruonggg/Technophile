import React from "react";
import ProductLabel from "./ProductLabel";
import ErrorsRequired from "./ErrorsRequired";

const ProductSpecsForm = ({register, errors}) => {
  return (
    <div className="product-specs-form">
      <>
        <div className="row mb-4">
          <div className="col">
            <div data-mdb-input-init="" className="form-outline">
              <ProductLabel
                name="Monitor Size"
                htmlFor="monitor-size"
                required={true}
              />
              <input
                type="text"
                id="monitor-size"
                className="form-control"
                {...register("monitor_size", { required: true })}
              />
              <ErrorsRequired errors={errors} field="monitor_size" />
            </div>
          </div>
          <div className="col">
            <div data-mdb-input-init="" className="form-outline">
              <ProductLabel
                name="Display Technology"
                htmlFor="display-tech"
                required={true}
              />
              <input
                type="text"
                id="display-tech"
                className="form-control"
                {...register("display_technology", { required: true })}
              />
              <ErrorsRequired errors={errors} field="display_technology" />
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col">
            <div data-mdb-input-init="" className="form-outline">
              <ProductLabel
                name="Back Camera"
                htmlFor="back-camera"
                required={true}
              />
              <input
                type="text"
                id="back-camera"
                className="form-control"
                {...register("back_camera", { required: true })}
              />
              <ErrorsRequired errors={errors} field="back_camera" />
            </div>
          </div>
          <div className="col">
            <div data-mdb-input-init="" className="form-outline">
              <ProductLabel
                name="Front Camera"
                htmlFor="front-camera"
                required={true}
              />
              <input
                type="text"
                id="front-camera"
                className="form-control"
                {...register("front_camera", { required: true })}
              />
              <ErrorsRequired errors={errors} field="front_camera" />
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col">
            <div data-mdb-input-init="" className="form-outline">
              <ProductLabel
                name="Ram Size"
                htmlFor="ram-size"
                required={true}
              />
              <input
                type="text"
                id="ram-size"
                className="form-control"
                {...register("ram_size", { required: true })}
              />
              <ErrorsRequired errors={errors} field="ram_size" />
            </div>
          </div>
          <div className="col">
            <div data-mdb-input-init="" className="form-outline">
              <ProductLabel
                name="Memory Capacity"
                htmlFor="memory-capacity"
                required={true}
              />
              <input
                type="text"
                id="memory-capacity"
                className="form-control"
                {...register("memory_capacity", { required: true })}
              />
              <ErrorsRequired errors={errors} field="memory_capacity" />
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col">
            <div data-mdb-input-init="" className="form-outline">
              <ProductLabel
                name="Simcard Slots"
                htmlFor="simcard-slots"
                required={true}
              />
              <input
                type="text"
                id="simcard-slots"
                className="form-control"
                {...register("simcard_number", { required: true })}
              />
              <ErrorsRequired errors={errors} field="simcard_number" />
            </div>
          </div>
          <div className="col">
            <div data-mdb-input-init="" className="form-outline">
              <ProductLabel
                name="Operating System"
                htmlFor="operating-system"
                required={true}
              />
              <input
                type="text"
                id="operating-system"
                className="form-control"
                {...register("operating_system", { required: true })}
              />
              <ErrorsRequired errors={errors} field="operating_system" />
            </div>
          </div>
          <div className="col">
            <div data-mdb-input-init="" className="form-outline">
              <ProductLabel
                name="Aspect Ratio"
                htmlFor="aspect-ratio"
                required={true}
              />
              <input
                type="text"
                id="aspect-ratio"
                className="form-control"
                {...register("aspect_ratio", { required: true })}
              />
              <ErrorsRequired errors={errors} field="aspect_ratio" />
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col">
            <div data-mdb-input-init="" className="form-outline">
              <ProductLabel
                name="Chipset CPU"
                htmlFor="chipset-cpu"
                required={true}
              />
              <input
                type="text"
                id="chipset-cpu"
                className="form-control"
                {...register("chipset_cpu", { required: true })}
              />
              <ErrorsRequired errors={errors} field="chipset_cpu" />
            </div>
          </div>
          <div className="col">
            <div data-mdb-input-init="" className="form-outline">
              <ProductLabel
                name="Battery Size"
                htmlFor="battery-size"
                required={true}
              />
              <input
                type="text"
                id="battery-size"
                className="form-control"
                {...register("battery_size", { required: true })}
              />
              <ErrorsRequired errors={errors} field="battery_size" />
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default ProductSpecsForm;
