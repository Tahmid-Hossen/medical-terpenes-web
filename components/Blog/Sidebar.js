import Link from "next/link";
import {IoIosSearch, IoIosArrowForward} from "react-icons/io";
import {useSelector} from "react-redux";
import {Fragment} from "react";

import {
  getIndividualCategories,
  getIndividualTags,
  getIndividualColors,
  getProductsIndividualSizes,
  getProducts,
  getDiscountPrice,
  setActiveSort
} from "@/lib/product";
import ProductRating from "@/components/Product/ProductRating";
import Image from "next/image";

const Sidebar = () => {
  const {products} = useSelector((state) => state.product);
  const tags = getIndividualTags(products);
  const getSortParams = (sortType, sortValue) => {
    setSortType(sortType);
    setSortValue(sortValue);
  };
  const popularProducts = getProducts(products, "TERPENES", "popular", 4);
  return (
    <div className="sidebar">
      <div className="widget">
        <div className="search-form">
          <form>
            <input
              required
              className="form-control"
              placeholder="Search..."
              type="text"
            />
            <button
              type="submit"
              title="Subscribe"
              className="btn icon-search"
              name="submit"
              value="Submit"
            >
              <IoIosSearch/>
            </button>
          </form>
        </div>
      </div>
      <div className="widget">
        <h5 className="widget__title">Recent Posts</h5>
        <ul className="widget-recent-post">
          <li>
            <div className="post-footer">
              {/* <div className="post-footer__image">
                <Link href="/blog/post-left-sidebar">

                  <Image
                    src="/assets/images/blog/blog_img1.jpg"
                    alt="latest_post1"
                    width={100} height={100}
                  />

                </Link>
              </div> */}
              <div className="post-footer__content">
                <h6>
                  <Link href="#">
                    Featured Terpene: Terpineol
                  </Link>
                </h6>
                {/* <p className="small m-0">April 14, 2021</p> */}
              </div>
            </div>
          </li>
          <li>
            <div className="post-footer">
              {/* <div className="post-footer__image">
                <Link href="/blog/post-left-sidebar">

                  <Image
                    src="/assets/images/blog/blog_img1.jpg"
                    alt="latest_post2"
                    width={100} height={100}
                  />

                </Link>
              </div> */}
              <div className="post-footer__content">
                <h6>
                  <Link href="#">
                    What are the Best Terpenes for Migraines?
                  </Link>
                </h6>
                {/* <p className="small m-0">April 14, 2021</p> */}
              </div>
            </div>
          </li>
          <li>
            <div className="post-footer">
              {/* <div className="post-footer__image">
                <Link href="/blog/post-left-sidebar">

                  <Image
                    src="/assets/images/blog/blog_img1.jpg"
                    alt="latest_post3"
                    width={100} height={100}
                  />

                </Link>
              </div> */}
              <div className="post-footer__content">
                <h6>
                  <Link href="#">
                    Upgrade Your Cocktails with Terpenes
                  </Link>
                </h6>
                {/* <p className="small m-0">April 14, 2021</p> */}
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div className="widget">
        <h5 className="widget__title">Post Categories</h5>
        <ul className="widget-archive">
          <li>
            <Link href="#">


              <span className="archive-year">CBD</span>
              <span className="archive-num"><IoIosArrowForward/></span>

            </Link>
          </li>
          <li>
            <Link href="#">


              <span className="archive-year">Live Resin</span>
              <span className="archive-num"> <IoIosArrowForward/></span>

            </Link>
          </li>
          <li>
            <Link href="#">

            
              <span className="archive-year">Selling Terpenes
              </span>
              <span className="archive-num">  <IoIosArrowForward/></span>

            </Link>
          </li>
          <li>
            <Link href="#">


              <span className="archive-year">Terpene Products</span>
              <span className="archive-num"> <IoIosArrowForward/></span>

            </Link>
          </li>
          <li>
            <Link href="#">


              <span className="archive-year">Terpenes Explained</span>
              <span className="archive-num"><IoIosArrowForward/></span>

            </Link>
          </li>
          <li>
            <Link href="/blog/grid-left-sidebar">


              <span className="archive-year">Uncategorized</span>
              <span className="archive-num"><IoIosArrowForward/></span>

            </Link>
          </li>
          <li>
            <Link href="/blog/grid-left-sidebar">


              <span className="archive-year">Using Terpenes</span>
              <span className="archive-num"><IoIosArrowForward/></span>

            </Link>
          </li>
        </ul>
      </div>
      <div className="widget">
        <h5 className="widget__title">Popular Items</h5>
        {popularProducts.length > 0 ? (
          <ul className="widget-recent-post-wrapper">
            {popularProducts &&
              popularProducts.map((product, key) => {
                const discountedPrice = getDiscountPrice(
                  product.price,
                  product.discount
                ).toFixed(2);
                const productPrice = product.price.toFixed(2);
                return (
                  <li className="widget-product-post" key={key}>
                    <div className="widget-product-post__image">
                      <Link href={"shop/product-details/" + product.slug}>
                        <Image src={product.thumbImage[0]} alt="shop_small1" width={100} height={100}/>
                      </Link>
                    </div>
                    <div className="widget-product-post__content">
                      <h6 className="product-title">
                        <Link href={"shop/product-details/" + product.slug}>
                          {product.name}
                        </Link>
                      </h6>
                      <div className="product-price">
                        {product.discount ? (
                          <Fragment>
                            <span className="price">${discountedPrice}</span>
                            <del>${productPrice}</del>
                          </Fragment>
                        ) : (
                          <span className="price">${productPrice}</span>
                        )}
                      </div>
                      <div className="rating-wrap">
                        <ProductRating ratingValue={product.rating}/>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        ) : (
          "No products found"
        )}
      </div>

      <div className="widget">
        <h5 className="widget__title">tags</h5>
        {tags.length > 0 ? (
          <div className="widget__tags">
            {tags &&
              tags.map((tag, key) => {
                return (
                  <button
                    className="btn-sm btn-radius staggered-animation"
                    key={key}
                    onClick={(e) => {
                      getSortParams("tag", tag);
                      setActiveSort(e);
                    }}
                  >
                    {tag}
                  </button>
                );
              })}
          </div>
        ) : (
          "No tags found"
        )}
      </div>
      <div className="widget">
        <div className="shop-banner">
          <div className="banner-img">
            <Image
              src="/assets/images/product/discount-product/discount-product.png"
              alt="sidebar_banner_img"
              width={100} height={100}
            />
          </div>
          <div className="shop-bn-content2">
            {/* <h5 className="text-uppercase shop-subtitle">New Collection</h5> */}
            <h3 className="text-uppercase shop-title">Sale 30% Off</h3>
            <Link
              href="/shop/terpenes"
              className="btn-sm radius-btn btn btn-radius staggered-animation text-uppercase slider-link">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="widget">
        <h5 className="widget__title">tags</h5>

        <div className="tags">
          <Link href="/blog/grid-left-sidebar">
            dress
          </Link>
          <Link href="/blog/grid-left-sidebar">
            design
          </Link>
          <Link href="/blog/grid-left-sidebar">
            branding
          </Link>
          <Link href="/blog/grid-left-sidebar">
            electronics
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default Sidebar;
