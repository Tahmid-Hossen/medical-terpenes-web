"use client"
import React from 'react';
import {Button, Card} from "react-bootstrap";
import Link from "next/link";

const DefaultOrderDetailsPage = () => {
  return (
    <Card className="my-account-content__content">
      <Card.Header className="d-flex align-content-center justify-content-between">
        <h3>Order details</h3>
        <Button variant="light" className="mb-3 rounded-5 border-black border-1">
          <Link href={`/my-account/my-orders`}>Back to list</Link>
        </Button>
      </Card.Header>
      <Card.Body>
        <h5 className="mb-0 py-3">Please Go to Order Page then Select which item to view!</h5>
      </Card.Body>
    </Card>
  );
};

export default DefaultOrderDetailsPage;