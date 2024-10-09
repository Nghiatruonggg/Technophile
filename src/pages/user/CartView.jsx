import React from "react";
import Subbanner from "../../components/common/Subbanner/Subbanner";
import CartTop from "../../components/user/cart-page/CartTop/CartTop";
import CartCenter from "../../components/user/cart-page/CartCenter/CartCenter";
import CartBottom from "../../components/user/cart-page/CartBottom/CartBottom";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";

const CartView = () => {
  const cartState = useSelector((state) => state.cart);

  const { productList, total } = cartState;

  return (
    <>
      <Subbanner />
      <div className="main-cartpage">
        <Container>
          <Row>
            <div className="cart-view">
              <Col>
                <CartTop />

                <CartCenter productList={productList} />

                <CartBottom total={total} />
              </Col>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default CartView;
