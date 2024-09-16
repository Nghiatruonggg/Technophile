import React, { useContext, useState } from "react";
import BasicInfoForm from "./product-forms/BasicInfoForm";
import DetailInfoForm from "./product-forms/DetailInfoForm";
import { adminTabContext } from "../../../contexts/Contexts";
import ProductSpecsForm from "./product-forms/ProductSpecsForm";
import { useForm } from "react-hook-form";
import { mobile_categories } from "../../../untils/variable";
import axios from "axios";

const AdminProductForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const tabFunction = useContext(adminTabContext);
  const { activeTab } = tabFunction;

  // Call React Hook Form
  const {
    register,
    handleSubmit,
    watch,
    formState: { error },
  } = useForm();

  const onSubmit = async (data) => {
    // Including all the data that users fill in (Needs to be registered first)
    console.log(data);

    // Create Data
    try {
      setIsLoading(true);
      await axios.post(mobile_categories, data);

      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
        {activeTab == "basicInfo" && <BasicInfoForm register={register} />}
        {activeTab == "detailInfo" && <DetailInfoForm register={register} />}
        {activeTab == "productSpecs" && (
          <ProductSpecsForm register={register} />
        )}

        <button
          disabled={isLoading ? true : false}
          type="submit"
          className="btn btn-primary btn-block mb-4"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AdminProductForm;
