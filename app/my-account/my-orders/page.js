"use client"
import React from 'react';
import {Card} from "react-bootstrap";
import OrderTable from "@/app/my-account/_components/OrderTable";

const MyOrdersPage = () => {
  return (
    <Card className="my-account-content__content">
      <Card.Header className="border-button-0">
        <h3>My Orders</h3>
        <span
          className="fw-normal"
          style={{
            fontSize: "14px",
            color: "#444444",
          }}
        >
                          This Dashboard finds you all the summary about
                          purchase
                        </span>
        <br/>
        <span
          className="fw-normal"
          style={{
            fontSize: "14px",
            color: "#F94144",
          }}
        >
                          Your order will be processed once the payment is done.
                          Click here to add your payment details.
                        </span>
      </Card.Header>
      <Card.Body>
        <OrderTable/>
      </Card.Body>
    </Card>
  );
};

export default MyOrdersPage;