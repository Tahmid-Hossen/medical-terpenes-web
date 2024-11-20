"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Modal, Row, Spinner, Table } from "react-bootstrap";

const OrderDetailsCard = ({orderId}) => {
  const [order, setOrder] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPaymentSubmissionModal, setShowPaymentSubmissionModal] = useState(false);
  const [showPaymentApproval, setShowPaymentApproval] = useState(false);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/orders/${orderId}`);
        // const response = await getOrderDetails('6719e96ca66d03fe14e68840')
        if (!response.ok) {
          throw new Error('Failed to fetch order details');
        }
        const data = await response.json();
        setOrder(data?.data);
        console.log(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetails();
  }, [orderId]);

  const onCloseModal = () => {
    setShowPaymentSubmissionModal(false)
  }


   const handlePaymentInfoSubmit = () => {
    
    setShowPaymentSubmissionModal(false)
    setShowPaymentApproval(true)
  }





  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const discountPercentage = order.coupon ? 20 : 0;
  const discountedTotal = order.sub_total - (order.sub_total * (discountPercentage / 100));

  const {billing_details, shipping_details, code, order_status} = order;

    const getStatusStyles = (order_status) => {
      let backgroundColor = "#F97316"; // Default to "Processing" color
      let suggestion = "Order is being processed.";

      if (order_status === "Shipped") {
        backgroundColor = "#22C55E"; // Darker green for shipped
        suggestion = "Order has been shipped. Please track the delivery.";
      } else if (order_status === "Fulfillment") {
        backgroundColor = "#22C55E"; // Lighter green for fulfillment
        suggestion = "Order is being fulfilled. It will ship soon.";
      } else if (order_status === "Reject") {
        backgroundColor = "#DC2626"; // Red color for rejection
        suggestion = "Order has been rejected. Please contact support.";
      }

      return { backgroundColor, color: "#fff", suggestion };
    };

    // Usage in the Button component
  const { backgroundColor, color, suggestion } = getStatusStyles(order_status);

  


  return (
    <>

      <Card.Header className="d-flex align-content-center justify-content-between">
        <h3>{code ? code : ''} Order details</h3>

 {/* <Link href={`/my-account/my-orders`}>{Processing} </Link> */}
        {/* <Button variant="light" className="mb-3 rounded-5 border-black border-1">
          <Link href={`/my-account/my-orders`}>{order_status} </Link>
        </Button> */}

        <Button 
          variant="light" 
          className="mb-3 rounded-5 border-black border-0"
          style={{ backgroundColor, color }}
          title={suggestion} // Optional: Tooltip suggestion
        >
          {order_status} 
          {/* Shipped */}
        </Button>
          

        <Button variant="light" className="mb-3 rounded-5 border-black border-1">
          <Link href={`/my-account/my-orders`}>Back to list</Link>
        </Button>
      </Card.Header>
      <Card.Body>
        <Container className="my-4">
          <Row>
            <Col lg={7}>
              <Row>
                <Card className="p-3 mb-4 border-0 productSummaryCardShadow">
                  <Table responsive className="my-3">
                    <thead>
                    <tr>
                      <th>Products</th>
                      <th>Qty</th>
                      <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {order?.products?.map((product) => (
                      <tr key={product?._id}>
                        <td>
                          <div className="d-flex align-items-center">
                            <div style={{width: "60px", height: "60px", marginRight: "10px"}}>
                              <Image
                                src={ product?.image ? `${process.env.NEXT_PUBLIC_API_URL}/public/${product?.image}` : "/assets/images/place_holder_product_image.webp"} 
                                alt={product?.name}
                                className="w-100 h-100 rounded-2 shadow-sm"
                                width={100}
                                height={100}
                              />
                            </div>
                            <div>
                              <strong className="--ff-manrope mb-1" style={{fontSize: "14px", color: "#000000"}}>
                                {product?.product?.name}
                              </strong>
                              <br/>
                              <span
                                style={{fontSize: "14px", color: "#000000", fontWeight: "300", marginBottom: "4px"}}>
                              Volume: 5ml
                            </span>
                              <br/>
                              <span style={{fontSize: "14px", color: "#000000", fontWeight: "300"}}>
                              Warranty: 6 months
                            </span>
                            </div>
                          </div>
                        </td>
                        <td>{product?.quantity}</td>
                        <td>${(product?.price * product?.quantity).toFixed(2)}</td>
                      </tr>
                    ))}
                    </tbody>
                  </Table>
                </Card>
              </Row>

              <Row className="productSummaryCardShadow">
                <Col md={6} className="ms-0 me-0 ps-0 pe-0">
                  <Card className="h-100 rounded-0 border-bottom-0 border-start-0 border-top-0">
                    <Card.Header className="bg-white border-bottom">
                      <h5 className="mb-0 py-3">Billing Address</h5>
                    </Card.Header>
                    <Card.Body>
                      <h6 className="mb-1 secondary-order-title">
                        {billing_details?.first_name} {billing_details?.last_name}
                      </h6>
                      <p
                        className="mb-4 secondary-order-dis">{billing_details?.city}, {billing_details?.street_address}, {billing_details?.country}</p>
                      <p className="mb-1 secondary-order-title">Email:</p>
                      <p className="mb-2 secondary-order-dis">{billing_details?.email}</p>
                      <p className="mb-1 secondary-order-title">Phone:</p>
                      <p className="mb-0 secondary-order-dis">{billing_details?.phone}</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6} className="ms-0 me-0 ps-0 pe-0">
                  <Card className="h-100 rounded-0 border-bottom-0 border-end-0 border-top-0">
                    <Card.Header className="bg-white border-bottom">
                      <h5 className="mb-0 py-3">Shipping Address</h5>
                    </Card.Header>
                    <Card.Body>
                      <h6 className="mb-1 secondary-order-title">
                        {shipping_details?.first_name} {shipping_details?.last_name}
                      </h6>
                      <p
                        className="mb-4 secondary-order-dis">{shipping_details?.city}, {shipping_details?.street_address}, {shipping_details?.country}</p>
                      <p className="mb-1 secondary-order-title">Email:</p>
                      <p className="mb-2 secondary-order-dis">{shipping_details?.email}</p>
                      <p className="mb-1 secondary-order-title">Phone:</p>
                      <p className="mb-0 secondary-order-dis">{shipping_details?.phone}</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>


            <Col lg={5}>
              <Card className="p-2 bg-dark text-white">
                <h5>ORDER SUMMARY</h5>
                <hr />
                <Row className=" border-bottom py-2">
                  <Col>Subtotal:</Col>
                  <Col className="text-end ">${order?.sub_total?.toFixed(2)}</Col>
                </Row>
                <Row className=" border-bottom py-2">
                  <Col>Discount:</Col>
                  <Col className="text-end">{discountPercentage}%</Col>
                </Row>
                <Row className=" border-bottom py-2">
                  <Col>Shipping:</Col>
                  <Col className="text-end">Free</Col>
                </Row>
                <Row className=" py-2">
                  <Col>Payment:</Col>
                  <Col className="text-end text-danger" >{order.payment_status}</Col>
                </Row>
                {
                  showPaymentApproval ?

                  <Row className="py-2">
                  <Col>Order Status:</Col>
                  <Col className="text-end text-warning"  >Waiting For  Approval</Col>
                </Row>

                : 

                <Row className=" py-2">
                  <Col>Payment Status:</Col>
                  <Col className="text-end text-warning">{order.payment_status}</Col>
                </Row>

                }
                

                 <Row className=" py-2">
                  <Col>Payment Type:</Col>
                  <Col className="text-end">{order.payment_type}</Col>
                </Row>
                <Row className="">
                  <Col>
                    <strong>Total:</strong>
                  </Col>
                  <Col className="text-end">
                    <strong>${discountedTotal.toFixed(2)}</strong>
                  </Col>
                </Row>
              </Card>

              {
                order?.payment_type === 'ACH/WT' && 
                <>
              {/* <Card className="p-2 mt-3"> */}
              <div className="mt-4 bank-details text-center">
                  <h5 className='pb-2'>BANK DETAILS</h5>
                  <table className="bank-info table-bordered w-100">
                    <tbody>
                    <tr>
                      <td className="p-2 ">Bank:</td>
                      <td className="p-2 ">Chase</td>
                    </tr>
                    <tr>
                      <td className="p-2 ">Account number:</td>
                      <td className="p-2 ">615230585</td>
                    </tr>
                    <tr>
                      <td className="p-2 ">Sort code:</td>
                      <td className="p-2 ">322271627</td>
                    </tr>
                    <tr>
                      <td className="p-2 ">BIC:</td>
                      <td className="p-2 ">CHASUS33</td>
                    </tr>
                    <tr>
                      <td className="p-2 ">IBAN:</td>
                      <td className="p-2 ">CHASUS33</td>
                    </tr>
                    </tbody>
                  </table>
              </div>  


              

             {/* </Card> */}

               <div className="buttons pt-4 d-flex justify-content-center">
                  <button className="btn btn-gradient btn-block"  onClick={() => setShowPaymentSubmissionModal(true)} >Submit Your Payment Information</button>
                </div>
                </>

              }


              
            </Col>
          </Row>
        </Container>
      </Card.Body>

      <Modal show={showPaymentSubmissionModal} onHide={onCloseModal}  centered >
        <Modal.Body>

          <div className='payment-option rounded space-mt--20'>

           
           <form>
                    <div className='mb-3 px-3  justify-content-between'>
                       <h4 className='text-start space-mb--20'>Confirm Your Payment</h4>
 
                      <div className='form-group py-2'>
                        <label htmlFor='first_name'>Transaction ID*</label>
                        <input
                          type='text'
                          required
                          className='form-control'
                          name='first_name'
                          id='first_name'
                          placeholder='Transaction ID'
                        />
                      </div>
                      <div className='form-group py-2'>
                        <label htmlFor='last_name'>Account Name*</label>
                        <input
                          type='text'
                          required
                          className='form-control'
                          name='last_name'
                          id='last_name'
                          placeholder='Account Name'
                        />
                      </div>
                      <div className='form-group py-2'>
                        <label htmlFor='last_name'>Account Number*</label>
                        <input
                          type='text'
                          required
                          className='form-control'
                          name='last_name'
                          id='last_name'
                          placeholder='Account Number'
                
                        />
                      </div>
                    </div>

                    </form>

            <div className="buttons px-3 d-flex justify-content-start">
              <button className="btn btn-block" style={{ backgroundColor: "#F94144", borderRadius: "50px", color:"#fff"} } onClick={() => setShowPaymentSubmissionModal(false)}>Cancel
              </button>
              <button className="btn btn-gradient btn-block" onClick={() => handlePaymentInfoSubmit() }>Submit</button>
            </div>
          </div>

        </Modal.Body>
      </Modal>

    </>

  );
};

export default OrderDetailsCard;
