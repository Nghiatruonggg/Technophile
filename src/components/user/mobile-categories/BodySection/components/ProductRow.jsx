import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../../reducers/cartReducerSlice";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const ProductRow = ({ isLoading, productSlice, styles }) => {
  if (isLoading) return <p>Data is Loading</p>;

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(
      addToCart({
        ...product,
        quantity: 1,
      })
    );
  };

  return (
    <>
      <Row className="px-3">
          {productSlice.length > 0 &&
            productSlice.map((product) => {
              return (
                <Col xs={6} sm={6} md={4}
                  key={product.id}
                  className={`${styles.columnRelative}`}
                >
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
                      <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                    </button>
                  </div>
                </Col>
              );
            })}
      </Row>
    </>
  );
};

export default ProductRow;
