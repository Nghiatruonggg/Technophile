import React, { useEffect, useState } from "react";

const CartBottom = ({ total }) => {
  const [newTotal, setNewTotal] = useState(total);
  const [shippingCost, setShippingCost] = useState(0);
  const [defaultMethod, setDefaultMethod] = useState("free");

  const handleShippingClicked = (method) => {
    let cost = 0;

    if (method === "local") {
      cost = 35;
    } else if (method === "flat-rate") {
      cost = 12;
    }

    setShippingCost(cost);
    setDefaultMethod(method);
  };

  // Recalculate newTotal whenever total or shippingCost changes
  useEffect(() => {
    setNewTotal(total + shippingCost);
  }, [total, shippingCost]);


  return (
    <>
      <div className="cart-bottom">
        <div className="order-summary">
          <p className="order-title">Order Summary</p>
          <table className="table mb-30 bg-transparent">
            <tbody>
              <tr className="order-subtotal">
                <td>Subtotal</td>
                <td>{total}$</td>
              </tr>

              <tr className="order-shipping">
                <td>Shipping</td>
                <td>
                  <div className="input-group">
                    <input
                      onClick={() => handleShippingClicked("free")}
                      id="radio1"
                      type="radio"
                      name="shipping"
                      checked={defaultMethod === "free"}
                    />
                    <label htmlFor="radio1">Free Shipping</label>
                  </div>
                  <div className="input-group">
                    <input
                      onClick={() => handleShippingClicked("local")}
                      id="radio2"
                      type="radio"
                      name="shipping"
                      checked={defaultMethod === "local"}
                    />
                    <label htmlFor="radio2">Local: 35$</label>
                  </div>
                  <div className="input-group">
                    <input
                      onClick={() => handleShippingClicked("flat-rate")}
                      id="radio3"
                      type="radio"
                      name="shipping"
                      checked={defaultMethod === "flat-rate"}
                    />
                    <label htmlFor="radio3">Flat rate: 12$</label>
                  </div>
                </td>
              </tr>

              <tr className="order-total">
                <td>Total</td>
                <td className="total-amount">{newTotal}$</td>
              </tr>
            </tbody>
          </table>

          <div className="checkout-button">
            <button type="submit">Process To Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartBottom;
