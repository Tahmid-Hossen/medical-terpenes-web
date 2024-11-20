"use client"


import {Autoplay, Navigation} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import Image from "next/image";
import {useRef} from "react";
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const HeroSliderHome = ({heroSliderData}) => {
  const swiperRef = useRef(null);
  return (
    <div className="hero-slider">
      <div className="hero-slider__wrapper hero-slider__wrapper--style-two">
        {!!heroSliderData?.length ? (
          <Swiper className="hero-slider-three" ref={swiperRef}
                  effect={"fade"}
                  fadeEffect={{crossFade: true}}
                  loop={true}
                  speed={1000}
                  autoplay={{delay: 5000, disableOnInteraction: false}}
                  pagination={true}
                  modules={[Navigation, Autoplay]}
          >
            {heroSliderData?.map((slide, key) => {
              return (
                <SwiperSlide className="" key={key}>
                  <Image className='w-full h-auto bg-image'
                         src={`http://backend-server.nextechlify.xyz/public${slide?.image}`}
                         alt={slide?.slug || 'default'}
                    //      src="http://backend-server.nextechlify.xyz/public/uploads/banners/1726078551078.jpeg"
                    //      alt="slider image"
                         width={1920} height={827}
                         priority
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
        ) : null}
      </div>
    </div>
  );
};

export default HeroSliderHome;
