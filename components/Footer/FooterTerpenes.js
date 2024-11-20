import Image from 'next/image';
import Link from 'next/link';
import {Col, Container, Row} from 'react-bootstrap';
import {BiLogoInstagramAlt, BiLogoLinkedin, BiLogoTwitter} from 'react-icons/bi';
import {IoLocationOutline} from 'react-icons/io5';
import {MdEmail, MdLocalPhone} from 'react-icons/md';
import {TiSocialFacebook} from 'react-icons/ti';

const FooterTerpenes = () => {
  return (
    <>
      {/*<div className="bg--default space-pt--60 space-pb--60">*/}
      {/*  <Container>*/}
      {/*    <Row className="align-items-center">*/}
      {/*      <Col md={6}>*/}
      {/*        <h3 className="newsletter-title text-white mb-md-0">*/}
      {/*          Subscribe Our Newsletter*/}
      {/*        </h3>*/}
      {/*      </Col>*/}
      {/*      <Col md={6}>*/}
      {/*        <SubscribeEmail*/}
      {/*          mailchimpUrl="https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef"*/}
      {/*          alertColor="#fff"*/}
      {/*        />*/}
      {/*      </Col>*/}
      {/*    </Row>*/}
      {/*  </Container>*/}
      {/*</div>*/}

      <footer className='footer-light'>
        <div className='footer-top'>
          <Container>
            <Row>
              <Col lg={3} md={6} sm={12}>
                <div className='widget'>
                  <div className='footer-logo'>
                    <Link href='/' prefetch={false}>
                      <Image width={300} height={64} src='/assets/images/logo_dark.png' alt='logo' priority/>
                    </Link>
                  </div>
                  <ul className='contact-info contact-info-dark'>
                    <li>
                      <MdEmail/>
                      <a href='mailto:info@medicalterpenes.com'>info@medicalterpenes.com</a>
                    </li>
                    <li>
                      <MdLocalPhone/>
                      <p>866-51-83777(TERPS)</p>
                    </li>
                    <li>
                      <IoLocationOutline/>
                      <p>1907 N Main St,Santa Ana CA 92706</p>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={2} md={3} sm={6}>
                <div className='widget'>
                  <h6 className='widget-title'>Category</h6>
                  <ul className='widget-links'>
                    <li>
                      <Link href='/products' prefetch={false}>Most Popular</Link>
                    </li>
                    <li>
                      <Link href='/products' prefetch={false}>Medical Terpenes</Link>
                    </li>
                    <li>
                      <Link href='/products' prefetch={false}>Sauce Terps</Link>
                    </li>
                    <li>
                      <Link href='/products' prefetch={false}>Live Resin Terpenes</Link>
                    </li>
                    <li>
                      <Link href='/products' prefetch={false}>710Terps</Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={2} md={3} sm={6}>
                <div className='widget'>
                  <h6 className='widget-title'>Useful Links</h6>
                  <ul className='widget-links'>
                    <li>
                      <Link href='/other/about-us' prefetch={false}>About Us</Link>
                    </li>
                    <li>
                      <Link href='/other/faq' prefetch={false}>FAQ</Link>
                    </li>
                    <li>
                      <Link href='/' prefetch={false}>Location</Link>
                    </li>
                    <li>
                      <Link href='/' prefetch={false}>Affiliates</Link>
                    </li>
                    <li>
                      <Link href='/other/contact-us' prefetch={false}>Contact</Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={2} md={6} sm={6}>
                <div className='widget'>
                  <h6 className='widget-title'>My Account</h6>
                  <ul className='widget-links'>
                    <li>
                      <Link href={'/my-account'} /* href="/other/my-account" */ prefetch={false}>My Account</Link>
                    </li>
                    <li>
                      <Link href='/other/terms' prefetch={false}>Terms and Conditions</Link>
                    </li>
                    <li>
                      <Link href='#' prefetch={false}>Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href='#' prefetch={false}>Order Tracking</Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={3} md={4} sm={6}>
                <div className='widget'>
                  <h6 className='widget-title'>Follow Us</h6>
                  <ul className='social-icons'>
                    <li>
                      <a href='#'>
                        {/* <IoLogoFacebook /> */}
                        <TiSocialFacebook className='text-info'/>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        {/* <IoLogoTwitter /> */}
                        <BiLogoTwitter/>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        {/* <IoLogoInstagram /> */}
                        <BiLogoInstagramAlt/>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <BiLogoLinkedin/>
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='bottom-footer footer-dark border-top--grey'>
          <Container>
            <Row>
              <Col md={6}>
                <p className='mb-3 mb-md-0 mt-md-2 text-end text-md-end text-lg-end'>
                  &copy; {new Date().getFullYear() + ' '}
                  <a href='/' className='fw-medium'>
                    Medical Terpenes &nbsp;
                  </a>
                  All Rights Reserved.
                </p>
              </Col>
              <Col md={6}>
                <ul className='footer-payment  text-start text-md-start text-lg-start'>
                  <li>
                    <a href='#'>
                      <Image width={74} height={18} src='/assets/images/icons/paypal.png' alt='paypal'/>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <Image width={53} height={17} src='/assets/images/icons/visa.png' alt='visa'/>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <Image width={34} height={20} src='/assets/images/icons/master_card.png' alt='master_card'/>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <Image
                        width={52}
                        height={18}
                        src='/assets/images/icons/american_express.png'
                        alt='american_express'
                      />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <Image width={75} height={13} src='/assets/images/icons/discover.png' alt='discover'/>
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
};

export default FooterTerpenes;
