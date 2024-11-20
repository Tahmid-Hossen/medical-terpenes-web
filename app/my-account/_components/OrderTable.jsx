"use client"

import { formatDate } from "@/lib/formatDate";
import { getOrders } from "@/services/getOrders";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { RiEyeLine } from "react-icons/ri";


function OrderTable() {
  const [userOrders, setUserOrders] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await getOrders();
        if (response.error) {
          throw new Error(response.message);
        }

        setUserOrders(response?.data?.data?.orders);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  console.log('Orders loaded', userOrders)

  return (
    <div className="order-table-data-area space-pt--100 space-pb--r70">
      <Container>
        <Row>
          <div style={{marginTop: "40px"}} className='order-table-data'>
            <div style={{overflowX: "auto"}} className="">
              <table className="table">
                <thead>
                <tr className="text-center border" >
                  <th>Order ID</th>
                  <th>Order Date</th>
                  <th>Qty</th>
                  <th>Total Amount</th>
                  <th>Order Status</th>
                  <th>Payment Type</th>
                  <th>Payment Status</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {loading ? (
                  <tr className="text-center border" >
                    <td colSpan="7" className="text-center">
                      <div className="d-flex justify-content-center align-items-center" style={{height: '100px'}}>
                        <div className="spinner-border" role="status">
                          <span className="sr-only">Loading...</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                ) : error ? (
                  <tr className="text-center border">
                    <td colSpan="7" className="text-center error">{error}</td>
                  </tr>
                ) : (
                  userOrders?.map((order, index) => {
                    console.log(`/my-account/order-details/${order?._id}`)
                    return (
                      <tr key={index} className="text-center border">
                        <td className="text-center">{order?._id}</td>
                        <td className="text-center">{formatDate(order?.created_at)}</td>
                        <td className="text-center">{order?.products?.length}</td>
                        <td className="text-center">${order?.total}</td>
                        <td className="text-center">
                          <button className="w-30 border-0 py-1 my-2 staggered-animation custom-btn-order-table"
                                  style={{backgroundColor: `${order.payment_status !== "Unpaid" ? "#22C55E" : "#F97316"}`}}>
                            {order?.order_status}
                          </button>
                        </td>
                        <td className="text-center">{order?.payment_type}</td>
                        <td className="text-center">
                          <button className="w-30 mx-auto border-0 py-1 my-2 staggered-animation custom-btn-order-table"
                                  style={{backgroundColor: `${order.payment_status !== "Unpaid" ? "#22C55E" : "#F97316"}`}}>
                            {order?.payment_status}
                          </button>
                        </td>
                        <td className="text-center">
                          <Link href={`/my-account/order-details/${order?._id}`} className="btn btn-sm"
                                style={{color: "#169CF9", fontSize: "24px"}}>
                            <RiEyeLine/>
                          </Link>
                        </td>
                      </tr>
                    )
                  }))}
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
