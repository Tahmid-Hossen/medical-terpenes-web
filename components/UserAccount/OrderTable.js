import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import { RiEyeLine } from "react-icons/ri";
const orders = [
    { orderId: "ORD123456", orderDate: "Dec 22, 2023", qty: 1, totalAmount: 5.00, status: "Done", paymentStatus: "Done" },
    { orderId: "ORD123456", orderDate: "Dec 22, 2023", qty: 1, totalAmount: 5.00, status: "Done", paymentStatus: "Done" },
    { orderId: "ORD123456", orderDate: "Dec 22, 2023", qty: 1, totalAmount: 5.00, status: "Pending", paymentStatus: "Pending" },
    { orderId: "ORD123456", orderDate: "Dec 22, 2023", qty: 1, totalAmount: 5.00, status: "Pending", paymentStatus: "Pending" }
  ];
  
function OrderTable() {
  return (
    <div className="order-table-data-area space-pt--100 space-pb--r70">
      <Container>
        <Row>
          <div style={{marginTop: "40px"}} className='order-table-data'>
            <div style={{ overflowX: "auto" }} className="">
              <table className="table">
                <thead>
                  <tr className="text-center">
                    <th>Order ID</th>
                    <th>Order Date</th>
                    <th>Qty</th>
                    <th>Total Amount</th>
                    <th>Status</th>
                    <th>Payment Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="text-center">
              <td>{order.orderId}</td>
              <td>{order.orderDate}</td>
              <td>{order.qty}</td>
              <td>${order.totalAmount.toFixed(2)}</td>
              <td>
                {/* <span className={`badge badge-${order.status === 'Done' ? 'success' : 'warning'}`}>
                  {order.status}
                </span> */}
                <button className="w-30 border-0 py-1 my-2 staggered-animation custom-btn-order-table" style={{backgroundColor: `${order.paymentStatus == 'Done' ? "#22C55E" : "#F97316"}`}}>{order.status}</button>
              </td>
              <td>
              <button className="w-30 mx-auto border-0 py-1 my-2 staggered-animation custom-btn-order-table" style={{backgroundColor: `${order.paymentStatus == 'Done' ? "#22C55E" : "#F97316"}`}}>{order.status}</button>
              </td>
              <td>
                <button className="btn btn-sm" style={{color: "#169CF9", fontSize: "24px"}}>
                   < RiEyeLine></RiEyeLine>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
              </table>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default OrderTable;
