import { useEffect, useState } from "react";
import styles from "./CartBottom.module.css";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { purchaseOrder } from "../../../../reducers/orderCRUDSlice";
import ToastPopup from "../../../popups/ToastPopup";
import { useNavigate } from "react-router-dom";

const CartBottom = ({ total, productList }) => {
  const [newTotal, setNewTotal] = useState(total);
  const [shippingCost, setShippingCost] = useState(0);
  const [defaultMethod, setDefaultMethod] = useState("Free Shipping");

  const redirect = useNavigate();
  const dispatch = useDispatch();

  const purchasedOrder = useSelector((state) => state.orderCRUD);
  const { isLoading } = purchasedOrder;

  const handleShippingClicked = (method) => {
    let cost = 0;

    if (method === "Local") {
      cost = 35;
    } else if (method === "Flat Rate") {
      cost = 12;
    }

    setShippingCost(cost);
    setDefaultMethod(method);
  };

  // Get current date
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  const completedDate = `${day}/${month}/${year}`;

  // Get Product Quantity
  let totalQuantity = 0;
  productList.forEach(({ quantity }) => {
    totalQuantity += quantity;
  });

  const orderInfo = {
    customer_name: "Nghia",
    status: "Pending",
    item_numbers: totalQuantity,
    delivery: defaultMethod,
    total: newTotal,
    purchased_date: completedDate,
  };

  const handleCheckout = async () => {
    if (orderInfo.item_numbers > 0) {
      try {
        const result = await dispatch(purchaseOrder(orderInfo));

        if (purchaseOrder.fulfilled.match(result)) {
          ToastPopup({ message: "Purchased Success!", type: "success" });
          setTimeout(() => {
            redirect("/");
          }, 2000);
        }

        if (purchaseOrder.rejected.match(result)) {
          let errorMessage =
            result.payload.data?.error || "Please Try Again Later";
          ToastPopup({ message: { errorMessage }, type: "error" });
        }
      } catch (error) {
        throw new Error(error);
      }
    } else {
      ToastPopup({message: "Please choose your products before purchasing!", type: "error"})
    }
  };

  // Recalculate newTotal whenever total or shippingCost changes
  useEffect(() => {
    setNewTotal(total + shippingCost);
  }, [total, shippingCost]);

  return (
    <>
      <Row>
        <Col>
          <div className={styles.cartBottom}>
            <div className={styles.orderSummary}>
              <p className={styles.orderTitle}>Order Summary</p>

              <table className={`table mb-30 bg-transparent ${styles.table}`}>
                <tbody>
                  <tr className="order-subtotal">
                    <td>Subtotal</td>
                    <td>${total}</td>
                  </tr>

                  <tr className="order-shipping">
                    <td>Shipping</td>
                    <td>
                      <div className={styles.inputGroup}>
                        <input
                          onChange={() =>
                            handleShippingClicked("Free Shipping")
                          }
                          id="radio1"
                          type="radio"
                          name="shipping"
                          checked={
                            defaultMethod == "Free Shipping" ? true : false
                          }
                        />
                        <label htmlFor="radio1">Free Shipping</label>
                      </div>
                      <div className={styles.inputGroup}>
                        <input
                          onChange={() => handleShippingClicked("Local")}
                          id="radio2"
                          type="radio"
                          name="shipping"
                          checked={defaultMethod == "Local" ? true : false}
                        />
                        <label htmlFor="radio2">Local: $35</label>
                      </div>
                      <div className={styles.inputGroup}>
                        <input
                          onChange={() => handleShippingClicked("Flat Rate")}
                          id="radio3"
                          type="radio"
                          name="shipping"
                          checked={defaultMethod == "Flat Rate" ? true : false}
                        />
                        <label htmlFor="radio3">Flat Rate: $12</label>
                      </div>
                    </td>
                  </tr>

                  <tr className="order-total">
                    <td>Total</td>
                    <td className="total-amount">${newTotal}</td>
                  </tr>
                </tbody>
              </table>

              <div className={styles.checkoutButton}>
                <button
                  type="submit"
                  disabled={isLoading ? true : false}
                  onClick={handleCheckout}
                >
                  Process To Checkout
                </button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default CartBottom;
