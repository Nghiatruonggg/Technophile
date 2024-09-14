import React from "react";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

const ProductTable = ({ data, isLoading }) => {
  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col" width="35%">Product</th>
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
                    <td>
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
