import React from "react";

const DescriptionContent = ({data, activeTab}) => {
  return (
    <>
      <div className="row" id="wrap-product-description">
        {activeTab === "description" && (
          <>
            <div className="col-12 col-sm-12 col-md-12">
              <div className="wrap-description-section ">
                <h2 className="description-title section-title">
                  {data.description_title_1}
                </h2>
                <p className="description-text">{data.description_text_1}</p>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12">
              <div className="wrap-description-section">
                <h2 className="description-title">
                  {data.description_title_2}
                </h2>
                <p className="description-text">{data.description_text_2}</p>
                <h5 className="description-sub-title">
                  {data.description_sub_title_1}
                </h5>
                <p className="description-text">{data.description_text_3}</p>
                <div className="description-image">
                  <img src={data.description_image_1} alt={data.name} />
                </div>
                <p class="description-text">{data.description_text_4}</p>
              </div>
            </div>

            <div class="col-12 col-sm-12 col-md-12">
              <div class="wrap-description-section">
                <h5 class="description-sub-title">
                  {data.description_sub_title_2}
                </h5>
                <p class="description-text">{data.description_text_5}</p>
                <div class="description-image">
                  <img src={data.description_image_2} alt={data.name} />
                </div>
                <p class="description-text">{data.description_text_6}</p>
              </div>
            </div>
          </>
        )}

        {/* <div class="col-12 col-sm-12 col-md-12">
              <div class="wrap-description-section">
                  <h5 class="description-sub-title">Powerful Performance with Advanced A16 Bionic Processor</h5>
                  <p class="description-text">With the Apple A16 Bionic chip manufactured on a modern 4nm process, the iPhone 15 256GB is rated as having top-tier performance. This processor allows efficient execution of all tasks with quick speed. As a result, the device can optimize graphics, process data, and enhance interaction experiences.</p>
                  <div class="description-image">
                      <img src="./assets/images/Product Detail/iphone-15-3.webp" alt=""/>
                  </div>
                  <p class="description-text">The iPhone 15 256GB has 6GB of RAM, ensuring smooth multitasking and minimizing lag. Additionally, it comes pre-installed with the iOS 17 operating system, offering a modern interface with high-security smart applications.</p>
              </div>
          </div> */}
      </div>
    </>
  );
};

export default DescriptionContent;
