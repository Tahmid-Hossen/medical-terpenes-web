"use client";

import {Row, Col} from "react-bootstrap";
import {getDiscountPrice} from "@/lib/product";
import {Swiper, SwiperSlide} from "swiper/react";
import {useRef} from "react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import RelatedProductCard from "@/components/Product/RelatedProductCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductSliderTwo = ({title, products, items}) => {
  const swiperRef = useRef(null);

  const cartItems = [];
  const wishlistItems = [];
  const compareItems = [];
  const params = {
    loop: false,
    spaceBetween: 30,
    pagination: {
      clickable: true, // Enable clickable pagination dots
    },
    // navigation: true, // Enable navigation arrows
    modules: [Pagination, Navigation, Autoplay], // Add Pagination module
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: items ? items : 4,
      },
    },
  };

  return (
    <div className="product-slider-area space-pt--50">
      <Row>
        <Col md={6}>
          <div className="section-title space-mb--25">
            <h2>{title}</h2>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div className="product-slider-wrap">
            <Swiper {...params} className="prod-slider-two" ref={swiperRef}>
              {products.map((product) => {
                // console.log("product", product);
                const subProducts = product?.subProducts || [];
                const prices = subProducts?.map(subProduct => subProduct?.price).filter(price => price > 0);
                let discountedPrice = 0;
                let productPrice = 0;
                subProducts?.map((subProduct,key) => {
                  discountedPrice = getDiscountPrice(subProduct?.price, subProduct?.discount_price)?.toFixed(2);
                  productPrice = subProduct?.price?.toFixed(2);
                })
               /* const discountedPrice = getDiscountPrice(
                  product.price,
                  product.discount
                ).toFixed(2);
                const productPrice = product.price.toFixed(2);*/
                const cartItem = cartItems.find(
                  (cartItem) => cartItem.id === product.id
                );
                const wishlistItem = wishlistItems.find(
                  (wishlistItem) => wishlistItem.id === product.id
                );
                const compareItem = compareItems.find(
                  (compareItem) => compareItem.id === product.id
                );

                return (
                  <SwiperSlide key={product.id} className="">
                    <RelatedProductCard
                      product={product}
                      prices={prices}
                      discountedPrice={discountedPrice}
                      productPrice={productPrice}
                      cartItem={cartItem}
                      wishlistItem={wishlistItem}
                      compareItem={compareItem}
                      bottomSpace="space-mb--30"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductSliderTwo;
