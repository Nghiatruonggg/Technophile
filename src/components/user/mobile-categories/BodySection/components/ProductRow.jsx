import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../../reducers/cartReducerSlice";

const ProductRow = ({ isLoading, productSlice, styles }) => {
  if (isLoading) return <p>Data is Loading</p>;

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart({
      ...product,
      quantity : 1
    }));
  };

  return (
    <>
      <div className={styles.productRow}>
        <div className={styles.rowCustom}>
          {productSlice.length > 0 && productSlice.map((product) => {
            return (
              <div key={product.id} className={`column column-3 column-2 ${styles.columnRelative}`}>
                <Link to={`/mobile-categories/${product.id}`}>

                  <div className={styles.wrapProduct}>
                    <div className={styles.productImage}>
                      <img src={product.mainImage} alt={product.name} />
                    </div>

                    <div className={styles.productText}>
                      <p className={styles.productName}>{product.name}</p>
                      <p className={styles.productPrice}>${product.price}</p>
                    </div>
                  </div>
                </Link>
                <div className={styles.cartProductButton}>
                  <button onClick={() => handleAddToCart(product)}>
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductRow;
