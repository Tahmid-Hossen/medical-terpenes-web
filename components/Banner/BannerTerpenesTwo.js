import Image from 'next/image'
import {Row, Col, Card, Button} from "react-bootstrap";

const BannerTerpenesTwo = ({containerClass, bannerData}) => {
  return (
    <div className="banner-area bg-custom-2 py-5 ">
      <div className={`${containerClass ? containerClass : "container"}`}>
        <Row>
          <Col md={6}>
            <Image className="rounded-4 img-fluid" src="/assets/images/background/BackgroundBannerTerpenesTwo.png"
                   width={700} height={582} alt='what we do?'/>
          </Col>
          <Col md={6} className="mt-5 mt-md-0">
            <span className="text--primary ">Who We Are?</span>
            <h2 className="fw-bolder ">What Makes Medical Terpenes Different</h2>
            {bannerData?.map((terpene, index) => (
              <div key={index} className="d-flex justify-content-start align-items-center mb-3">
                <Image src={terpene?.icon} className="me-3" width={56} height={56} alt={`list-items-${index}`}/>
                <div className="d-flex flex-column justify-content-start align-items-start g-2">
                  <h5 className="fw-bolder">{terpene.title}</h5>
                  <p className="banner-p">{terpene.description}</p>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </div>
    </div>

  );
};

export default BannerTerpenesTwo;
