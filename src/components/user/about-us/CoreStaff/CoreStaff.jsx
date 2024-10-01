import React from "react";
import useCallAPI from "../../../../hooks/useCallAPI";
import { core_staffs } from "../../../../untils/variable";
import StaffSection from "./StaffSection/StaffSection";
import styles from "./CoreStaff.module.css"

const CoreStaff = () => {
  const { data, isLoading } = useCallAPI(core_staffs);
  return (
    <>
      {/* Core Staff  */}
      <div className={styles.coreStaffSection}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12">
              <div className={styles.wrapStaffTitle}>
                <div className={styles.subStaffTitle}>
                  <p>
                    <i className="fa-solid fa-people-group" />
                    Core Staff
                  </p>
                  <h2>Our Team</h2>
                </div>
              </div>
            </div>
          </div>

          <StaffSection data={data} styles={styles} />
        </div>
      </div>
    </>
  );
};

export default CoreStaff;
