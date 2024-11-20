"use client"

import React, {forwardRef} from "react";
import PropTypes from "prop-types"
import cn from "clsx";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";
import {Swiper} from "swiper/react";
import {A11y, Autoplay, Navigation, Pagination} from "swiper/modules";

// eslint-disable-next-line react/display-name
const SwiperSlider = forwardRef(
  (
    {
      options,
      children,
      className,
      navClass,
      customNav
    },
    ref
  ) => {
    const modules = options?.modules !== undefined ? options.modules : [];
    const prevClass = `prev-${navClass || "swiper-nav"}`;
    const nextClass = `next-${navClass || "swiper-nav"}`;
    const sliderOptions = {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: false,
      autoplay: options?.autoplay ? {
        delay: 2500,
        disableOnInteraction: false,
      } : false,
      watchSlidesProgress: true,
      autoHeight: true,
      breakpoints: {},
      ...options,
      modules: [Navigation, Pagination, A11y, Autoplay, ...modules],
      navigation: options?.navigation
        ? {
          prevEl: `.${prevClass}`,
          nextEl: `.${nextClass}`,
        }
        : false,
      pagination: options?.pagination
        ? {
          clickable: true,
        }
        : false,
    };

    return (
      <div
        className={cn("swiper-wrap position-relative", className)}
        ref={ref}
      >
        <Swiper {...sliderOptions}>{children}</Swiper>

        {sliderOptions?.navigation && !customNav && (
          <>
            <button
              type="button"
              className={`swiper-button-prev ht-swiper-button-nav ${prevClass}`}
            >
              <FiChevronLeft className="icon"/>
            </button>
            <button
              type="button"
              className={`swiper-button-next ht-swiper-button-nav ${nextClass}`}
            >
              <FiChevronRight className="icon"/>
            </button>
          </>
        )}
      </div>
    );
  }
);


SwiperSlider.propTypes = {
  options: PropTypes.shape({}),
  children: PropTypes.node,
  className: PropTypes.string,
  navClass: PropTypes.string,
  customNav: PropTypes.bool,
}

SwiperSlider.defaultProps = {
  navStyle: 1,
  dotStyle: 1,
};

export default SwiperSlider;