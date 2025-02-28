import { Container } from "react-bootstrap";
import Swiper, { SwiperSlide } from "../swiper";
import Image from "next/image";

const params = {
  loop: false,
  slidesPerView: 2,
  grabCursor: true,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 2
    },
    576: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 4
    },
    1024: {
      slidesPerView: 5
    }
  }
};

const BrandLogoTwo = ({ brandLogoData }) => {
  return (
    <div className="brand-logo-area space-pb--r100">
      <Container>
        {!!brandLogoData?.length ? (
          <Swiper options={params}>
            {brandLogoData.map((single, key) => (
              <SwiperSlide className="item" key={key}>
                <div className="cl-logo text-center">
                  <Image src={single.image} alt="cl_logo" width={100} height={100} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
      </Container>
    </div>
  );
};

export default BrandLogoTwo;
