import BasicInfoForm from "./form-components/BasicInfoForm";
import DetailInfoForm from "./form-components/DetailInfoForm";
import { useForm } from "react-hook-form";
import ProductSpecsForm from "./form-components/ProductSpecsForm";
import { useDispatch, useSelector } from "react-redux";
import { addNewProduct, editProduct } from "../../../reducers/productCRUDSlice";
import ToastPopup from "../../popups/ToastPopup";
import { useNavigate } from "react-router-dom";
import { productFormDefaultValue } from "../../../structures/productFormDefaultValue";
import { useEffect } from "react";

const AdminProductForm = ({ activeTab, oldData, isLoadingOldData }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: productFormDefaultValue(),
  });

  const dispatch = useDispatch();
  const redirect = useNavigate();
  const productCRUD = useSelector((state) => state.productCRUD);

  const { error, isLoading } = productCRUD;

  useEffect(() => {
    // Solution if oldData is slow, reinitialize default values using reset()
    if (oldData) {
      reset(productFormDefaultValue(oldData));
    }
  }, [oldData]);

  const onSubmit = async (data) => {
    try {
      if (!oldData) {
        const result = await dispatch(addNewProduct(data));

        if (addNewProduct.fulfilled.match(result)) {
          ToastPopup({ message: "Add Success!", type: "success" });
        }

        if (addNewProduct.rejected.match(result)) {
          let errorMessage = error.data?.error || "Try Again Later";
          ToastPopup({ message: `${errorMessage}`, type: "error" });
        }
      }

      if (oldData) {
        let editData = { id: oldData.id, data };

        const result = await dispatch(editProduct(editData));

        if (editProduct.fulfilled.match(result)) {
          ToastPopup({ message: "Edit Success!", type: "success" });
        }

        if (editProduct.rejected.match(result)) {
          let errorMessage = error.data?.error || "Try Again Later";
          ToastPopup({ message: `${errorMessage}`, type: "error" });
        }
      }

      setTimeout(() => {
        redirect("/dashboard/products");
      }, 2000);
    } catch (error) {
      ToastPopup({ message: error.message, type: "error" });
    }
  };

  return (
    <>
      {isLoadingOldData ? (
        <p>Data is Loading</p>
      ) : (
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
      )}
    </>
  );
};

export default AdminProductForm;
