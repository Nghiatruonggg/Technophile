import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../../../reducers/authReducerSlice";
import styles from "./DashboardNav.module.css"
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faGears, faGrip, faRightFromBracket, faShop } from "@fortawesome/free-solid-svg-icons";

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
                <FontAwesomeIcon className={styles.navIcon} icon={faGrip} />
                Overview
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/products"
                className={changeActive("/dashboard/products")}
              >
                <FontAwesomeIcon className={styles.navIcon} icon={faBagShopping} />
                Products
              </Link>
            </li>
            <li>
              <Link to="/dashboard/orders" className={changeActive("/dashboard/orders")}>
                <FontAwesomeIcon icon={faShop} className={styles.faShopCustom} />
                Orders
              </Link>
            </li>
            <li>
              <Link>
                <FontAwesomeIcon icon={faGears} className={styles.faGearsCustom} />
                Settings
              </Link>
            </li>
            <li>
              <div className={styles.logOut} onClick={handleLogout}>
                <FontAwesomeIcon className={styles.navIcon} icon={faRightFromBracket} />
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
