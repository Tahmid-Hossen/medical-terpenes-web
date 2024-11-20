import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import { IoIosCheckmarkCircle } from 'react-icons/io';

const OrderComplete = () => {
  return (
    <>
      <Breadcrumb pageTitle='Order Completed'>
        <ol className='breadcrumb align-items-center justify-content-md-end'>
          <li className='breadcrumb-item'>
            <Link href='/'>Home</Link>
          </li>
          <li className='breadcrumb-item active'>Order Completed</li>
        </ol>
      </Breadcrumb>
      <div className='order-content space-pt--r100 space-pb--r100'>
        <Container>
          <Row className='justify-content-center'>
            <Col md={8}>
              <div className='text-center order-complete'>
                <IoIosCheckmarkCircle />
                <div className='heading-s1 space-mb--20'>
                  <h3>Your order is completed!</h3>
                </div>
                <p>
                  Thank you for your order! Your order is being processed and will be completed within 3-6 hours. You
                  will receive an email confirmation when your order is completed.
                </p>
                <Link href='/products' className='btn btn-fill-out'>
                  Continue Shopping
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default OrderComplete;
