import Link from 'next/link'
import React from 'react'
import {Button, Col, Container, Row} from 'react-bootstrap'

const FreeConsultation = () => {
  return (
    <Container className='rounded-5 text-white py-2 px-5'
               style={{background: 'linear-gradient(90deg, rgba(0, 206, 205, 0.66) 0%, #00B5DC 50.29%)'}}>
      <Row className='py-md-4 py-2 px-md-5 px-3'>
        <Col md={8} className="text-md-end">
          <div className="text-center text-md-start">
            <h2 className="Free-Consult">Do you have more questions?​
              You can call us for a free consultation!</h2>
          </div>
        </Col>
        <Col md={4} className='d-flex justify-content-center align-items-center mt-3'>
          {/* <button className='btn btn-light text-dark fw-medium fs-6 rounded-5 align-middle'>Contact Us</button> */}
          <Link href="/other/contact-us"
                className="btn btn-light text-dark fw-medium fs-6 rounded-5 align-middle"> Contact Us </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default FreeConsultation