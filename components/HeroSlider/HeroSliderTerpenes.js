"use client"


import {Autoplay, Navigation, EffectFade} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from "next/image";
import {useRef} from "react";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const params = {
  effect: "fade",
  fadeEffect: {
    crossFade: true
  },
  modules: [EffectFade],
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: true
};

const HeroSliderTerpenes = ({heroSliderData}) => {
  const swiperRef = useRef(null);
  return (
    <div className="hero-slider">
      <div className="hero-slider__wrapper hero-slider__wrapper--style-two">
        {!!heroSliderData?.length ? (
          <Swiper options={params} className="hero-slider-three" ref={swiperRef}>
            {heroSliderData?.map((slide, key) => (
              <SwiperSlide className="" key={key}>
                <Image className='hero-slider__slide hero-slider__slide--style-two bg-image'
                       src={`${process.env.NEXT_PUBLIC_BASE_URL}/public${slide?.image}`} alt="slider image"
                       width={1920} height={827}/>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
      </div>
    </div>
  );
};

export default HeroSliderTerpenes;
