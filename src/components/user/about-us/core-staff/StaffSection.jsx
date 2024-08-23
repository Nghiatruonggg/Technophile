import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { options } from "../../../../untils/third-lib";

const StaffSection = ({ data }) => {
  return (
    <>
      <OwlCarousel
        className="owl-theme"
        dots={false}
        nav={true}
        items={4}
        {...options}
      >
        {data.map((staff) => {
          return (
            <div key={staff.id} className="item">
              <div className="wrap-staff-info">
                <div className="staff-image">
                  <img src={staff.staff_image} alt={staff.staff_name} />
                </div>
                <div className="staff-info">
                  <p className="staff-role">{staff.staff_role}</p>
                  <p className="staff-name">{staff.staff_name}</p>
                </div>
              </div>
            </div>
          );
        })}
      </OwlCarousel>
    </>
  );
};

export default StaffSection;
