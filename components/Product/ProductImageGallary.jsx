"use client";

import Image from 'next/image';
import {Fragment, useState} from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectFade, FreeMode, Thumbs} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

const ProductImageGallary = ({product}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [index, setIndex] = useState(-1);

  if (!product || !product?.image || product?.image?.length === 0) return null;


  // Main Image Swiper settings
  const gallerySwiperParams = {
    spaceBetween: 10,
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    thumbs: {swiper: thumbsSwiper},
    modules: [EffectFade, Thumbs, FreeMode],
  };

  // Thumbnail Swiper settings
  const thumbnailSwiperParams = {
    onSwiper: setThumbsSwiper,
    spaceBetween: 10,
    slidesPerView: 4,
    touchRatio: 0.2,
    loop: product?.image.length > 0,
    slideToClickedSlide: true,
    freeMode: true,
    watchSlidesProgress: true,
  };


  return (
      <>
        <div className="product-large-image-wrapper">
          {!!product?.image?.length > 0 && (
              <Swiper {...gallerySwiperParams} className="main-slider">
                {product?.image
                    .filter((image) => image !== null && image !== '')
                    .map((image, i) => (
                        <SwiperSlide key={`image-slide-${i}`}>
                          <button className="enlarge-icon" onClick={() => setIndex(i)}>
                            <i className="icon-magnifier-add"/>
                          </button>
                          <div className="single-image">
                            <Image
                                src={image ? `${process.env.NEXT_PUBLIC_API_URL}/public${image}` : '/assets/images/default/product-image-not-available.png'}
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src = '/assets/images/default/product-image-not-available.png';
                                }}
                                className="img-fluid"
                                alt="big-image"
                                width={611}
                                height={489}
                            />
                          </div>
                        </SwiperSlide>
                    ))}
              </Swiper>
          )}
          {/*<Lightbox
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            slides={slides}
            plugins={[Thumbnails, Zoom, Fullscreen]}
          />*/}
        </div>
        <div className="product-small-image-wrapper">
          {!!product?.image?.length > 0 && (
              <Swiper {...thumbnailSwiperParams}>
                {product?.image
                    .filter((image) => image !== null && image !== '')
                    .map((image, i) => (
                        <SwiperSlide key={i}>
                          <div className="single-image">
                            <Image
                                src={image ? `${process.env.NEXT_PUBLIC_API_URL}/public${image}` : '/assets/images/default/product-image-not-available.png'}
                                onError={(e) => {
                                  e.target.onerror = null;
                                  e.target.src = '/assets/images/default/product-image-not-available.png';
                                }}
                                className="img-fluid"
                                alt="small-image"
                                width={611}
                                height={489}
                            />
                          </div>
                        </SwiperSlide>
                    ))}
              </Swiper>
          )}
        </div>
      </>
  );
};

export default ProductImageGallary;

