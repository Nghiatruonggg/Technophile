import styles from "./ServiceSection.module.css";
import { serviceGraphic } from "../../../../structures/UserStructure";

const ServiceSection = () => {
  return (
    <>
      {/* Service Section */}
      <div className={styles.serviceSection}>
        <div className="container">
          <div className="row">
            {serviceGraphic.map((service) => {
              const { addedClassname } = service;

              const dynamicClassNames = addedClassname
                .split(" ")
                .map((name) => styles[name])
                .join(" ");
              return (
                <div
                  key={service.graphic}
                  className="col-12 col-sm-6 col-md-3 mb-3"
                >
                  <div className={dynamicClassNames}>
                    <div className={styles.serviceImage}>
                      <img src={service.graphic} alt={service.title} />
                    </div>
                    <div className={styles.serviceText}>
                      <p className={styles.upperText}>{service.title}</p>
                      <p className={styles.bottomText}>{service.subText}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
