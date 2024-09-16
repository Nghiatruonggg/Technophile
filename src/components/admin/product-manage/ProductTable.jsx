import React from "react";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import { mobile_categories } from "../../../untils/variable";
import axios from "axios";
import { Bounce, toast } from "react-toastify";

const ProductTable = ({ data, isLoading, removeProduct }) => {
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${mobile_categories}/${id}`);

      removeProduct(id);

      toast.success("Deleted Success!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce
      });
    } catch (error) {
      console.error(error);
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
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <p>Data is Loading</p>
            ) : (
              data.map((product) => {
                return (
                  <tr key={product.id}>
                    <th scope="row">{product.id}</th>
                    <td>{product.name}</td>
                    <td>In Stock</td>
                    <td>{product.price}</td>
                    <td>
                      <EditButton />
                    </td>
                    <td onClick={() => deleteProduct(product.id)}>
                      <DeleteButton />
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
