import styles from "./CartCenter.module.css"
import { useDispatch } from "react-redux";
import { addQuantity, deleteProduct, minusQuantity } from "../../../../reducers/cartReducerSlice";

const CartCenter = ({ productList }) => {
  const dispatch = useDispatch();

  const handleAddQuantity = (id) => {
    dispatch(addQuantity(id))
  }

  const handleMinusQuantity = (id) => {
    dispatch(minusQuantity(id));
  }

  const removeProduct = (id) => {
    dispatch(deleteProduct(id));
  }

  return (
    <>
      <div className="cart-center">
        <div className="table-responsive">
          <table className="table align-middle mb-0">
            <thead className="bg-light">
              <tr>
                <th></th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {productList.length == 0 ? (
                <p>Cart is empty</p>
              ) : (
                productList.map((product) => {
                  let productSubtotal = product.price * product.quantity

                  return (
                    <tr key={product.id}>
                      <td className="cart-review">
                        <i onClick={() => removeProduct(product.id)} className="fa-solid fa-xmark"></i>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={product.mainImage}
                            alt={product.name}
                            style={{ width: 150, height: 150 }}
                          />
                          <div className="ms-3">
                            <p className="fw-bold mb-1">{product.name}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="fw-normal mb-1">${product.price}</p>
                      </td>
                      <td className="quantity-view">
                        <button type="button" className={styles.cartMinus} onClick={() => handleMinusQuantity(product.id)} >
                          <i className="fa-solid fa-minus"></i>
                        </button>
                        <span className={styles.cartViewQuantity}>{product.quantity}</span>
                        <button type="button" className={styles.cartPlus} onClick={()=> handleAddQuantity(product.id)}>
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </td>
                      <td>${productSubtotal}</td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        <div className={styles.cartCoupon}>
          <input type="text" placeholder="Enter coupon code" />
          <button type="submit">Submit</button>
        </div>
      </div>
    </>
  );
};

export default CartCenter;
