import React, { useEffect, useState } from "react";

const useSearchClicked = (icon) => {
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const handleSearchClicked = () => {
    if (isSearchClicked == false) {
      setIsSearchClicked(true);
      document.body.classList.add("darken");
    } else {
      setIsSearchClicked(false);
      document.body.classList.remove("darken");
    }
  };

  const handleClickedOutside = (e) => {
    if (!icon.current.contains(e.target)) {
      setIsSearchClicked(false);
      document.body.classList.remove("darken");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickedOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickedOutside);
    };
  }, []);

  return {
    isSearchClicked,
    setIsSearchClicked,
    handleSearchClicked,
  };
};

export default useSearchClicked;
