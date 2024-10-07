import React from "react";

const SpecContent = ({data, styles}) => {
  return (
    <>
      <div className="row">
            <div class="col-12 col-sm-12 col-md-12">
              <div class={styles.specificationTitle}>
                <h2 class={styles.sectionTitle}>Technical Specification</h2>
              </div>
            </div>

            <div class="col-12 col-sm-12 col-md-12" id="product-spec">
              <div class={styles.specTable}>
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th class="spec-name" scope="col">
                        #
                      </th>
                      <th scope="col">Spec Detail</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Monitor Size</th>
                      <td>{data.monitor_size}</td>
                    </tr>
                    <tr>
                      <th scope="row">Display Technology</th>
                      <td>{data.display_technology}</td>
                    </tr>
                    <tr>
                      <th scope="row">Back Camera</th>
                      <td>{data.back_camera}</td>
                    </tr>
                    <tr>
                      <th scope="row">Front Camera</th>
                      <td>{data.front_camera}</td>
                    </tr>
                    <tr>
                      <th scope="row">RAM Size</th>
                      <td>{data.ram_size}</td>
                    </tr>
                    <tr>
                      <th scope="row">Memory Capacity</th>
                      <td>{data.memory_capacity}</td>
                    </tr>
                    <tr>
                      <th scope="row">Number of Sim Card</th>
                      <td>{data.simcard_number}</td>
                    </tr>
                    <tr>
                      <th scope="row">Operating System</th>
                      <td>{data.operating_system}</td>
                    </tr>
                    <tr>
                      <th scope="row">Aspect Ratio</th>
                      <td>{data.aspect_ratio}</td>
                    </tr>
                    <tr>
                      <th scope="row">Chipset & CPU</th>
                      <td>
                        {data.chipset_cpu}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Battery Size</th>
                      <td>{data.battery_size}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
      </div>
    </>
  );
};

export default SpecContent;
