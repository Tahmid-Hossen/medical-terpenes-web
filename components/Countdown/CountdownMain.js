"use client"

import Image from 'next/image';
import Link from 'next/link';
import {Container, Row, Col} from 'react-bootstrap';
import Countdown from "@/components/Countdown/countdown";

const CountdownMain = ({title, subtitle, backgroundImage, dateTime, url}) => {
  return (
    <div
      className='countdown-area bg-img space-pt--r100 space-pb--r70 '
      // style={{
      //     backgroundImage: `url(${backgroundImage})`,
      // }}
    >
      <Container>
        <Row>
          <Col xl={6} lg={8} md={10}>
            <div className='furniture-banner custome-furniture-banner-countdown'>
              <p className=' custome-furniture-banner-countdown-offer'>Best Offer</p>
              <h4>{title}</h4>
              <p className='single-bn-title'>{subtitle}</p>
              <Countdown date={dateTime} className='countdown-two space-mb--20'/>
              <Link href={url} className='btn'>
                Shop Now
              </Link>
            </div>
          </Col>
          <Col xl={6} lg={8} md={10}>
            <div className='furniture-banner custome-furniture-banner-countdown'>
              <Image src='/assets/images/bigsale/coundown.png' className='img-fluid' width={630} height={586}
                     alt='countdown'/>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CountdownMain;
