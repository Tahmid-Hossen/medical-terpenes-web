import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { BsCartCheckFill } from "react-icons/bs";
import { FaPencilAlt, FaLayerGroup, FaRegEnvelope } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

const IconBoxTerpenes = () => {
  return (
    <div className="icon-box-area bg--blue-two space-pt--r100 space-pb--r70">
      <Container>
        {/* <Row className="justify-content-center">
          <Col lg={6} md={8} className=" space-mb--30">
            <div className="heading-s1 text-center space-mb--20">
              <h2>Why Choose Us?</h2>
            </div>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </Col>
        </Row> */}
        <Row className="justify-content-center">
          <Col lg={4} sm={6}>
            <div className="icon-box icon-box--styleTerpenes h-100 rounded custom-shadow">
              <div className="d-flex align-items-center gap-4 m-0">
                  <Image width={100} height={100} className={""} src="/assets/images/icons/pruductivity.png" alt="objectBoundingBox" />
                {/* <div className="icon-box__icon">
                  <FaLayerGroup />
                </div> */}
                <h5>100% Product Consistency</h5>
              </div>
              <div className="icon-box__content mt-3">
                <p>
                  All of our products are created using the latest tech and standard operating procedures that surpass the industry’s best practices. Our manufacturing standards are the strictest in the industry and every profile has a 3rd party COA. We guarantee that our products to have 0% THC, 0% CBD, and 100% contaminant free.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6}>
            <div className="icon-box icon-box--styleTerpenes h-100 rounded custom-shadow">
              <div className="d-flex align-items-center gap-4 m-0">
                  <Image width={100} height={100} src="/assets/images/icons/cartMark.png" alt="objectBoundingBox" />
                {/* <div className="icon-box__icon">
                  <BsCartCheckFill />
                </div> */}
                <h5>Easy Ordering​</h5>
              </div>
              <div className="icon-box__content mt-3">
                <p>
                  We believe that a quick and consistent ordering process is one of the most important factors when buying terpenes online. Using our terpene website is simple and easy. Want to place a wholesale order? Simply send us an email or give us a call. Buy our Terps for sale Today!
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={6}>
            <div className="icon-box icon-box--styleTerpenes h-100 rounded custom-shadow">
              <div className="d-flex align-items-center gap-4">
                  <Image width={100} height={100} src="/assets/images/icons/trackingTruck.png" alt="objectBoundingBox" />
                {/* <div className="icon-box__icon">
                  <TbTruckDelivery />
                </div> */}
                <h5>100% Product Consistency</h5>
              </div>
              <div className="icon-box__content mt-3">
                <p>
                  We offer FREE SHIPPING on all domestic orders over $100. We process orders in 1-2 business days, but often the same day. Many of our customers receive shipments within three days. USPS is our standard shipping provider, but we are open to other shipping options at your request. 
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IconBoxTerpenes;
