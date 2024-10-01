import { AUGraphics } from "../../../../structures/UserStructure";
import styles from "../Achievement/Achievement.module.css";

const Achievement = () => {
  return (
    <>
      {/* Achievement Section */}
      <div className={styles.achievementSection}>
        <div className="container">
          <div className="row justify-content-center">
            {AUGraphics.map((graphic) => {
              return (
                <div className="col-12 col-sm-6 col-md-4">
                  <div className={styles.wrapAchievement}>
                    <div className={styles.achievementContent}>
                      <img src={graphic.graphic} alt={graphic.alt} />
                      <p className={styles.mainAchievementTitle}>
                        {graphic.mainTitle}
                      </p>
                      <p className={styles.achievementText}>
                        {graphic.content}
                      </p>
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

export default Achievement;
