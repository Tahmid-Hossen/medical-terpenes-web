"use client"
import Image from 'next/image'
import {Row, Col, Card, Button} from "react-bootstrap";

const BannerTerpenesThree = ({containerClass, bannerData, bannerDataTwo}) => {
  return (
    <div className="banner-area bg-custom-three py-5">
      <div className={`${containerClass ? containerClass : "container"}`}>
        <Row className="justify-content-center">
          <Col lg={6} md={8} className=" space-mb--30">
            <div className="heading-s1 text-center space-mb--20">
              <p className="text--primary">About Us</p>
              <h1 className="w-75 mx-auto">Why Choose Medical Terpenes ? </h1>
            </div>
            <p className="text-center">
              Our products are certified, we care about quality and we are extremely proud of our laboratory. We are
              carefully managing each stage of manufacturing process, formulation and ingredients.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="chooseMedicalTerpenesBanner-md">
            <Image className="rounded-4" src="/assets/images/background/BackgroundBannerTerpenesTree.png" width={300}
                   height={300} alt='choose'/>
          </Col>
        </Row>
        <Row className="align-items-center" style={{marginTop: '40px'}}>
          <Col md={6} lg={4}>
            {bannerData.map((terpene, index) => (
              <div key={index} className="d-flex justify-content-start align-items-start"
                   style={{marginBottom: '64px'}}>
                <Image src={terpene?.icon} className="me-3" width={56} height={56} alt={`list-items-${index}`}/>
                <div className="d-flex flex-column justify-content-start align-items-start g-2">
                  <h5 className="fw-bolder">{terpene.title}</h5>
                  <p className="mt-2 banner-p">{terpene.description}</p>
                </div>
              </div>
            ))}
          </Col>
          <Col md={4} className="chooseMedicalTerpenesBanner-lg">
            <Image className="rounded-4 img-fluid" src="/assets/images/background/BackgroundBannerTerpenesTree.png"
                   width={454} height={440} alt='middle-image'/>
          </Col>
          <Col md={6} lg={4} className="mt-5 mt-md-0">
            {bannerDataTwo.map((terpene, index) => (
              <div key={index} className="d-flex justify-content-start align-items-start"
                   style={{marginBottom: '64px'}}>
                <Image src={terpene?.icon} className="me-3" width={56} height={56} alt={`list-items-${index}`}/>
                <div className="d-flex flex-column justify-content-start align-items-start g-2">
                  <h5 className="fw-bolder">{terpene.title}</h5>
                  <p className="mt-2 banner-p">{terpene.description}</p>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </div>
    </div>

  );
};

export default BannerTerpenesThree;
