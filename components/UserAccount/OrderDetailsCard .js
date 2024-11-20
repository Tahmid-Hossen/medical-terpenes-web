// components/OrderDetailsCard.js
import Image from "next/image";
import React from "react";
import { Container, Row, Col, Card, Table, Button } from "react-bootstrap";

const OrderDetailsCard = () => {
  return (
    <Container className="my-4">
      <Row >
        <Col lg={8}>
            <Row>
            <Card className="p-3 mb-4 border-0 productSummaryCardShadow">
            <Table responsive className="my-3 ">
              <thead>
                <tr>
                  <th>Products</th>
                  <th>Qty</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                      <div
                        style={{
                          width: "60px",
                          height: "60px",
                          marginRight: "10px",
                        }}
                      >
                        <Image width={100} height={100}
                          src="/assets/images/Dashboard/product-one.png"
                          alt="product1"
                          className="w-100 h-100 rounded-2 shadow-sm"
                        />
                      </div>
                      <div>
                        <strong
                          className="--ff-manrope mb-1"
                          style={{ fontSize: "14px", color: "#000000" }}
                        >
                          Strawberry Diesel
                        </strong>

                        <br />
                        <span
                          style={{
                            fontSize: "14px",
                            color: "#000000",
                            fontWeight: "300",
                            marginBottom: "4px"
                          }}
                        >
                          {" "}
                          Volume: 5ml
                        </span>
                        <br />
                        <span
                          style={{
                            fontSize: "14px",
                            color: "#000000",
                            fontWeight: "300",
                          }}
                        >
                          Warranty: 6 month
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>01</td>
                  <td>$39.00</td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex align-items-center">
                    <div
                        style={{
                          width: "60px",
                          height: "60px",
                          marginRight: "10px",
                        }}
                      >
                        <Image width={100} height={100}
                          src="/assets/images/Dashboard/product-one.png"
                          alt="product1"
                          className="w-100 h-100 rounded-2 shadow-sm"
                        />
                      </div>
                      <div>
                        <strong>Live Resin Terpenes White Runtz</strong>
                        <br />
                        Volume: 5ml
                        <br />
                        Warranty: 6 month
                      </div>
                    </div>
                  </td>
                  <td>01</td>
                  <td>$49.00</td>
                </tr>
              </tbody>
            </Table>
            </Card>
            </Row>

            <Row className="productSummaryCardShadow">
           <Col md={6} className="ms-0 me-0 ps-0 pe-0 ">
          <Card className="h-100 rounded-0 border-bottom-0 border-start-0 border-top-0">
            <Card.Header className="bg-white border-bottom ">
              <h5 className="mb-0 py-3">Billing Address</h5>
            </Card.Header>
            <Card.Body>
              <h6 className="mb-1 secondary-order-title">Dainne Russell</h6>
              <p className="mb-4 secondary-order-dis">13th Street 47 W 13th St, New York, NY 10011, USA</p>
              <p className="mb-1  secondary-order-title">
                Email:
              </p>
              <p className="mb-2 secondary-order-dis ">
               ressell@gmail.com
              </p>
              <p className="mb-1  secondary-order-title">
                Phone:
              </p>
              <p className="mb-0 secondary-order-dis ">
                +1-212-456-7890
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="ms-0 me-0 ps-0 pe-0  ">
          <Card className="h-100 rounded-0 border-bottom-0 border-end-0 border-top-0" >
            <Card.Header className="bg-white border-bottom ">
              <h5 className="mb-0 py-3">Shipping Address</h5>
            </Card.Header>
            <Card.Body>
            <h6 className="mb-1 secondary-order-title">Nick Jone</h6>
              <p className="mb-4 secondary-order-dis">3rd North 75 3rd Ave, New York, NY 10003, USA</p>
              <p className="mb-1  secondary-order-title">
                Email:
              </p>
              <p className="mb-2 secondary-order-dis ">
              dainnel@gmail.com
              </p>
              <p className="mb-1  secondary-order-title">
                Phone:
              </p>
              <p className="mb-0 secondary-order-dis ">
              +1-321-456-7890
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
        </Col>
        <Col lg={4}>
          <Card className="p-3 bg-dark text-white">
            <h5>ORDER SUMMARY</h5>
            <Row className="my-2 border-bottom">
              <Col>Subtotal:</Col>
              <Col className="text-end py-3">$88.00</Col>
            </Row>
            <Row className="my-2 border-bottom">
              <Col>Discount:</Col>
              <Col className="text-end py-3">20%</Col>
            </Row>
            <Row className="my-2 border-bottom py-3">
              <Col>Shipping:</Col>
              <Col className="text-end">Free</Col>
            </Row>
            <Row className="my-2 py-3">
              <Col>Payment:</Col>
              <Col className="text-end">Wire</Col>
            </Row>
            <Row className="my-2">
              <Col>
                <strong>Total:</strong>
              </Col>
              <Col className="text-end">
                <strong>$70.00</strong>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderDetailsCard;
