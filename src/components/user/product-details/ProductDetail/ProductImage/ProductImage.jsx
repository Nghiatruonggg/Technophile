import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Col } from "react-bootstrap";

const ProductImage = ({ data }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Col xs={12} sm={12} md={6}>
        <div className="wrap-product-image">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img src={data.mainImage} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={data.thumbnail_1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={data.thumbnail_2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={data.thumbnail_3} />
            </SwiperSlide>
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={data.mainImage} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={data.thumbnail_1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={data.thumbnail_2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={data.thumbnail_3} />
            </SwiperSlide>
          </Swiper>
        </div>
      </Col>
    </>
  );
};

export default ProductImage;
