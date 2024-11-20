"use client"

import {Container, Row, Col} from "react-bootstrap";
import {Swiper, SwiperSlide} from "swiper/react";
import {useRef} from "react";
import {Autoplay, Navigation} from "swiper/modules";
import ProductRating from "@/components/Product/ProductRating";
import Image from "next/image";

const reviews = [
  {
    "id": 1,
    "name": "Steve H.",
    "review": "All I can say is wow. I got Lemon Skunk (its delicious) and Indica Island and both are great. Be careful, a little goes a long way. Also like to say thanks for the sample. Will absolutely order again!",
    "rating": 5,
    "isHighlighted": false
  },
  {
    "id": 2,
    "name": "Dale B.",
    "review": "I ordered Strawberry Diesel & Bubble Gum Glue. Tried both and very happy. Great way to personalize your experience. Many options which I am excited to try.",
    "rating": 5,
    "isHighlighted": true
  },
  {
    "id": 3,
    "name": "Jackson C.",
    "review": "The smell and taste is very strong, and works very well to make my medicine cartridges . I would describe the taste as a grape flavored hard-chew-able vitamin and is overall a 10/10 purchase. It also arrived quite quickly.",
    "rating": 5,
    "isHighlighted": true
  },
  {
    "id": 4,
    "name": "Amara R.",
    "review": "The company carries one of the best products in the market, especially their medical terpene products. Highly recommend the company I have nothing but pleased with every single product I purchased from them. Excited to add their live resin products to my existing products. They continue to amaze with their innovation",
    "rating": 5,
    "isHighlighted": false
  },
  {
    "id": 5,
    "name": "Justin G.",
    "review": "So this vendor is brand new to me, but I can’t recommend them enough. Their cannabis derived terpenes (aka CDT’s) are fantastic ! I can’t speak to their other products as I haven’t tried them. But if you’re making your own carts or just reintroducing terps back into your concentrate, CDT’s are the way to go anyways",
    "rating": 5,
    "isHighlighted": false
  },
  {
    "id": 6,
    "name": "Diana Z.",
    "review": "Wow! Love the white runts looking forward to the other options. Will keep you posted. Super knowledgeable staff. Aside from their awesome customer service these guys are really changing the game with their live resin Terpene profiles.",
    "rating": 5,
    "isHighlighted": false
  },
];

const Testimonial = () => {
  const swiperRef = useRef(null);

  return (
    <div className="icon-box-area bg--blue-two space-pt--r100 space-pb--r70 TestimonialCustomCard overflow-hidden">
      <Row className="justify-content-center">
        <Col lg={6} md={8} className=" space-mb--30">
          <div className="heading-s1 text-center space-mb--20">
            <p className="text--primary">Testimonial</p>
            <h2>Our Happy Customers</h2>
          </div>
          <p className="text-center mx-3">
            Learn more about our methodology. We were working for many years to discover best practice and happy to
            share our experience.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg={9} sm={6}>
          <Container className="testimonial-wrap">
            {!!reviews?.length ? (
              <Swiper
                className="testimonial-one" ref={swiperRef}
                slidesPerView='auto'
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  375: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
                modules={[Navigation, Autoplay]}>

                {reviews.map((review, key) => (
                  <SwiperSlide className="testimonial-box text-center" key={key}>
                    <div className="icon-box icon-box--style2 testimonialBgHoverEffect rounded-2">
                      <div className="icon-box__content">
                        <div className="testimonialInnerBox">
                          <div className="testimonialRating">
                            <ProductRating ratingValue={review.rating}/>
                          </div>
                          <div className="d-flex gap-3">
                            <div className="card-left-site"></div>
                            <p className="lh-base testimonialBlogInfo">
                              {review.review}
                            </p>
                          </div>
                          <div className="mt-4">
                            <h5 className="text-start testimonialClientName">{review.name}</h5>
                          </div>
                          <div className="testimonialsIcons">
                            <Image width={100} height={100} src="/assets/images/icons/tagIcon.png" alt="testimonialsIcons"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : null}
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default Testimonial;
