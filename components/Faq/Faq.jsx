"use client"

import Link from "next/link";
import {Container, Row, Col} from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import {MdKeyboardArrowDown} from "react-icons/md";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";


const Faq = () => {
  return (
    <>
      <Breadcrumb pageTitle="F.A.Q">
        <ol className="breadcrumb align-items-center justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active">F.A.Q</li>
        </ol>
      </Breadcrumb>
      <div className="faq-content space-pt--r100 space-pb--r100">
        <Container>
          <Row>
            <Col md={6}>
              <div className="heading-s1 mb-3 mb-md-5">
                <h3>General questions</h3>
              </div>
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
                      best way to integrate CBD into your day-to-day, still a great choice. By adding our WELLNESS line
                      of terpene profiles to your existing product, or making your own, will not only take it to the
                      next level, but allow you to control the effect.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    WHAT ARE STRAIN SPECIFIC AND FULL SPECTRUM PROFILES?
                    <MdKeyboardArrowDown/>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Plants contain naturally occurring terpenes as the base building blocks of many of our favorite
                      fragrances and flavors found around the world. Sauce Terps, with our leading manufacturing
                      capabilities and knowledge base, delivers these terpene profiles in an authentic, pure, and easy
                      use form for all.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    WHY CHOOSE SAUCE TERPS AND MEDICAL TERPENES?
                    <MdKeyboardArrowDown/>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Our team has dedicated years researching the methods of bringing terpene profiles to all consumers
                      in a healthy, full-bodied manner, and will continue to do so. We care! We believe strongly in the
                      industry and would like to see it thrive and become something special for everyone in all the
                      right ways. Last, but certainly not least is our customers. Sauce Terps is our vision to bring you
                      outstanding profiles with the best customer care. We care what you think and expect of Sauce Terps
                      and our profiles. If you have any questions, thoughts, or concerns please do not hesitate to
                      contact us.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    DO YOU SELL SAMPLES?
                    <MdKeyboardArrowDown/>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      We do! All terpene profiles have a 1ml size variation available.
                    </p>
                    <p>
                      Looking to try more than a couple profiles? We sell sample packs as well. This is a great solution
                      for you business owners and connoisseurs looking to try a wider range of profiles at discounted
                      prices! Just check out the value packs for either brand under the products tab. (Sauce Terps and
                      Medical Terpenes)
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    DO YOU HAVE A STORE FRONT?
                    <MdKeyboardArrowDown/>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      We have pick up location at 1907 N main st, Santa Ana , CA 92706 . Contact number 714-905-9681
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    WHAT ARE SHIPPING AND HANDLING TIMES?
                    <MdKeyboardArrowDown/>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      <strong>Handling Time:</strong>
                    </p>
                    <p>
                      1-3 business days.
                    </p>
                    <p>
                      <strong>Shipping Times (Continental United States) : </strong>
                    </p>
                    <p>
                      USPS 2-4 business days

                      FedEx ground and UPS ground 2-5 days
                    </p>
                    <p>
                      <strong>Alaska/Hawaii:</strong>
                    </p>
                    <p>
                      3-5 business days
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="7">
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
                      Ultra Candy is the full flavor of the fruit or candy it is named after. No cannabis note at all
                      and botanically derived for the candy lover in all of us. YUM!!
                    </p>
                    <p>
                      <strong>710</strong>
                    </p>
                    <p>
                      Our budget friendly offering contains less isolates per profile.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                  <Accordion.Header>
                    ARE ALL OF YOUR TERPENES HDT, OR DO YOU HAVE A TRUE CDT?
                    <MdKeyboardArrowDown/>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Our Live Resin profiles are HDT or CDT and can be identified by the profile name.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
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
            <Col md={6} className="mt-4 mt-md-0">
              <div className="heading-s1 mb-3 mb-md-5">
                <h3>Other questions</h3>
              </div>
              <Accordion defaultActiveKey="10" className="faq-accordion">
                <Accordion.Item eventKey="10">
                  <Accordion.Header>
                    ENTOURAGE EFFECT
                    <MdKeyboardArrowDown/>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      There are many terpenes found in nature, each one diverse, and yet they find a way to work
                      together. Almost all extracts alone lack the whole bodied characterisitics of the strains found in
                      nature. Native and cultured strains contain a host of terpenes, providing a wide range of reported
                      theraputic capabilities. When considering strains and the terpenes within them as a whole, we
                      represent them as terpene profiles. Sauce Terps profiles contain 100 or more terpenes in every
                      profile, each with their own unique traits and properties. Our goal with Sauce Terps is to deliver
                      full spectrum strain specific profiles and the unlimited possibilities that they provide in a
                      healthy wholesome form.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="11">
                  <Accordion.Header>
                    STORAGE DIRECTION
                    <MdKeyboardArrowDown/>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      We recommend all terpene profiles be stored in a cool dark place for optimal lifespan. Terpenes
                      can be frozen if needed.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="12">
                  <Accordion.Header>
                    MIXING DIRECTION
                    <MdKeyboardArrowDown/>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      For Medical Terpenes, we recommend a 1-10% ratio. For Sauce Terps, we recommend 5-15% of your
                      total mix.There are many variables involved when mixing terpenes with extracts or other mediums.
                      This will require some experimentation to find the desired level of terpene profiles needed.Our
                      Terpene profiles are very pure, so a little goes a long way! Too much and they can become very
                      overpowering.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="13">
                  <Accordion.Header>
                    MEASURING DIRECTION
                    <MdKeyboardArrowDown/>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Our profiles come with a EURO drip top for mixing convenience and measurement. If the top is
                      removed, we recommend using glass pipettes for measurement.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="14">
                  <Accordion.Header>
                    ARE THERE WHOLESALE / BULK OPTIONS?
                    <MdKeyboardArrowDown/>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Yes!

                      Sauce Terps and Medical Terpenes brands both have their own options for wholesale / bulk orders
                      through inquire only.

                      If interested please visit our wholesale page
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="15">
                  <Accordion.Header>
                    WHAT ARE MY SHIPPING OPTIONS??
                    <MdKeyboardArrowDown/>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      USPS First Class is the default shipping method.

                      FedEx ground and UPS ground are available upon request.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="16">
                  <Accordion.Header>
                    RETURNS / REFUNDS
                    <MdKeyboardArrowDown/>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Due to the nature of these consumable products, they are unable to be resold. Therefore, all sales
                      are final and are unable to be returned / refunded.

                      Exception- Orders can be refunded prior to fulfillment and shipment.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="17">
                  <Accordion.Header>
                    WHICH PROFILES ARE THE MOST GASSY OR RESEMBLE THAT OF THE FLOWER BEST?
                    <MdKeyboardArrowDown/>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Our Live Resin or Sauce Terp profiles are best for that gassy note
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="18">
                  <Accordion.Header>
                    DO YOU HAVE LAB TESTS FOR THE TERPENES?
                    <MdKeyboardArrowDown/>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Yes, we have 3rd party COAs all for our terpenes profiles.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Faq;
