import React from 'react'
import { Col, Row } from 'react-bootstrap'
import OrderTable from '../../components/admin/order-manage/OrderTable'

const OrderManage = () => {
  return (
    <Row>
        <Col>
            <div className='common-listing'>
                <div className='listing-header'>
                    <p className='chart-title'>Order Management</p>
                </div>

                <div className='order-manage'>
                    <OrderTable/>
                </div>
            </div>
        </Col>
    </Row>
  )
}

export default OrderManage