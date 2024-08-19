import React from "react";

import appleLogo from "../../../../assets/common/images/Sponsor Logo/Apple-Logo-2048x1152.png"
import samsungLogo from "../../../../assets/common/images/Sponsor Logo/Samsung Logo.png"
import nokiaLogo from "../../../../assets/common/images/Mobile-Categories/Nokia 2023 New Logo.png"
import viettelLogo from "../../../../assets/common/images/Mobile-Categories/Viettel_logo_2021.svg.png"
import xiaomiLogo from "../../../../assets/common/images/Mobile-Categories/Xiaomi_logo_(2021-).svg.png"
import oneplusLogo from "../../../../assets/common/images/Mobile-Categories/oneplus logo.png"
import oppoLogo from "../../../../assets/common/images/Mobile-Categories/oppo logo.png"
import huaweiLogo from "../../../../assets/common/images/Mobile-Categories/huawei logo.png"


const FilterInfo = () => {
  return (
    <>
      <div className="filter-info">
        <div className="categories-filter">
          <div className="filter-title">
            <p>CATEGORIES</p>
            <i className="fa-solid fa-minus" />
          </div>
          <div className="categories-list">
            <ul className="filter-list">
              <li>
                <input
                  id="smartphones"
                  className="filter-info"
                  type="checkbox"
                />
                <label htmlFor="smartphones">Smartphones</label>
              </li>
              <li>
                <input
                  id="feature-phones"
                  className="filter-info"
                  type="checkbox"
                />
                <label htmlFor="feature-phones">Feature Phones</label>
              </li>
            </ul>
          </div>
        </div>
        <div className="price-filter">
          <div className="filter-title">
            <p>PRICE</p>
            <i className="fa-solid fa-minus" />
          </div>
          <div className="price-list">
            <ul className="filter-list">
              <li>
                <input
                  id="price-range-1"
                  className="filter-info"
                  type="checkbox"
                />
                <label htmlFor="price-range-1">From 20$ - 50$</label>
              </li>
              <li>
                <input
                  id="price-range-2"
                  className="filter-info"
                  type="checkbox"
                />
                <label htmlFor="price-range-2">Fron 50$ - 100$</label>
              </li>
              <li>
                <input
                  id="price-range-3"
                  className="filter-info"
                  type="checkbox"
                />
                <label htmlFor="price-range-3">From 100$ - 500$</label>
              </li>
              <li>
                <input
                  id="price-range-4"
                  className="filter-info"
                  type="checkbox"
                />
                <label htmlFor="price-range-4">500$+</label>
              </li>
            </ul>
          </div>
        </div>
        <div className="brand-filter">
          <div className="filter-title">
            <p>BRAND</p>
            <i className="fa-solid fa-minus" />
          </div>
          <div className="brand-list">
            <a href="#">
              <img
                src={appleLogo}
                alt="Apple-Logo-2048x1152"
              />
            </a>
            <a href="#">
              <img src={samsungLogo} alt="" />
            </a>
            <a href="#">
              <img
                src={nokiaLogo}
                alt=""
              />
            </a>
            <a href="#">
              <img
                src={viettelLogo}
                alt=""
              />
            </a>
            <a href="#">
              <img
                className="xiaomi-logo"
                src={xiaomiLogo}
                alt="Apple-Logo-2048x1152"
              />
            </a>
            <a href="#">
              <img
                className="huawei-logo"
                src={huaweiLogo}
                alt=""
              />
            </a>
            <a href="#">
              <img
                className="oneplus-logo"
                src={oneplusLogo}
                alt=""
              />
            </a>
            <a href="">
              <img
                src={oppoLogo}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterInfo;
