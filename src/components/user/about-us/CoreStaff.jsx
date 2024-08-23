import React from "react";
import useCallAPI from "../../../hooks/useCallAPI";
import { core_staffs } from "../../../untils/variable";
import StaffSection from "./core-staff/StaffSection";

const CoreStaff = () => {

    const {data, isLoading} = useCallAPI(core_staffs);
    console.log(data);
  return (
    <>
      {/* Core Staff  */}
      <div className="core-staff-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12">
              <div className="wrap-staff-title">
                <div className="sub-staff-title">
                  <p>
                    <i className="fa-solid fa-people-group" />
                    Core Staff
                  </p>
                  <h2>Our Team</h2>
                </div>
              </div>
            </div>
          </div>
        
        <StaffSection data={data}/>


        </div>
      </div>
    </>
  );
};

export default CoreStaff;
