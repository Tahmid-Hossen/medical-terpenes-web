"use client";
import React, {useState} from 'react';
import {Card} from "react-bootstrap";
import {useRouter} from 'next/navigation';

const OrderTrackPage = () => {
  const [orderId, setOrderId] = useState('');
  const router = useRouter();

  const handleInputChange = (e) => {
    setOrderId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (orderId) {
      router.push(`/my-account/order-details/${orderId}`);
    }
  };

  return (
    <Card className="my-account-content__content">
      <Card.Header>
        <h3>Order Track</h3>
        <span
          className="fw-normal"
          style={{
            fontSize: "14px",
            color: "#444444",
          }}
        >
          Track Your Order Here
        </span>
        <br/>
      </Card.Header>
      <Card.Body>
        <div className="myaccount-table table-responsive text-center">
          <div className="card-body custom-shadow" style={{
            border: "1px solid #D4D4D4"
          }}>
            <h5 className="card-title text-start fw-medium"
                style={{fontSize: "20px", color: "#262626", marginBottom: "40px"}}>
              Track Your Order
            </h5>
            <form className="input-group mb-3 w-75" onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control w-75"
                placeholder="Order no"
                value={orderId}
                onChange={handleInputChange}
              />
              <div className="input-group-append w-25">
                <button
                  className="btn btn-info"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </form>

            <p className="text-start">Your order no: </p>
            <p
              className="fw-medium text-start "
              style={{
                fontSize: "14px",
                color: "#A3A3A3",
                marginTop: "80px"
              }}
            >
              No order track record
            </p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default OrderTrackPage;
