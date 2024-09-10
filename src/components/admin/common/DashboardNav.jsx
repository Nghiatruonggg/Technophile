import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const DashboardNav = () => {
  const location = useLocation();

  const changeActive = (path) => {
   return (location.pathname == path) ? "active" : ""
  };

  return (
    <>
      <div className="col-12 col-sm-4 col-md-3">
        <div className="dashboard-nav">
          <ul className="nav-list">
            <li>
              <Link
                to="/dashboard"
                className={changeActive("/dashboard")}
              >
                <i className="fa-solid fa-grip" />
                Overview
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/products"
                className={changeActive("/dashboard/products")}
              >
                <i className="fa-solid fa-bag-shopping" />
                Products
              </Link>
            </li>
            <li>
              <Link>
                <i className="fa-solid fa-shop" />
                Orders
              </Link>
            </li>
            <li>
              <Link>
                <i className="fa-solid fa-gears" />
                Settings
              </Link>
            </li>
            <li>
              <Link>
                <i className="fa-solid fa-right-from-bracket" />
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardNav;
