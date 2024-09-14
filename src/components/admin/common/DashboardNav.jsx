import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../../reducers/authReducerSlice";

const DashboardNav = () => {
  const location = useLocation();
  const redirect = useNavigate();
  const dispatch = useDispatch()

  const authFunction = useSelector(state => state.auth)
  console.log(authFunction.user_info);

  const changeActive = (path) => {
   return (location.pathname == path) ? "active" : ""
  };

  const handleLogout = () => {
    dispatch(logout())
    redirect("/login")
  }

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
              <div onClick={handleLogout}>
                <i className="fa-solid fa-right-from-bracket" />
                Logout
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardNav;
