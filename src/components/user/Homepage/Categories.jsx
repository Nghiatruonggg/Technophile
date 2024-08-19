import React from "react";

// Import images
import mobileLogo from "../../../assets/common/images/Category Section/Mobile Logo.webp";
import desktopLogo from "../../../assets/common/images/Category Section/Computers Logo.webp";
import laptopLogo from "../../../assets/common/images/Category Section/Test Laptop Logo.png";
import accesoriesLogo from "../../../assets/common/images/Category Section/Accesories Logo.webp";
import monitorLogo from "../../../assets/common/images/Category Section/Monitor .webp";
import networkingLogo from "../../../assets/common/images/Category Section/Networking.webp";

const Categories = () => {
  const categoryLogo = [
    {
      id: 1,
      imageSrc: mobileLogo,
      name: "Mobile",
      redirectPath: "/mobile-categories",
    },
    {
      id: 2,
      imageSrc: desktopLogo,
      name: "Desktop",
      redirectPath: "/desktop-categories",
    },
    {
      id: 3,
      imageSrc: laptopLogo,
      name: "Laptop",
      redirectPath: "/laptop-categories",
    },
    {
      id: 4,
      imageSrc: accesoriesLogo,
      name: "Accesories",
      redirectPath: "/accesories-categories",
    },
    {
      id: 5,
      imageSrc: monitorLogo,
      name: "Monitor",
      redirectPath: "/monitor-categories",
    },
    {
      id: 6,
      imageSrc: networkingLogo,
      name: "Networking",
      redirectPath: "/networking-categories",
    },
  ];

  return (
    <>
      {/* Categories */}
      <div className="categories-section">
        <div className="container">
          {/* Categories Title */}
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12">
              <div className="sub-categories-title sub-title">
                <p>
                  <i className="fa-solid fa-tag" />
                  Categories
                </p>
                <h1>Browse by Category</h1>
              </div>
            </div>
          </div>
          {/* Categories Main */}
          <div className="row" id="wrap-categories">
            {categoryLogo.map((object) => {
              return (
                  <div key={object.id} className="col-6 col-sm-4 col-md-2">
                    <a href="./mobile-categories.html">
                      <div className="category-product">
                        <div className="category-graphic">
                          <img src={object.imageSrc} alt="MobileLogo" />
                        </div>
                        <div className="category-product-title">
                          <p>{object.name}</p>
                        </div>
                      </div>
                    </a>
                  </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
