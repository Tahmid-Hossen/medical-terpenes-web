"use client"

import {Container, Row, Col} from "react-bootstrap";
import YoutubePlayer from '@/components/player/YoutubePlayer';
import Image from "next/image";

export default function VideoBanner() {
  return (
    <div className="blog-post-grid-home-area bg-custom-video-container">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <div className='blog-home-area-title-custom pt-3'>
              <p className='mb-3'>How We Produce Cbd Products</p>
              <h4>Our Technology</h4>
              <div className='blog-home-area-title-hr mb-3'></div>
              <span className='text-center'>Learn more about our methodology. We were working for many years to discover best practice and happy to share our experience.</span>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} lg={9}>
            <div className="h-75 d-flex justify-content-center align-items-center my-5">
              <Image
                  src={'/assets/images/aboutUs/about-us-banner.png'}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/images/aboutUs/about-us-banner.png';
                  }}
                  className="img-fluid w-75 h-100 object-fit-cover rounded--4 mx-auto "
                  alt="big-image"
                  width={1080}
                  height={580}
              />
            </div>
            {/*<div className="video-wrapper my-5">
              <YoutubePlayer className="text-center" videoId="eaiiCVQy9zw"/>
            </div>*/}
          </Col>
        </Row>
      </Container>
    </div>
  )
}
