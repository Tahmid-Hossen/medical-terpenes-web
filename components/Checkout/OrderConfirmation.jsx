'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import {useReactToPrint} from "react-to-print";
import './OrderPrint.css'

const OrderConfirmation = ({ order }) => {
  const router = useRouter();
  const divRef = useRef(null);

  const handleContinueBuying = () => {
    router.push('/products');
  };


  /*const handlePrint = () => {
    const printContent = divRef.current.innerHTML;
    const iframe = document.createElement("iframe");

    // Configure the iframe
    iframe.style.position = "absolute";
    iframe.style.width = "0";
    iframe.style.height = "0";
    iframe.style.border = "none";

    document.body.appendChild(iframe);

    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Order Confirmation</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css">
      </head>
      <body>
        ${printContent}
      </body>
      </html>
    `);
    iframeDoc.close();

    // Trigger print and remove iframe
    iframe.contentWindow.focus();
    iframe.contentWindow.print();
    setTimeout(() => document.body.removeChild(iframe), 1000);
  };*/
  const printFn = useReactToPrint({
    contentRef: divRef,
    documentTitle: "Order Confirmation",
  });



  const paymentStatusColor = order?.payment_status === 'Unpaid' ? 'text-danger' : 'text-success';

  return (
      <Container ref={divRef} className="py-5">
        <div className="bg-white shadow-sm rounded p-4">
          <h2 className="text-center text-primary mb-3">Order Confirmation</h2>
          <p className="text-center text-muted">Thank you for your purchase!</p>

          <Row className="mt-4 align-items-stretch">
            <Col md={6} className="mb-4">
              <div className="border p-3 rounded h-100">
                <h4>Order Details</h4>
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <strong>Order Id</strong> {order?._id}
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <strong>Order Code</strong> {order?.code}
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <strong>Order Date</strong> {new Date(order?.created_at).toLocaleDateString()}
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <strong>Total Amount</strong> ${order?.total}
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <strong>Payment Type</strong> {order?.payment_type}
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <strong>Payment Status</strong>{' '}
                    <span className={`${paymentStatusColor} fw-bolder`}>{order?.payment_status}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <strong>Order Status</strong>{' '}
                    <span className="badge rounded-xs py-2 px-4" style={{ fontSize: '14px', backgroundColor: '#2398D3', borderRadius: '3px' }}>
            {order?.order_status}
          </span>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="border p-3 rounded h-100">
                <h4>Shipping Information</h4>
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <strong>Name</strong> {order?.shipping_details?.first_name} {order?.shipping_details?.last_name}
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-start">
                    <strong>Address</strong>{' '}
                    <span className="ms-5">{`${order?.shipping_details?.street_address}, ${order?.shipping_details?.city}, ${order?.shipping_details?.province}, ${order?.shipping_details?.country}`}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <strong>Phone</strong> {order?.shipping_details?.phone}
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <strong>Email</strong> {order?.shipping_details?.email}
                  </li>
                </ul>
              </div>
            </Col>
          </Row>

          <h4 className="mt-4">Items Ordered</h4>
          <Table striped bordered hover responsive>
            <thead>
            <tr>
              <th>Product Image</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
            </thead>
            <tbody>
            {order?.products?.map((item) => (
                <tr key={item._id}>
                  <td className="text-center">
                    <div className="d-flex justify-content-center">
                      <Image
                          src={
                            item?.image
                                ? `${process.env.NEXT_PUBLIC_API_URL}/public/${item?.image}`
                                : '/assets/images/place_holder_product_image.webp'
                          }
                          alt="Product Image"
                          width={50}
                          height={50}
                          className="img-fluid"
                      />
                    </div>
                  </td>
                  <td>{item?._id}</td>
                  <td>{item?.quantity}</td>
                  <td>${item?.price}</td>
                  <td>${item?.total}</td>
                </tr>
            ))}
            </tbody>
          </Table>

          <div className="text-center mt-4 d-print-none">
            <Button variant="primary" className="me-md-3 mb-3 mb-md-0" onClick={printFn}>
              Print PDF
            </Button>
            <Button variant="primary" onClick={handleContinueBuying}>
              Continue Buying
            </Button>
          </div>
          <p className="text-center text-muted mt-3">
            You will receive a confirmation email shortly.
          </p>
        </div>
      </Container>
  );
};

export default OrderConfirmation;
