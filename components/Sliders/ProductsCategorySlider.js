"use client"
import {Container, Row, Col} from "react-bootstrap";
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from "next/image";
import {useRef} from "react";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const ProductsCategorySlider = ({heroSliderData}) => {
  const swiperRef = useRef(null);
  return (
    <div className="hero-slider">
      <div className="hero-slider__wrapper hero-slider__wrapper--style-two">
        {!!heroSliderData?.length ? (
          <Swiper className="hero-slider-three" ref={swiperRef}>
            {heroSliderData?.map((slide, key) => (
              <SwiperSlide className="" key={key}>
                <div>
                  <Image className='hero-slider__slide hero-slider__slide--style-two bg-image'
                         src={`${slide?.backgroundImage}`} alt="slider image"
                         width={1920} height={827}/>
                  <div className="hero-slider__content-wrapper hero-slider__content-wrapper--round-space">
                    <Container>
                      <Row>
                        <Col lg={8}>
                          <div className="hero-slider__content hero-slider__content--style-two overflow-hidden">
                            {/* <h5 className="mb-3 font-weight-light sub-title">
                            {single.subtitle}
                          </h5> */}
                            <h2 className="space-mb--20 title">
                              {slide.title}
                            </h2>
                            <p className="text">{slide.text}</p>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </div>


              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
      </div>
    </div>
  );
};


export default ProductsCategorySlider;
