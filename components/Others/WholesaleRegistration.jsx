"use client"

import Link from "next/link";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import {useState} from "react";
import WholeSaleLogin from "@/app/wholesale/_components/WholeSaleLogin";


const WholesaleRegistration = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      {/* breadcrumb */}
      <Breadcrumb pageTitle="WHOLESALE">
        <ol className="breadcrumb align-items-center justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/" prefetch={false}>
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active">Wholesale</li>
        </ol>
      </Breadcrumb>
      <Container style={{marginTop: '40px', marginBottom: '40px'}}>
        <Row>
          <Col className="text-center d-flex flex-column">
            <h1 className="fw-bold" style={{fontSize: '40px', textAlign: 'center', lineHeight: '46.88px'}}>WHOLESALE
              REGISTRATION</h1>

            {/* Steps */}
            {[...Array(5)].map((_, index) => (
                <div className="wholesale-registration-step my-3" key={index}>
                  <div
                      className="d-flex align-items-center mx-auto rounded-4 shadow-xl"
                      style={{
                        width: '100%',
                        maxWidth: '744px',
                        height: '136px',
                        borderRadius: '20px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)'
                      }}
                  >
                    <div className="text-center px-4" style={{width: '10%'}}>
                      <span style={{
                        color: '#00B5DC',
                        fontWeight: 600,
                        fontSize: '56px',
                        textAlign: "center"
                      }}>{index + 1}</span>
                    </div>
                    <div style={{width: '90%'}}>
                      <p className="fw-normal fs-6 mb-0 ms-2">
                        {[
                          'Complete the wholesale registration form.',
                          'Wait for our team’s approval. It takes around 1-2 working days.',
                          'Once approved, sign in using the email and password created during registration.',
                          'Access the wholesale store to get bulk products and customize flavors.',
                          'Purchase wholesale products and other items in our store.',
                        ][index]}
                      </p>
                    </div>
                  </div>
                </div>
            ))}
            <div
                className="d-flex mx-auto justify-content-end align-items-baseline"
                style={{
                  width: '100%',
                  maxWidth: '744px',
                  height: '136px',
                }}
            >
              <button
                  className="btn-wholesale radius-btn btn btn-radius staggered-animation text-uppercase slider-link my-5 align-self-end"
                  onClick={() => setModalShow(true)}
              >
                Register as a Wholesaler
              </button>
            </div>

          </Col>
        </Row>

        <div className="row" style={{marginTop: '80px'}}>
          <div className="col-sm-12">
            <div className="wholesale-content">
              <h1 style={{fontWeight: 600, fontSize: '40px', textAlign: 'center', lineHeight: '46.88px'}}>The Full
                Spectrum Solution</h1>
              <p style={{fontWeight: 400, fontSize: '16px', lineHeight: '24px', paddingTop: '30px'}}>Medical Terpenes is
                leading the industry in advancing product development through terpene profile induction. Welcome to
                Medical Terpenes, the leading authority on full spectrum strain specific terpene profiles. As the
                original creators of such profiles, we lift the industry to new heights with our specialized expertise,
                knowledge base, and love of terpenes. When it comes to complex flavors, loud fragrances, and consistent
                reproducibility, you can lean on us. Our goal is not only to present superior terpene profiles, but to
                bring your product to life with an exquisite and full spectrum experience. We offer wholesale & bulk
                terpenes customized to your liking and taste. Order your terpenes today!</p>
            </div>
          </div>
        </div>

        <div className="row" style={{marginTop: '40px'}}>
          <div className="col-sm-6">
            <div className="wholesale-content-left h-100"
                 style={{padding: '20px', borderLeft: '4px solid #00B5DC', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)'}}>
              <h1 style={{fontWeight: 600, fontSize: '40px', lineHeight: '46.88px'}}>Our Process</h1>
              <p style={{fontWeight: 400, fontSize: '16px', lineHeight: '24px', paddingTop: '24px'}}>All of our terpene
                products are organic and naturally derived. We source the finest smelling terpene raw materials and
                isolates. The terpene raw materials and isolates are then blended and compounded into strain specific
                terpene profiles by our team. All of this is done in an ISO and cGMP compliant facility. All of our
                terpene products are third party tested for pesticides, heavy metals, and solvents.</p>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="wholesale-content-right h-100"
                 style={{padding: '20px', borderLeft: '4px solid #00B5DC', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)'}}>
              <h1 style={{fontWeight: 600, fontSize: '40px', lineHeight: '46.88px'}}>Our Capacity</h1>
              <p style={{fontWeight: 400, fontSize: '16px', lineHeight: '24px', paddingTop: '24px'}}>Whether you are
                just starting out your CBD business or an industry leading manufacturer we are equipped to give you the
                individualized attention you and your products deserve regardless of size. We deliver the same product
                and customer service our clients have come to expect each and every time so that you can focus on your
                business. Let us take care of your flavor and effect!</p>
            </div>
          </div>

          <div className="col-sm-6" style={{marginTop: '40px'}}>
            <div className="wholesale-content-left h-100"
                 style={{padding: '20px', borderLeft: '4px solid #00B5DC', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)'}}>
              <h1 style={{fontWeight: 600, fontSize: '40px', lineHeight: '46.88px'}}>About Medical Terpenes</h1>
              <p style={{fontWeight: 400, fontSize: '16px', lineHeight: '24px', paddingTop: '24px'}}>Founded by a
                California team of experts in 2015, Medical Terpenes is a leading terpene company that manufactures a
                wide range of strain specific terpene profiles. Born naturally and organically, each profile is crafted
                with the finest ingredients. Always innovating with new strains, we have introduced revolutionary
                profiles now known as Sauce Terps, a terpene product created to mimic the essence of the flower. Our
                mission is to bring you the best possible profile, every time, satisfaction guaranteed!
                Contact us at our toll-free number: 866-51-83777 (TERPS)
              </p>
            </div>
          </div>

          <div className="col-sm-6" style={{marginTop: '40px'}}>
            <div className="wholesale-content-right h-100"
                 style={{padding: '20px', borderLeft: '4px solid #00B5DC', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)'}}>
              <h1 style={{fontWeight: 600, fontSize: '40px', lineHeight: '46.88px'}}>Why Us</h1>
              <ul style={{paddingLeft: '20px'}}>
                <li style={{fontWeight: 400, fontSize: '16px', lineHeight: '24px', listStyle: 'circle'}}>Farm to Bottle,
                  It’s About Quality
                </li>
                <li style={{fontWeight: 400, fontSize: '16px', lineHeight: '24px', listStyle: 'circle'}}>Customizable
                  Flavors
                </li>
                <li style={{fontWeight: 400, fontSize: '16px', lineHeight: '24px', listStyle: 'circle'}}>100% Natural &
                  Organic
                </li>
                <li style={{fontWeight: 400, fontSize: '16px', lineHeight: '24px', listStyle: 'circle'}}>100% Pure
                  Terpenes
                </li>
                <li style={{fontWeight: 400, fontSize: '16px', lineHeight: '24px', listStyle: 'circle'}}>Strain
                  Specific
                </li>
                <li style={{fontWeight: 400, fontSize: '16px', lineHeight: '24px', listStyle: 'circle'}}>Full Spectrum
                </li>
                <li style={{fontWeight: 400, fontSize: '16px', lineHeight: '24px', listStyle: 'circle'}}>Botanically
                  Derived
                </li>
                <li style={{fontWeight: 400, fontSize: '16px', lineHeight: '24px', listStyle: 'circle'}}>100+ Terpenes
                  Per Profile
                </li>
                <li style={{fontWeight: 400, fontSize: '16px', lineHeight: '24px', listStyle: 'circle'}}>100+ Terpenes
                  Per Profile
                </li>
                <li style={{fontWeight: 400, fontSize: '16px', lineHeight: '24px', listStyle: 'circle'}}>Made in USA
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      {modalShow && (
          <WholeSaleLogin
              show={modalShow}
              onHide={() => setModalShow(false)}
          />
      )}
    </>
  )
}

export default WholesaleRegistration;
