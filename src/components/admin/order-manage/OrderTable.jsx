import React from 'react'
import { Table } from 'react-bootstrap'

const OrderTable = () => {
  return (
    <Table striped hover responsive>
      <thead>
        <tr>
          <th width="14%" >Order Num</th>
          <th>Customer</th>
          <th>Status</th>
          <th>Items</th>
          <th>Delivery</th>
          <th>Purchased Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Free Shipping</td>
          <td>24/08/2024</td>
        </tr>
        
      </tbody>
    </Table>
  )
}

export default OrderTable