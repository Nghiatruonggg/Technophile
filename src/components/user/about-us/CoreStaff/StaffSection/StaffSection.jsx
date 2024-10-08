import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { options } from "../../../../../untils/third-lib";

const StaffSection = ({ data, styles, isLoading }) => {
  return (
    <>
      <OwlCarousel
        className="owl-theme"
        dots={false}
        nav={true}
        items={4}
        {...options}
      >
        {isLoading ? (
          <p>Data is Loading</p>
        ) : (
          data.map((staff) => {
            return (
              <div key={staff.id} className="item">
                <div className={styles.wrapStaffInfo}>
                  <div className={styles.staffImage}>
                    <img src={staff.staff_image} alt={staff.staff_name} />
                  </div>
                  <div className={styles.staffInfo}>
                    <p className={styles.staffRole}>{staff.staff_role}</p>
                    <p className={styles.staffName}>{staff.staff_name}</p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </OwlCarousel>
    </>
  );
};

export default StaffSection;
