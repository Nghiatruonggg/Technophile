// Import Images
import TechnophileLogo from "../../assets/common/images/Technophile Logo/Transparent V2/Logo LM V2.png";

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
      {/* Main Menu */}
      <div className="main-menu">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-md-12">
              <div className="wrap-menu">
                <div className="menu-mobile">
                  <div className="logo-menu-mobile">
                    <i className="fa-solid fa-bars" />
                  </div>
                </div>
                <div className="logo">
                  <a href="./index.html">
                    <img src={TechnophileLogo} alt="LogoImg" />
                  </a>
                </div>
                <div className="main-section">
                  <div className="top-menu-mobile">
                    <img src="" alt="LogoImg" />
                    <span>
                      <i className="fa-solid fa-xmark" />
                    </span>
                  </div>
                  <ul className="menu-list">
                    <li className="active">
                      <a href="./index.html">Home</a>
                    </li>
                    <li className="product-menu">
                      <a href="#">
                        Product <i className="fa-solid fa-chevron-down" />
                      </a>
                      <div className="sub-menu sub-menu-1 sub-menu-mobile">
                        <ul>
                          <li className="sub-item">
                            <a href="./mobile-categories.html">
                              <p>Mobile</p>
                            </a>
                          </li>
                          <li className="sub-item">
                            <a href="#">
                              <p>Desktop</p>
                            </a>
                          </li>
                          <li className="sub-item">
                            <a href="#">
                              <p>Laptop</p>
                            </a>
                          </li>
                          <li className="sub-item">
                            <a href="#">
                              <p>Monitors</p>
                            </a>
                          </li>
                          <li className="sub-item">
                            <a href="#">
                              <p>Networking</p>
                            </a>
                          </li>
                          <li className="sub-item">
                            <a href="#">
                              <p>Accesories</p>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a href="./about-us.html">About Us</a>
                    </li>
                    <li>
                      <a href="#">News</a>
                    </li>
                    <li>
                      <a href="./contact-us.html">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="user-logo">
                  <div className="wrap-user-logo">
                    <i className="fa-solid fa-magnifying-glass search-desktop" />
                    <i className="fa-solid fa-cart-shopping cart-ic">
                      <span>0</span>
                    </i>
                    <i className="fa-solid fa-user user-desktop" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12">
              <div className="search-mobile">
                <input type="text" placeholder="What ya looking?" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
