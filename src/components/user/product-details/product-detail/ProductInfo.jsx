import React from "react";
import TopInfo from "./product-info/TopInfo";
import ProductStatus from "./product-info/ProductStatus";
import ProductButton from "./product-info/ProductButton";
import { useDispatch, useSelector } from "react-redux";
import { addQuantity, addToCart, minusQuantity } from "../../../../reducers/cartReducerSlice";

const ProductInfo = ({ data }) => {
  // Redux Function
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { productList, total } = cartState;

  const handleAddToCart = (product, quantityDetail) => {
    dispatch(
      addToCart({
        ...product,
        quantity: quantityDetail,
      })
    );
  };

  const handleAddQuantity = (id) => {
    dispatch(addQuantity(id));
  }

  const handleMinusQuantity = (id) => {
    dispatch(minusQuantity(id));
  }

  return (
    <>
      <div className="col-12 col-sm-12 col-md-6">
        <div className="wrap-product-info">
          <TopInfo data={data} />

          <div className="wrap-bottom-info">
            <ProductStatus />

            <div className="product-brief-intro">
              <p>{data.product_brief_intro}</p>
            </div>

            <ProductButton product={data} handleAddToCart={handleAddToCart} handleMinusQuantity={handleMinusQuantity} handleAddQuantity={handleAddQuantity} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
