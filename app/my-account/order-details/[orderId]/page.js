"use client"
import React from 'react';
import {Button, Card} from "react-bootstrap";
import OrderDetailsCard from "@/app/my-account/_components/OrderDetailsCard ";
import Link from "next/link";


const OrderDetailsPage = ({params: {orderId}}) => {
  return (
    <Card className="my-account-content__content">
      <OrderDetailsCard orderId={orderId}/>
    </Card>
  );
};

export default OrderDetailsPage;