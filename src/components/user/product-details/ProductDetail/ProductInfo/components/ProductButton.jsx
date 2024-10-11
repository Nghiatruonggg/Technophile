import { faHeart, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ProductButton = ({ product, handleAddToCart, styles }) => {
  const [quantityDetail, setQuantityDetail] = useState(1);

  const minusQuantity = () => {
    if (quantityDetail > 1) {
      setQuantityDetail(quantityDetail - 1);
    }
  };

  const addQuantity = () => {
    setQuantityDetail(quantityDetail + 1);
  }

  return (
    <>
      <div className={styles.productButton}>
        <div className={styles.productQuantity}>
          <button
            onClick={minusQuantity}
            className="minus-button"
            type="button"
          >
            <FontAwesomeIcon icon={faMinus} className="fa-solid fa-minus" />
          </button>
          <span>{quantityDetail}</span>
          <button onClick={addQuantity} className="plus-button" type="button">
            <FontAwesomeIcon icon={faPlus} className="fa-solid fa-plus" />
          </button>
        </div>
        <div className={styles.addToCartButton}>
          <button onClick={() => handleAddToCart(product, quantityDetail)} type="submit">
            Add To Cart
          </button>
        </div>
        <div className={styles.wishlistButton}>
          <button type="button">
            <FontAwesomeIcon icon={faHeart} className="fa-regular fa-heart" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductButton;
