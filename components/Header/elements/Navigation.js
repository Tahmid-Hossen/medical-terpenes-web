import Link from "next/link";
import {Col} from "react-bootstrap";
import clsx from "clsx";
import {IoIosArrowDown, IoIosArrowForward} from "react-icons/io";
import Image from "next/image";

const Navigation = ({positionClass}) => {
  return (
    <nav className="navigation d-none d-lg-block">
      <ul className={clsx("d-flex", positionClass ? positionClass : "justify-content-end")}>
        <li>
          <Link href="/" className="nav-link">
            HOME<IoIosArrowDown/>

          </Link>

          <ul className="sub-menu sub-menu--one-column">
            <li>
              <Link href="/home/fashion-one">
                Fashion Home One
              </Link>
            </li>
            <li>
              <Link href="/home/fashion-two">
                Fashion Home Two
              </Link>
            </li>
            <li>
              <Link href="/home/furniture-one">
                Furniture Home One
              </Link>
            </li>
            <li>
              <Link href="/home/furniture-two">
                Furniture Home Two
              </Link>
            </li>
            <li>
              <Link href="/home/electronics-one">
                Electronics Home One
              </Link>
            </li>
            <li>
              <Link href="/home/electronics-two">
                Electronics Home Two
              </Link>
            </li>
          </ul>
        </li>
        <li className="has-children-mega">
          <Link href="/" className="nav-link">
            SHOP<IoIosArrowDown/>

          </Link>
          <ul className="sub-menu sub-menu--mega">
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">SHOP PAGE LAYOUT</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="/shop/terpenes">
                    Grid Left Sidebar
                  </Link>
                </li>
                <li>
                  <Link href="/shop/grid-right-sidebar">
                    Grid Right Sidebar
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-left-sidebar">
                    List Left Sidebar
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-right-sidebar">
                    List Right Sidebar
                  </Link>
                </li>
                <li>
                  <Link href="/shop/list-no-sidebar">
                    List No Sidebar
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">OTHER PAGES</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="/other/cart">
                    Cart
                  </Link>
                </li>
                <li>
                  <Link href="/other/checkout" prefetch={false}>
                    Checkout
                  </Link>
                </li>
                <li>
                  <Link href="/other/my-account" prefetch={false}>
                    My Account
                  </Link>
                </li>
                <li>
                  <Link href="/other/wishlist" prefetch={false}>
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link href="/other/compare" prefetch={false}>
                    Compare
                  </Link>
                </li>
                <li>
                  <Link href="/other/order-completed" prefetch={false}>
                    Order Completed
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">PRODUCT PAGES</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="shop/product-details/lorem-ipsum-fashion-eight" prefetch={false}>
                    Default
                  </Link>
                </li>
                <li>
                  <Link href="/shop/product-left-sidebar/lorem-ipsum-fashion-eight" prefetch={false}>
                    Left Sidebar
                  </Link>
                </li>
                <li>
                  <Link href="/shop/product-right-sidebar/lorem-ipsum-fashion-eight" prefetch={false}>
                    Right Sidebar
                  </Link>
                </li>
                <li>
                  <Link href="/shop/product-thumb-left/lorem-ipsum-fashion-eight" prefetch={false}>
                    Thumb Left
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__column">
              <div className="header-banner">
                <div className="header-banner__content">
                  <div className="shop-banner">
                    <div className="banner-img overlay-bg--40">
                      <Image width={100} height={100}
                             src="/assets/images/banner/shop_banner.jpg"
                             alt="shop_banner"
                      />
                    </div>
                    <div className="shop-bn-content">
                      <h5 className="text-uppercase shop-subtitle">
                        New Collection
                      </h5>
                      <h3 className="text-uppercase shop-title">
                        Sale 30% Off
                      </h3>
                      <Link prefetch={false}
                            href="/products"
                            className="btn btn-white rounded-0 btn-sm text-uppercase">

                        Shop Now

                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
        <li className="has-children-mega">
          <Link href="/" className="nav-link" prefetch={false}>
            PRODUCTS<IoIosArrowDown/>

          </Link>
          <ul className="sub-menu sub-menu--mega sub-menu--mega--with-banner">
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">SHOP PAGE LAYOUT</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="/products" prefetch={false}>
                    Grid Left Sidebar
                  </Link>
                </li>
                <li>
                  <Link href="/products" prefetch={false}>
                    Grid Right Sidebar
                  </Link>
                </li>
                <li>
                  <Link href="/products" prefetch={false}>
                    List Left Sidebar
                  </Link>
                </li>
                <li>
                  <Link href="/products" prefetch={false}>
                    List Right Sidebar
                  </Link>
                </li>
                <li>
                  <Link href="/products" prefetch={false}>
                    List No Sidebar
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">OTHER PAGES</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="/other/cart" prefetch={false}>
                    Cart
                  </Link>
                </li>
                <li>
                  <Link href="/other/checkout" prefetch={false}>
                    Checkout
                  </Link>
                </li>
                <li>
                  <Link href="/other/my-account" prefetch={false}>
                    My Account
                  </Link>
                </li>
                <li>
                  <Link href="/other/wishlist" prefetch={false}>
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link href="/other/compare" prefetch={false}>
                    Compare
                  </Link>
                </li>
                <li>
                  <Link href="/other/order-completed" prefetch={false}>
                    Order Completed
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">PRODUCT PAGES</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="shop/product-details/lorem-ipsum-fashion-eight" prefetch={false}>
                    Default
                  </Link>
                </li>
                <li>
                  <Link href="/shop/product-left-sidebar/lorem-ipsum-fashion-eight" prefetch={false}>
                    Left Sidebar
                  </Link>
                </li>
                <li>
                  <Link href="/shop/product-right-sidebar/lorem-ipsum-fashion-eight" prefetch={false}>
                    Right Sidebar
                  </Link>
                </li>
                <li>
                  <Link href="/shop/product-thumb-left/lorem-ipsum-fashion-eight" prefetch={false}>
                    Thumb Left
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sub-menu--mega__column">
              <h3 className="sub-menu--mega__title">PRODUCT PAGES</h3>
              <ul className="sub-menu--mega__list">
                <li>
                  <Link href="shop/product-details/lorem-ipsum-fashion-eight" prefetch={false}>
                    Default
                  </Link>
                </li>
                <li>
                  <Link href="/shop/product-left-sidebar/lorem-ipsum-fashion-eight" prefetch={false}>
                    Left Sidebar
                  </Link>
                </li>
                <li>
                  <Link href="/shop/product-right-sidebar/lorem-ipsum-fashion-eight" prefetch={false}>
                    Right Sidebar
                  </Link>
                </li>
                <li>
                  <Link href="/shop/product-thumb-left/lorem-ipsum-fashion-eight" prefetch={false}>
                    Thumb Left
                  </Link>
                </li>
              </ul>
            </li>
            <li className="d-lg-flex sub-menu--mega__column--banners">
              <Col lg={4}>
                <div className="header-banner p-0">
                  <Image width={100} height={100}
                         src="/assets/images/banner/menu_banner1.jpg"
                         alt="menu_banner1"
                  />
                  <div className="banner-info">
                    <h6>10% Off</h6>
                    <h4>New Arrival</h4>
                    <Link href="/shop/terpenes" prefetch={false}>
                      Shop now
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="header-banner p-0">
                  <Image width={100} height={100}
                         src="/assets/images/banner/menu_banner2.jpg"
                         alt="menu_banner1"
                  />
                  <div className="banner-info">
                    <h6>10% Off</h6>
                    <h4>New Arrival</h4>
                    <Link href="/shop/terpenes" prefetch={false}>
                      Shop now
                    </Link>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="header-banner p-0">
                  <Image width={100} height={100}
                         src="/assets/images/banner/menu_banner3.jpg"
                         alt="menu_banner1"
                  />
                  <div className="banner-info">
                    <h6>10% Off</h6>
                    <h4>New Arrival</h4>
                    <Link href="/shop/terpenes" prefetch={false}>
                      Shop now
                    </Link>
                  </div>
                </div>
              </Col>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/" className="nav-link" prefetch={false}>
            PAGES<IoIosArrowDown/>

          </Link>
          <ul className="sub-menu sub-menu--one-column">
            <li>
              <Link href="/other/about-us" prefetch={false}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/other/contact-us" prefetch={false}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/other/faq" prefetch={false}>
                F.A.Q
              </Link>
            </li>
            <li>
              <Link href="/other/not-found" prefetch={false}>
                404 Error Page
              </Link>
            </li>
            <li>
              <Link href="/other/login" prefetch={false}>
                Login
              </Link>
            </li>
            <li>
              <Link href="/other/register" prefetch={false}>
                Register
              </Link>
            </li>
            <li>
              <Link href="/other/terms" prefetch={false}>
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/" className="nav-link" prefetch={false}>
            BLOG<IoIosArrowDown/>

          </Link>
          <ul
            className="sub-menu sub-menu--one-column sub-menu--one-column--has-children sub-menu--one-column--reverse">
            <li>
              <Link href="/blog/grid-four-columns" prefetch={false}>
                Grids<IoIosArrowForward/>

              </Link>
              <ul className="sub-menu sub-menu--one-column sub-menu--one-column--child-menu">
                <li>
                  <Link href="/blog/blog-page" prefetch={false}>
                    Three Columns
                  </Link>
                </li>
                <li>
                  <Link href="/blog/grid-four-columns" prefetch={false}>
                    Four Columns
                  </Link>
                </li>
                <li>
                  <Link href="/blog/grid-left-sidebar" prefetch={false}>
                    Left Sidebar
                  </Link>
                </li>
                <li>
                  <Link href="/blog/grid-right-sidebar" prefetch={false}>
                    Right Sidebar
                  </Link>
                </li>
                <li>
                  <Link href="/blog/grid-standard-left-sidebar" prefetch={false}>
                    Standard Left Sidebar
                  </Link>
                </li>
                <li>
                  <Link href="/blog/grid-standard-right-sidebar" prefetch={false}>
                    Standard Right Sidebar
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/blog/list-left-sidebar" prefetch={false}>
                Lists<IoIosArrowForward/>

              </Link>
              <ul className="sub-menu sub-menu--one-column sub-menu--one-column--child-menu">
                <li>
                  <Link href="/blog/list-left-sidebar" prefetch={false}>
                    Left Sidebar
                  </Link>
                </li>
                <li>
                  <Link href="/blog/list-right-sidebar" prefetch={false}>
                    Right Sidebar
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/blog/post-left-sidebar" prefetch={false}>
                Single Post<IoIosArrowForward/>

              </Link>
              <ul className="sub-menu sub-menu--one-column sub-menu--one-column--child-menu">
                <li>
                  <Link href="/blog/post-left-sidebar" prefetch={false}>
                    Left Sidebar
                  </Link>
                </li>
                <li>
                  <Link href="/blog/blog-details" prefetch={false}>
                    Right Sidebar
                  </Link>
                </li>
                <li>
                  <Link href="/blog/post-slider" prefetch={false}>
                    Slider Post
                  </Link>
                </li>
                <li>
                  <Link href="/blog/post-audio" prefetch={false}>
                    Audio Post
                  </Link>
                </li>
                <li>
                  <Link href="/blog/post-video" prefetch={false}>
                    Video Post
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/other/contact-us" className="nav-link" prefetch={false}>
            CONTACT US
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
