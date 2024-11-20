"use client"

import Link from 'next/link';
import Image from 'next/image';
import {Container, Row, Col} from "react-bootstrap";

export default function DeliverySection() {
  return (
    <div className="banner-area space-pt-mobile-only--60 bg-custom-delivery-container py-5">
      <Container>
        <Row className="align-items-center flex-row-reverse">
          <Col md={5} className="offset-md-1">
            <div className="medium-divider d-none d-md-block clearfix"/>
            <div className="trending-text text-center text-md-start">
              <div className="heading-wrapper mb-3">
                <span>ABOUT SERVICES</span>
                <h2>Delivery Service</h2>
              </div>
              <p className="mb-4">Our certified and high quality product can now be delivered directly to your door with
                our CBD delivery service.</p>
              <Link href="other/contact-us"
                    className="radius-btn w-40 btn btn-radius staggered-animation text-uppercase slider-link card-link">
                Contact Us
              </Link>
            </div>
            <div className="medium-divider clearfix"/>
          </Col>
          <Col md={5}>
            <div className="text-center trending-img">
              <Image
                src="/assets/images/deliverySection/delivery-farm.png"
                alt="delivery_img"
                width={520}
                height={398}
                className='img-fluid'
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
