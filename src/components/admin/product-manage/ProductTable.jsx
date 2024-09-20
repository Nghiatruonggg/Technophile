import React from "react";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import { useDispatch, useSelector } from "react-redux";
import {
  removeProduct,
  removeProductRender,
} from "../../../reducers/productCRUDSlice";
import { Bounce, toast } from "react-toastify";
import ToastSuccessPopup from "../../popups/ToastPopup";
import ToastPopup from "../../popups/ToastPopup";

const ProductTable = ({ isLoading }) => {
  const dispatch = useDispatch();
  const productCRUD = useSelector((state) => state.productCRUD);

  const {productAdmin, error} = productCRUD
  

  const deleteProduct = async (id) => {
    try {
      const result = await dispatch(removeProduct(id));

      if (removeProduct.fulfilled.match(result)) {
        dispatch(removeProductRender(id));
        
        ToastPopup({message: "Delete Success!", type: "success"})
      }

      if (removeProduct.rejected.match(result)) {
        let errorMessage = error.data?.error || "Try Again Later";
        ToastPopup({message: `${errorMessage}`, type: "error"})
      }
    } catch (error) {
      ToastPopup({message: `${error}`, type: "error"})
    }
  };

  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col" width="35%">
                Product
              </th>
              <th scope="col">Status</th>
              <th scope="col">Price</th>
              <th scope="col">Edit</th>
              <th colSpan="1" scope="col">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td>Data is Loading</td>
              </tr>
            ) : (
              productAdmin.map((product) => {
                return (
                  <tr key={product.id}>
                    <th scope="row">{product.id}</th>
                    <td>{product.name}</td>
                    <td>In Stock</td>
                    <td>${product.price}</td>
                    <td>
                      <EditButton />
                    </td>
                    <td>
                      <DeleteButton
                        deleteProduct={deleteProduct}
                        id={product.id}
                      />
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductTable;
