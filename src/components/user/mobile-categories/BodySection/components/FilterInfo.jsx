import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brandFiltering } from "../../../../../structures/UserStructure";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const FilterInfo = ({ handleCategoriesChecked, styles }) => {
  return (
    <>
      <div className={styles.filterInfo}>
        <div className={styles.categoriesFilter}>
          <div className={styles.filterTitle}>
            <p>CATEGORIES</p>
            <FontAwesomeIcon className="icon" icon={faMinus} />
          </div>
          <div className="categories-list">
            <ul className={styles.filterList}>
              <li>
                <input
                  id="Smartphones"
                  className={styles.filterInput}
                  type="checkbox"
                  onChange={handleCategoriesChecked}
                />
                <label htmlFor="Smartphones">Smartphones</label>
              </li>
              <li>
                <input
                  id="Feature Phones"
                  className={styles.filterInput}
                  type="checkbox"
                  onChange={handleCategoriesChecked}
                />
                <label htmlFor="Feature Phones">Feature Phones</label>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.priceFilter}>
          <div className={styles.filterTitle}>
            <p>PRICE</p>
            <FontAwesomeIcon icon={faMinus} className="icon" />
          </div>
          <div className="price-list">
            <ul className={styles.filterList}>
              <li>
                <input
                  id="From 20$ - 50$"
                  className={styles.filterInput}
                  type="checkbox"
                  onChange={handleCategoriesChecked}
                />
                <label htmlFor="From 20$ - 50$">From 20$ - 50$</label>
              </li>
              <li>
                <input
                  id="From 50$ - 100$"
                  className={styles.filterInput}
                  type="checkbox"
                  onChange={handleCategoriesChecked}
                />
                <label htmlFor="From 50$ - 100$">From 50$ - 100$</label>
              </li>
              <li>
                <input
                  id="From 100$ - 500$"
                  className={styles.filterInput}
                  type="checkbox"
                  onChange={handleCategoriesChecked}
                />
                <label htmlFor="From 100$ - 500$">From 100$ - 500$</label>
              </li>
              <li>
                <input
                  id="500$+"
                  className={styles.filterInput}
                  type="checkbox"
                  onChange={handleCategoriesChecked}
                />
                <label htmlFor="500$+">500$+</label>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.brandFilter}>
          <div className={styles.filterTitle}>
            <p>BRAND</p>
            <FontAwesomeIcon icon={faMinus} />
          </div>
          <div className={styles.brandList}>
            {brandFiltering.map(({newClassName, ...brand}) => {
              return <img key={brand.brand} src={brand.brand} alt={brand.alt} className={styles[newClassName]} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterInfo;
