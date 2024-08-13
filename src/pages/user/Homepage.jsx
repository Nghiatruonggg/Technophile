import React from 'react'


import Header from '../../components/common/Header'
import Banner from '../../components/user/Banner'
import Sponsors from '../../components/user/Sponsors'

const Homepage = () => {
  return (
    <>
  <Header/>
  <Banner/>
  <Sponsors/>
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
        <div className="col-6 col-sm-4 col-md-2">
          <a href="./mobile-categories.html">
            <div className="category-product">
              <div className="category-graphic">
                <img
                  src="./assets/images/Category Section/Mobile Logo.webp"
                  alt="MobileLogo"
                />
              </div>
              <div className="category-product-title">
                <p>Mobile</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-6 col-sm-4 col-md-2">
          <a href="#">
            <div className="category-product">
              <div className="category-graphic">
                <img
                  src="./assets/images/Category Section/Computers Logo.webp"
                  alt="ComputerLogo"
                />
              </div>
              <div className="category-product-title">
                <p>Desktop</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-6 col-sm-4 col-md-2">
          <a href="#">
            <div className="category-product">
              <div className="category-graphic">
                <img
                  src="./assets/images/Category Section/Test Laptop Logo.png"
                  alt="LaptopLogo"
                />
              </div>
              <div className="category-product-title">
                <p>Laptop</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-6 col-sm-4 col-md-2">
          <a href="#">
            <div className="category-product">
              <div className="category-graphic">
                <img
                  src="./assets/images/Category Section/Accesories Logo.webp"
                  alt="AccesoriesLogo"
                />
              </div>
              <div className="category-product-title">
                <p>Accesories</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-6 col-sm-4 col-md-2">
          <a href="#">
            <div className="category-product">
              <div className="category-graphic">
                <img
                  src="./assets/images/Category Section/Monitor .webp"
                  alt="MonitorLogo"
                />
              </div>
              <div className="category-product-title">
                <p>Monitors</p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-6 col-sm-4 col-md-2">
          <a href="#">
            <div className="category-product">
              <div className="category-graphic">
                <img
                  src="./assets/images/Category Section/Networking.webp"
                  alt="NetworkingLogo"
                />
              </div>
              <div className="category-product-title">
                <p>Networking</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Preorder */}
  <div className="preorder-section">
    <div className="container">
      <div className="row" id="wrap-preorder">
        <div className="col-12 col-sm-12 col-md-6">
          <div className="preorder-text">
            <div className="preorder-sub-title ">
              <i className="fa-solid fa-bookmark" />
              <p>Hot Preorder</p>
            </div>
            <h1>
              Enhance your <br /> Gaming Experience
            </h1>
            <div className="preorder-timer">
              <span className="timer" id="hour">
                00
              </span>
              <span className="timer" id="minute">
                00
              </span>
              <span className="timer" id="second">
                00
              </span>
            </div>
            <button className="preorder-button">Check Now!</button>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 wrap-preorder-image">
          <div className="preorder-image">
            <img
              src="./assets/images/Preorder image/Preorder Keyboard.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Products Section */}
  <div className="product-section">
    <div className="container">
      {/* Product Title */}
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="sub-product-title sub-title">
            <p>
              <i className="fa-solid fa-fire-flame-curved" />
              Our Products
            </p>
            <h1>Explore Our Products</h1>
          </div>
        </div>
      </div>
      {/* Product Main */}
      <div className="product-main">
        <div className="owl-two owl-carousel owl-theme" id="wrap-product-main">
          {/* <div class="item">
                  <div class="product-item">
                      <a href="#">
                          <div class="product-image">
                              <img src="./assets/images/Product Imagess/Iphone 15 BlueBlack.webp" alt="Iphone 15">
                          </div>
                          <div class="product-text">
                              <div class="product-name">
                                  <p>Iphone 15 Pro</p>
                              </div>
                              <div class="product-price">
                                  <p>200$</p>
                              </div>
                          </div>
                      </a>

                  </div>

              </div> */}
        </div>
      </div>
    </div>
  </div>
  {/* User Review */}
  <div className="user-review">
    {/* User Review Title */}
    <div className="container">
      <div className="row" id="user-review-title">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="sub-user-review-title sub-title">
            <p>
              <i className="fa-solid fa-users" />
              Community
            </p>
            <h1>User Review</h1>
          </div>
        </div>
      </div>
      {/* User Review Main */}
      <div className="wrap-main-review">
        <div className="user-review-main">
          <div className="owl-three owl-carousel owl-theme">
            <div className="item">
              <div className="wrap-user-review">
                <div className="wrap-review-image">
                  <img
                    src="./assets/images/Faces for Users Reviews/uifaces-popular-image.jpeg"
                    alt="User1"
                  />
                  <div className="user-review-name">
                    <p>
                      <b>James Anderson</b>
                    </p>
                    <p>CEO of James Cosmestics</p>
                  </div>
                </div>
                <div className="wrap-review-text">
                  <p>
                    I recently purchased a new laptop from Technophile, and the
                    experience was fantastic. The website was user-friendly,
                    with detailed product descriptions and plenty of customer
                    reviews to help make an informed decision.
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="wrap-user-review">
                <div className="wrap-review-image">
                  <img
                    src="./assets/images/Faces for Users Reviews/uifaces-popular-image.jpeg"
                    alt="User1"
                  />
                  <div className="user-review-name">
                    <p>
                      <b>James Anderson</b>
                    </p>
                    <p>CEO of James Cosmestics</p>
                  </div>
                </div>
                <div className="wrap-review-text">
                  <p>
                    I recently purchased a new laptop from Technophile, and the
                    experience was fantastic. The website was user-friendly,
                    with detailed product descriptions and plenty of customer
                    reviews to help make an informed decision.
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="wrap-user-review">
                <div className="wrap-review-image">
                  <img
                    src="./assets/images/Faces for Users Reviews/uifaces-popular-image.jpeg"
                    alt="User1"
                  />
                  <div className="user-review-name">
                    <p>
                      <b>James Anderson</b>
                    </p>
                    <p>CEO of James Cosmestics</p>
                  </div>
                </div>
                <div className="wrap-review-text">
                  <p>
                    I recently purchased a new laptop from Technophile, and the
                    experience was fantastic. The website was user-friendly,
                    with detailed product descriptions and plenty of customer
                    reviews to help make an informed decision.
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="wrap-user-review">
                <div className="wrap-review-image">
                  <img
                    src="./assets/images/Faces for Users Reviews/uifaces-popular-image.jpeg"
                    alt="User1"
                  />
                  <div className="user-review-name">
                    <p>
                      <b>James Anderson</b>
                    </p>
                    <p>CEO of James Cosmestics</p>
                  </div>
                </div>
                <div className="wrap-review-text">
                  <p>
                    I recently purchased a new laptop from Technophile, and the
                    experience was fantastic. The website was user-friendly,
                    with detailed product descriptions and plenty of customer
                    reviews to help make an informed decision.
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="wrap-user-review">
                <div className="wrap-review-image">
                  <img
                    src="./assets/images/Faces for Users Reviews/uifaces-popular-image.jpeg"
                    alt="User1"
                  />
                  <div className="user-review-name">
                    <p>
                      <b>James Anderson</b>
                    </p>
                    <p>CEO of James Cosmestics</p>
                  </div>
                </div>
                <div className="wrap-review-text">
                  <p>
                    I recently purchased a new laptop from Technophile, and the
                    experience was fantastic. The website was user-friendly,
                    with detailed product descriptions and plenty of customer
                    reviews to help make an informed decision.
                  </p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="wrap-user-review">
                <div className="wrap-review-image">
                  <img
                    src="./assets/images/Faces for Users Reviews/uifaces-popular-image.jpeg"
                    alt="User1"
                  />
                  <div className="user-review-name">
                    <p>
                      <b>James Anderson</b>
                    </p>
                    <p>CEO of James Cosmestics</p>
                  </div>
                </div>
                <div className="wrap-review-text">
                  <p>
                    I recently purchased a new laptop from Technophile, and the
                    experience was fantastic. The website was user-friendly,
                    with detailed product descriptions and plenty of customer
                    reviews to help make an informed decision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Newsletter Section */}
  <div className="newsletter-section">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="newsletter-bg">
            <img
              src="./assets/images/Newsletter section/Adjusted bgimg.png"
              alt="Newsletter-img"
            />
            <div className="newsletter-text">
              <div className="sub-newsletter-title sub-title">
                <p>
                  <i className="fa-regular fa-envelope" />
                  Newsletter
                </p>
                <h2>Get Weekly Update</h2>
                <div className="newsletter-input">
                  <input type="text" placeholder="example@gmail.com" />
                  <button type="submit">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer */}
  <div className="footer">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-4">
          <div className="wrap-footer">
            <div className="footer-sub-title">
              <p>Support</p>
            </div>
            <div className="footer-content">
              <p>
                53 Nguyen Ngoc Vu
                <br />
                Trung Hoa, Cau Giay
                <br />
                Ha Noi, Viet Nam
              </p>
            </div>
            <div className="footer-detail">
              <p>
                <i className="fa-solid fa-phone" />
                098 378 6808
              </p>
              <p>
                <i className="fa-solid fa-inbox" />
                nghiatruong110700@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4">
          <div className="wrap-footer">
            <div className="footer-sub-title">
              <p>Account</p>
            </div>
            <div className="footer-content">
              <ul>
                <li>
                  <a href="#">My Account</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a href="#">My Cart</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4">
          <div className="wrap-footer">
            <div className="footer-sub-title">
              <p>Quick Link</p>
            </div>
            <div className="footer-content">
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer Bottom */}
  <div className="footer-bottom">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="wrap-footer-bottom">
            <p>2024. All Reserved by NghiaTruong</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Search Popup */}
  <div className="search-box">
    <div className="container">
      <div className="wrap-overflow">
        <div className="search-close-ic">
          <i className="fa-solid fa-xmark" />
        </div>
        <div className="row" id="search-input">
          <div className="col-12 col-sm-12 col-md-12">
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Search here!</label>
            </div>
          </div>
        </div>
        <div className="row" id="search-status">
          <div className="col-12 col-sm-12 col-md-12">
            <div className="wrap-search-status">
              <p className="result-number">1 result found</p>
              <a href="./mobile-categories.html">View All</a>
            </div>
          </div>
        </div>
        <div className="row search-product-js" id="search-product">
          <div className="col-12 col-sm-12 col-md-12">
            <div className="wrap-search-product">
              <a href="./product-detail.html">
                <div className="search-product-info">
                  <div className="search-image">
                    <img
                      src="./assets/images/Product Imagess/Iphone 15 BlueBlack.webp"
                      alt=""
                    />
                  </div>
                  <div className="search-text">
                    <p className="search-name">Iphone 15</p>
                    <p className="search-price">1200$</p>
                  </div>
                </div>
              </a>
              <div className="add-to-cart-button">
                <button type="button">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Shopping cart */}
  <div className="shopping-cart shopping-cart-js">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="cart-review">
            <h2>Cart Review</h2>
            <i className="fa-solid fa-xmark" id="cart-close-ic" />
          </div>
        </div>
      </div>
      <div className="row" id="wrap-product-section">
        <div className="col-12 col-sm-12 col-md-12" id="product-row-js"></div>
      </div>
      <div className="row" id="wrap-cart-checkout">
        <div className="col-12 col-sm-12 col-md-12">
          <div className="cart-subtotal">
            <h2>Subtotal</h2>
            <span>0$</span>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12">
          <div className="cart-button">
            <button type="submit">
              <a href="./cart-page.html">Cart View</a>
            </button>
            <button type="submit">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default Homepage