import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../../../reducers/authReducerSlice";
import styles from "./DashboardNav.module.css"
import { Col } from "react-bootstrap";

const DashboardNav = () => {
  const location = useLocation();
  const redirect = useNavigate();
  const dispatch = useDispatch()

  const changeActive = (path) => {
   return (location.pathname == path) ? `${styles.active}` : ""
  };

  const handleLogout = () => {
    dispatch(logout())
    redirect("/login")
  }

  return (
    <>
      <Col xs={12} sm={4} md={3}>
        <div className={styles.dashboardNav}>
          <ul className={styles.navList}>
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
              <Link to="/dashboard/orders" className={changeActive("/dashboard/orders")}>
                <i className={`fa-solid fa-shop ${styles.faShopCustom}`} />
                Orders
              </Link>
            </li>
            <li>
              <Link>
                <i className={`fa-solid fa-gears ${styles.faGearsCustom}`} />
                Settings
              </Link>
            </li>
            <li>
              <div className={styles.logOut} onClick={handleLogout}>
                <i className="fa-solid fa-right-from-bracket" />
                Logout
              </div>
            </li>
          </ul>
        </div>
      </Col>
    </>
  );
};

export default DashboardNav;
