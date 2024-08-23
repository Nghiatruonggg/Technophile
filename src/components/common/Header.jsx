// Import Images
import { Link, NavLink } from "react-router-dom";
import HeaderNav from "./Header/HeaderNav";

const Header = () => {
  return (
    <>
      {/* Header Top */}
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12">
              <p>Welcome to the world's most friendliest store!</p>
            </div>
          </div>
        </div>
      </div>
      <HeaderNav/>
    </>
  );
};

export default Header;
