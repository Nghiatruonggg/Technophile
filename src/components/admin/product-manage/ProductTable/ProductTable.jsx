import React from "react";
import EditButton from "../EditButton/EditButton";
import DeleteButton from "./DeleteButton";
import { useDispatch, useSelector } from "react-redux";
import {
  removeProduct,
  removeProductRender,
} from "../../../../reducers/productCRUDSlice";
import ToastPopup from "../../../popups/ToastPopup";
import { Link } from "react-router-dom";
import styles from "./ProductTable.module.css";
import { Table } from "react-bootstrap";

const ProductTable = ({ isLoading }) => {
  const dispatch = useDispatch();
  const productCRUD = useSelector((state) => state.productCRUD);

  const { productAdmin, error } = productCRUD;

  const deleteProduct = async (id) => {
    try {
      const result = await dispatch(removeProduct(id));

      if (removeProduct.fulfilled.match(result)) {
        dispatch(removeProductRender(id));
        ToastPopup({ message: "Delete Success!", type: "success" });
      }

      if (removeProduct.rejected.match(result)) {
        let errorMessage = error.data?.error || "Try Again Later";
        ToastPopup({ message: `${errorMessage}`, type: "error" });
      }
    } catch (error) {
      ToastPopup({ message: `${error}`, type: "error" });
    }
  };

  return (
    <>
      <Table striped hover responsive className={styles.tableCustom}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" width="40%">
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
                    <Link to={`/dashboard/products/edit/${[product.id]}`}>
                      <EditButton styles={styles} />
                    </Link>
                  </td>
                  <td>
                    <DeleteButton
                      deleteProduct={deleteProduct}
                      id={product.id}
                      styles={styles}
                    />
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </Table>
    </>
  );
};

export default ProductTable;
