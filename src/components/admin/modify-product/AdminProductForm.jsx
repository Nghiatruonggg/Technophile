import React, { useContext, useState } from "react";
import BasicInfoForm from "./product-forms/BasicInfoForm";
import DetailInfoForm from "./product-forms/DetailInfoForm";
import { adminTabContext } from "../../../contexts/Contexts";
import ProductSpecsForm from "./product-forms/ProductSpecsForm";
import { useForm } from "react-hook-form";
import { mobile_categories } from "../../../untils/variable";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import { formDefaultValue } from "../../../structures/FormDefaultValue";
import { useNavigate } from "react-router-dom";

const AdminProductForm = ({ oldData, URL_DETAIL }) => {
  const [isLoading, setIsLoading] = useState(false);
  const tabFunction = useContext(adminTabContext);
  const { activeTab } = tabFunction;
  const redirect = useNavigate()

  // Call React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formDefaultValue(oldData),
  });

  const onSubmit = async (data) => {
    // Create Data
    try {
      setIsLoading(true);

      if (!oldData) {
        await axios.post(mobile_categories, data);

        setIsLoading(false);

        toast.success("Added Success!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }

      if (oldData) {
        await axios.patch(URL_DETAIL, data);

        setIsLoading(false);

        toast.success("Fixed Success!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }

      setTimeout(() => {
        redirect("/dashboard/products");
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
        {activeTab == "basicInfo" && (
          <BasicInfoForm register={register} errors={errors} />
        )}
        {activeTab == "detailInfo" && (
          <DetailInfoForm register={register} errors={errors} />
        )}
        {activeTab == "productSpecs" && (
          <ProductSpecsForm register={register} errors={errors} />
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
