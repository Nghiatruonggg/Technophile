import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../../../reducers/orderCRUDSlice";

const OrderTable = () => {
  const orderFunction = useSelector((state) => state.orderCRUD);
  const dispatch = useDispatch();
  const { purchasedOrders, isLoading, error } = orderFunction;

  useEffect(() => {
    dispatch(getOrder());
  }, []);

  return (
    <Table striped hover responsive>
      <thead>
        <tr>
          <th width="14%">Order Num</th>
          <th>Customer</th>
          <th>Status</th>
          <th>Items</th>
          <th>Delivery</th>
          <th>Total</th>
          <th>Purchased Date</th>
        </tr>
      </thead>
      <tbody>
        {isLoading ? (
          <tr>
            <td colSpan="7">Loading</td>
          </tr>
        ) : (
          purchasedOrders.map((order) => {
            return (
              <tr>
                <td>#<b>{order.id}</b></td>
                <td>{order.customer_name}</td>
                <td>{order.status}</td>
                <td>{order.item_numbers}</td>
                <td>{order.delivery}</td>
                <td>${order.total}</td>
                <td>{order.purchased_date}</td>
              </tr>
            );
          })
        )}
      </tbody>
    </Table>
  );
};

export default OrderTable;
