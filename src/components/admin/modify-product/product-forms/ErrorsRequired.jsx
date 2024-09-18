import React from "react";

const ErrorsRequired = ({ errors, field }) => {
  return (
    <>
      {errors[field] && (
        <span style={{ color: "red" }}>This field is required</span>
      )}
    </>
  );
};

export default ErrorsRequired;
