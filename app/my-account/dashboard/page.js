"use client"
import { Card, Col, Row } from "react-bootstrap";

import QuantityShowsCard from "@/app/my-account/_components/QuantityShowsCard";
import { getOrderCount } from "@/services/OrderService";
import { useEffect, useState } from "react";
import { RiArrowGoBackLine, RiHeart3Line, RiHourglassFill, RiShoppingCart2Line, RiTruckLine } from "react-icons/ri";
import { useSelector } from "react-redux";


const UserDashboardPage = () => {

  const {wishlistItems} = useSelector((state) => state.wishlist);
  const [orderCount, setOrderCount] = useState();


  console.log(wishlistItems?.length)

  useEffect(() => {
    const fetchOrderCount = async () => {
      try {
        const response = await getOrderCount();
        if (response.error) {
          throw new Error(response.message);
        }

        console.log(response?.data?.data)

        setOrderCount(response?.data?.data);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
        // setError(error.message);
      } finally {
        // setLoading(false);
      }
    };

    fetchOrderCount();
  }, []);



  const cardData = [
    {
      title: "Orders",
      icon: RiShoppingCart2Line,
      count: orderCount?.total_orders || 0,
      description: "Total Orders",
    },
    {
      title: "Delivered",
      icon: RiTruckLine,
      count: orderCount?.delivered_orders || 0,
      description: "Total Delivered Orders",
    },
    {
      title: "Pending",
      icon: RiHourglassFill,
      count: orderCount?.pending_orders || 0,
      description: "Total Pending Orders",
    },
    {
      title: "Return",
      icon: RiArrowGoBackLine,
      count: orderCount?.rejected_orders || 0,
      description: "Total Return Orders",
    },
    {
      title: "Wishlist",
      icon: RiHeart3Line,
      count: wishlistItems?.length,
      description: "Total Wishlist Items",
    },
  
  ];

  return (
    <Card className="my-account-content__content">
      <Card.Header className="border-button-0">
        <h3>Dashboard</h3>
        <span
          className="fw-normal"
          style={{
            fontSize: "14px",
            color: "#444444",
          }}
        >
          This Dashboard finds you all the summary about purchase
        </span>
      </Card.Header>
      <Card.Body>
        <Row>
          {cardData?.map((cardInfo, index) => (
            <Col lg={4} style={{marginBottom: "40px"}} key={index}>
              <QuantityShowsCard cardData={cardInfo}></QuantityShowsCard>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default UserDashboardPage;