import Link from "next/link";
import {Container, Row, Col} from "react-bootstrap";
import {FaRegEnvelopeOpen, FaMobileAlt} from "react-icons/fa";
import {TbLocation} from "react-icons/tb";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import ContactForm from "@/app/other/contact-us/component/contact-form";

const ContactUs = () => {
  return (
    <>
      <Breadcrumb pageTitle="Contact Us">
        <ol className="breadcrumb align-items-center justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active">Contact Us</li>
        </ol>
      </Breadcrumb>
      <div className="contact-content space-pt--r100 space-pb--r100">
        <div className="contact-icon-area space-pb--r70">
          <Container>
            <Row>
              <Col xl={4} md={6}>
                <div className="contact-wrap">
                  <div className="contact-wrap__icon">
                    {/* <FaRegMap /> */}
                    <TbLocation/>
                  </div>
                  <div className="contact-wrap__text">
                    <span>Address</span>
                    <p>1907 N Main St, Santa Ana CA 92706</p>
                  </div>
                </div>
              </Col>
              <Col xl={4} md={6}>
                <div className="contact-wrap">
                  <div className="contact-wrap__icon">
                    <FaRegEnvelopeOpen/>
                  </div>
                  <div className="contact-wrap__text">
                    <span>Email Address</span>
                    <a href="mailto:info@sitename.com">info@medicalterpenes.com </a>
                  </div>
                </div>
              </Col>
              <Col xl={4} md={6}>
                <div className="contact-wrap">
                  <div className="contact-wrap__icon">
                    <FaMobileAlt/>
                  </div>
                  <div className="contact-wrap__text">
                    <span>Phone</span>
                    <p>866-51-83777(TERPS)</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="contact-form-map-area">
          <Container>
            <Row>
              <Col lg={6}>
                <div className="heading-s1 space-mb--20">
                  <h2>Get In touch</h2>
                </div>
                <p className="leads">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus blandit massa enim. Nullam id varius nunc id varius
                  nunc.
                </p>
                <ContactForm/>
              </Col>
              <Col lg={6} className="pt-2 pt-lg-0 mt-4 mt-lg-0">
                <div className="google-map">
                  <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.94050160161!2d-117.86979802483577!3d33.76220333299053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd9b06f987db1%3A0x6a670c670e65c1f8!2s1907%20N%20Main%20St%2C%20Santa%20Ana%2C%20CA%2092706%2C%20USA!5e0!3m2!1sen!2sbd!4v1719578883760!5m2!1sen!2sbd"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
