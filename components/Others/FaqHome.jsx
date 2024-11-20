"use client"

import {Container, Row, Col} from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import {MdKeyboardArrowDown} from "react-icons/md";


const FaqHome = () => {
  return (
    <div className="faq-content-grid-home-area bg-faq-section space-pt--r100 space-pb--r100">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className='faq-home-area-title-custom pt-3'>
              <p className='mb-1'>FAQ</p>
              <h5>Frequently Asked Question</h5>
              <span className='text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</span>
            </div>
          </Col>
          <Col md={6}>
            {/* <div className="heading-s1 mb-3 mb-md-5">
              <h3>General questions</h3>
            </div> */}
            <Accordion defaultActiveKey="0" className="faq-accordion">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  WHAT ARE TERPENES?
                  <MdKeyboardArrowDown/>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    All of our products are THC FREE. Our products contain 0.00%THC.
                  </p>
                  <p>
                    <strong>Terpenes</strong> are a large and diverse class of organic compounds, produced by a large
                    variety of plants. They often have a strong odor and protect the plants that produce them from
                    herbivores. Terpenes are the primary component of essential oils and have been widely used for
                    generations for flavoring and in homeopathic medicine such as aromatherapy. While not unique to
                    cannabis, what is unique about the terpenes found in cannabis is the amount of terpenes found per
                    strain.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  TERPENES AND CBD
                  <MdKeyboardArrowDown/>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    When terpenes are mixed with cannabidiol or CBD, as it is commonly referred to, they are said to
                    work synergistically together and amplify the desired effect. This is commonly referred to as the
                    “encourage effect”. Understanding the terpene profile added to your CBD will help you better
                    understand the effects it will have on your body, a road map to the benefits, if you will.
                  </p>
                  <p>
                    It is widely believed that whole plant, or full spectrum CBD, is the best way to introduce CBD to
                    your health regimen. That said, there are a lot of CBD products on the market today that are made
                    from CBD isolate that do not have the terpenes found in whole plane extracts. While it’s not the
                    best way to integrate CBD into your day-to-day, still a great choice. By adding our WELLNESS line of
                    terpene profiles to your existing product, or making your own, will not only take it to the next
                    level, but allow you to control the effect.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  WHAT IS THE DIFFERENCE BETWEEN SAUCE TERPS, MEDICAL TERPENES, ULTRA CANDY AND 710 TERPENE?
                  <MdKeyboardArrowDown/>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    <strong>Sauce Terps</strong>
                  </p>
                  <p>
                    Sauce Terps is Loud and Dank and has a nose just like the flower. Our best botanically derived
                    profile for the cannabis enthusiast.
                  </p>
                  <p>
                    <strong>Medical Terpenes </strong>
                  </p>
                  <p>
                    Medical Terpenes is slightly muted as compared to Sauce Terps in the overall cannabis notes.
                    Botanically derived with the best flavors and effect around.
                  </p>
                  <p>
                    <strong>Ultra Candy</strong>
                  </p>
                  <p>
                    Ultra Candy is the full flavor of the fruit or candy it is named after. No cannabis note at all and
                    botanically derived for the candy lover in all of us. YUM!!
                  </p>
                  <p>
                    <strong>710</strong>
                  </p>
                  <p>
                    Our budget friendly offering contains less isolates per profile.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  WHAT ARE THE INTERNATIONAL SHIPPING RATES?
                  <MdKeyboardArrowDown/>
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    International shipping cost varies based on the order and destination
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FaqHome;
