import { Link } from "react-router-dom";
import { categoryLogo } from "../../../../structures/UserStructure";
import styles from "../Categories/Categories.module.css"

const Categories = () => {
  
  return (
    <>
      {/* Categories */}
      <div className={styles.categoriesSection}>
        <div className="container">
          {/* Categories Title */}
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12">
              <div className={`${styles.subCategoriesTitle} sub-title`}>
                <p>
                  <i className="fa-solid fa-tag" />
                  Categories
                </p>
                <h1>Browse by Category</h1>
              </div>
            </div>
          </div>
          {/* Categories Main */}
          <div className="row" id="wrap-categories">
            {categoryLogo.map((category) => {
              return (
                  <div key={category.id} className="col-6 col-sm-4 col-md-2">
                    <Link className={styles.linkCategory} to={category.redirectPath}>
                      <div className={styles.categoryProduct}>
                        <div className={styles.categoryGraphic}>
                          <img src={category.imageSrc} alt="MobileLogo" />
                        </div>
                        <div className={styles.categoryProductTitle}>
                          <p>{category.name}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
