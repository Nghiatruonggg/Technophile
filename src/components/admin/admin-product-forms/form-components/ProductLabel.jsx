import React from "react";

const ProductLabel = ({ name, htmlFor, required }) => {
  return (
    <label style={{fontWeight: "600"}} className="form-label" htmlFor={htmlFor}>
      {name}
      {required ? <span style={{ color: "red" }}> *</span> : ""}
    </label>
  );
};

export default ProductLabel;
