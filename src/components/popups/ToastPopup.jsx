import React from "react";
import { Bounce, toast } from "react-toastify";

const ToastPopup = ({ message, type }) => {
  const config = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  };

  if (type == "success") {
    return toast.success(message, config);
  } else if (type == "error") {
    return toast.error(message, config);
  }
  return null;
};

export default ToastPopup;
