import React from "react";

const CartBottom = ({total}) => {
  const handleShippingClicked = () => {
    const {id, checked} = event.target
    console.log(checked)
  }

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
                    <input onChange={() => handleShippingClicked} id="radio1" type="radio" name="shipping" />
                    <label htmlFor="radio1">Free Shipping</label>
                  </div>
                  <div className="input-group">
                    <input onChange={() => handleShippingClicked} id="radio2" type="radio" name="shipping" />
                    <label htmlFor="radio2">Local: 35$</label>
                  </div>
                  <div className="input-group">
                    <input onChange={() => handleShippingClicked} id="radio3" type="radio" name="shipping" />
                    <label htmlFor="radio3">Flat rate: 12$</label>
                  </div>
                </td>
              </tr>

              <tr className="order-total">
                <td>Total</td>
                <td className="total-amount">400$</td>
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
