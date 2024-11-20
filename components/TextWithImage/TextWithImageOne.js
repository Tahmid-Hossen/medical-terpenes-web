import { Container, Row, Col } from "react-bootstrap";
import YoutubePlayer from "../player/YoutubePlayer";
import Preloader from "../Preloader";
import Image from "next/image";

const TextWithImageOne = () => {
  return (
    <div className="text-image-section py-2">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="about-img scene mb-4 mb-lg-0">
              {/*<YoutubePlayer loading={<Preloader />} videoId="eaiiCVQy9zw" />*/}
              <div className="h-100 d-flex justify-content-start align-items-center my-5">
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
              {/*<Image width={100} height={100} src="/assets/images/aboutUs/about-us.png" alt="about_img"/>*/}
            </div>
          </Col>
          <Col lg={6}>
            <div className="heading-s1 space-mb--20">
              <h2 className="text-info">Who We are?</h2>
            </div>
            <p>
              Founded by a California team of experts in 2015, Medical Terpenes is a leading terpene company that
              manufactures a wide range of strain specific terpene profiles. Born naturally and organically, each
              profile is crafted with the finest ingredients.
            </p>
            <p>
              Always innovating with new strains, we have introduced revolutionary profiles now known as Sauce Terps, a terpene product created to mimic the essence of the flower. Our mission is to bring you the best possible profile, every time, satisfaction guaranteed!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TextWithImageOne;
