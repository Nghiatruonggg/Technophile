import React, { useEffect, useState } from "react";

const useCartClicked = (icon) => {
  const [isCartClicked, setIsCartClicked] = useState(false);

  const handleCartClicked = () => {
    if (isCartClicked == false) {
      setIsCartClicked(true);
      document.body.classList.add("darken-2");
    } else {
      setIsCartClicked(false);
      document.body.classList.remove("darken-2");
    }
  };

  const handleClickedOutside = (e) => {
    if (!icon.current.contains(e.target)) {
      setIsCartClicked(false);
      document.body.classList.remove("darken-2");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickedOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickedOutside);
    };
  }, []);

  return {
    isCartClicked,
    setIsCartClicked,
    handleCartClicked,
  };
};

export default useCartClicked;
