import { useState } from "react";
import Link from "next/link";
import { SlideDown } from "react-slidedown";
import { IoIosMenu, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

const CategoryMenuTwo = () => {
  const [categoryMenuExpandStatus, setCategoryMenuExpandStatus] = useState(
    true
  );
  const [
    categoryMenuItemExpandStatus,
    setCategoryMenuItemExpandStatus
  ] = useState(false);
  return (
    <div className="header-categories-wrap">
      <button
        className="category-menu-trigger"
        onClick={() => setCategoryMenuExpandStatus(!categoryMenuExpandStatus)}
      >
        <IoIosMenu /> ALL CATEGORIES
      </button>
      <nav className="category-menu dark-skin">
        <SlideDown closed={categoryMenuExpandStatus ? false : true}>
          <ul>
            <li className="has-children-mega">
              <Link href="/shop/terpenes" className="nav-link">

                <i className="flaticon-tv"></i>{" "}
                <span>
                  Computer <IoIosArrowForward />
                </span>

              </Link>
              <ul className="sub-menu sub-menu--category sub-menu--category--with-banner sub-menu--mega">
                <li className="sub-menu--mega__column">
                  <h3 className="sub-menu--mega__title">FEATURED ITEM</h3>
                  <ul className="sub-menu--mega__list">
                    <li>
                      <Link href="/shop/terpenes">
                        Vestibulum sed
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Donec porttitor
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Donec vitae facilisis
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Curabitur tempus
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Vivamus in tortor
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Donec vitae ante ante
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Etiam ac rutrum
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Quisque condimentum
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="sub-menu--mega__column">
                  <h3 className="sub-menu--mega__title">POPULAR ITEM</h3>
                  <ul className="sub-menu--mega__list">
                    <li>
                      <Link href="/shop/terpenes">
                        Curabitur tempus
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Vivamus in tortor
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Donec vitae ante ante
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Etiam ac rutrum
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Vestibulum sed
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Donec porttitor
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Donec vitae facilisis
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Quisque condimentum
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="sub-menu--mega__column sub-menu--mega__column--banners">
                  <div className="header-banner p-0">
                    <Image width={100} height={100}
                      src="/assets/images/banner/menu_banner7.jpg"
                      alt="menu_banner1"
                    />
                    <div className="banner-info">
                      <h6>10% Off</h6>
                      <h4>New Arrival</h4>
                      <Link href="/shop/terpenes">
                        Shop now
                      </Link>
                    </div>
                  </div>
                  <div className="header-banner p-0">
                    <Image width={100} height={100}
                      src="/assets/images/banner/menu_banner8.jpg"
                      alt="menu_banner1"
                    />
                    <div className="banner-info">
                      <h6>10% Off</h6>
                      <h4>New Arrival</h4>
                      <Link href="/shop/terpenes">
                        Shop now
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li className="has-children-mega">
              <Link href="/shop/terpenes" className="nav-link">

                <i className="flaticon-responsive"></i>{" "}
                <span>
                  Mobile & Tablet <IoIosArrowForward />
                </span>

              </Link>
              <ul className="sub-menu sub-menu--category sub-menu--mega">
                <li className="sub-menu--mega__column">
                  <h3 className="sub-menu--mega__title">FEATURED ITEM</h3>
                  <ul className="sub-menu--mega__list">
                    <li>
                      <Link href="/shop/terpenes">
                        Vestibulum sed
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Donec porttitor
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Donec vitae facilisis
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Curabitur tempus
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Vivamus in tortor
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Donec vitae ante ante
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Etiam ac rutrum
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Quisque condimentum
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="sub-menu--mega__column">
                  <h3 className="sub-menu--mega__title">POPULAR ITEM</h3>
                  <ul className="sub-menu--mega__list">
                    <li>
                      <Link href="/shop/terpenes">
                        Curabitur tempus
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Vivamus in tortor
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Donec vitae ante ante
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Etiam ac rutrum
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Vestibulum sed
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Donec porttitor
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Donec vitae facilisis
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Quisque condimentum
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="sub-menu--mega__column">
                  <h3 className="sub-menu--mega__title">NEW ITEM</h3>
                  <ul className="sub-menu--mega__list">
                    <li>
                      <Link href="/shop/terpenes">
                        Curabitur tempus
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Vivamus in tortor
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Donec vitae ante ante
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Etiam ac rutrum
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Vestibulum sed
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Donec porttitor
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Donec vitae facilisis
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Quisque condimentum
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="has-children-mega">
              <Link href="/shop/terpenes" className="nav-link">

                <i className="flaticon-camera"></i>{" "}
                <span>
                  Camera <IoIosArrowForward />
                </span>

              </Link>
              <ul className="sub-menu sub-menu--category sub-menu--category--with-banner sub-menu--mega">
                <li className="sub-menu--mega__column">
                  <h3 className="sub-menu--mega__title">FEATURED ITEM</h3>
                  <ul className="sub-menu--mega__list">
                    <li>
                      <Link href="/shop/terpenes">
                        Vestibulum sed
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Donec porttitor
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Donec vitae facilisis
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Curabitur tempus
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Vivamus in tortor
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Donec vitae ante ante
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Etiam ac rutrum
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Quisque condimentum
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="sub-menu--mega__column">
                  <h3 className="sub-menu--mega__title">POPULAR ITEM</h3>
                  <ul className="sub-menu--mega__list">
                    <li>
                      <Link href="/shop/terpenes">
                        Curabitur tempus
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Vivamus in tortor
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Donec vitae ante ante
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Etiam ac rutrum
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Vestibulum sed
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Donec porttitor
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Donec vitae facilisis
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/terpenes">
                        Quisque condimentum
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="sub-menu--mega__column sub-menu--mega__column--banners">
                  <div className="header-banner p-0">
                    <Link href="/shop/terpenes">

                      <Image width={100} height={100}
                        src="/assets/images/banner/menu_banner9.jpg"
                        alt="menu_banner1"
                      />

                    </Link>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/shop/terpenes" className="nav-link">

                <i className="flaticon-plugins"></i> <span>Accessories</span>

              </Link>
            </li>
            <li>
              <Link href="/shop/terpenes" className="nav-link">

                <i className="flaticon-jacket"></i> <span>Clothing</span>

              </Link>
            </li>
            <li>
              <Link href="/shop/terpenes" className="nav-link">

                <i className="flaticon-sneakers"></i> <span>Shoes</span>

              </Link>
            </li>
            <li>
              <Link href="/shop/terpenes" className="nav-link">

                <i className="flaticon-watch"></i> <span>Watches</span>

              </Link>
            </li>
            <li>
              <Link href="/shop/terpenes" className="nav-link">

                <i className="flaticon-headphones"></i>{" "}
                <span>Headphones</span>

              </Link>
            </li>
            <li>
              <Link href="/shop/terpenes" className="nav-link">

                <i className="flaticon-console"></i> <span>Gaming</span>

              </Link>
            </li>
            <li>
              <Link href="/shop/terpenes" className="nav-link">

                <i className="flaticon-ball"></i> <span>Sports</span>

              </Link>
            </li>
            <SlideDown closed={categoryMenuItemExpandStatus ? false : true}>
              <li>
                <Link href="/shop/terpenes" className="nav-link">

                  <i className="flaticon-watch"></i> <span>Watches</span>

                </Link>
              </li>
              <li>
                <Link href="/shop/terpenes" className="nav-link">

                  <i className="flaticon-music-system"></i>{" "}
                  <span>Home Audio & Theater</span>

                </Link>
              </li>
              <li>
                <Link href="/shop/terpenes" className="nav-link">

                  <i className="flaticon-monitor"></i>{" "}
                  <span>TV & Smart Box</span>

                </Link>
              </li>
              <li>
                <Link href="/shop/terpenes" className="nav-link">

                  <i className="flaticon-printer"></i> <span>Printer</span>

                </Link>
              </li>
            </SlideDown>
            <li>
              <button
                className="category-menu-expand-trigger"
                onClick={() =>
                  setCategoryMenuItemExpandStatus(!categoryMenuItemExpandStatus)
                }
              >
                More Categories <span>+</span>{" "}
              </button>
            </li>
          </ul>
        </SlideDown>
      </nav>
    </div>
  );
};

export default CategoryMenuTwo;
