'use client';

import BrandsWidget from '@/components/Product/ProductWidgets/BrandsWidget';
import WidgetsWrapper from '@/components/Product/ProductWidgets/WidgetsWrapper';
import {getProducts} from "@/lib/product";
import PopularItemsWidget from "@/components/Product/ProductWidgets/PopularItemsWidget";

const ProductSidebar = ({ products,categories }) => {
    const popularProducts = getProducts(products, "fashion", "popular", 3);
  return (
    <div className='sidebar'>
      <WidgetsWrapper title='Brands'>
        <ul className='widget__categories'>
          {categories?.map((category, key) => (
            <BrandsWidget key={key} category={category} />
          ))}
        </ul>
      </WidgetsWrapper>

      <WidgetsWrapper title="Popular Items">
        {popularProducts?.length > 0 ? (
          <ul className="widget-recent-post-wrapper">
            {popularProducts &&
              popularProducts.map((product, key) => {
                const discountedPrice = getDiscountPrice(
                  product.price,
                  product.discount
                ).toFixed(2);
                const productPrice = product.price.toFixed(2);
                return (
                  <PopularItemsWidget key={key} product={product} discountedPrice={discountedPrice}
                                      productPrice={productPrice}/>
                );
              })}
          </ul>
        ) : (
          "No products found"
        )}
      </WidgetsWrapper>

      {/*<WidgetsWrapper title="Tags">*/}
      {/*  {tags?.length > 0 ? (*/}
      {/*    <div className="widget__tags">*/}
      {/*      {tags &&*/}
      {/*        tags.map((tag, key) => <TagsWidget key={key} tag={tag}/>)}*/}
      {/*    </div>*/}
      {/*  ) : (*/}
      {/*    "No tags found"*/}
      {/*  )}*/}
      {/*</WidgetsWrapper>*/}

      {/*<div className="widget">*/}
      {/*  <div className="shop-banner">*/}
      {/*    <div className="banner-img">*/}
      {/*      <Image width={100} height={100}*/}
      {/*             src="/assets/images/product/discount-product/discount-product.png"*/}
      {/*             alt="sidebar_banner_img"*/}
      {/*      />*/}
      {/*    </div>*/}
      {/*    <div className="shop-bn-content2 align-self-end">*/}
      {/*      <h6 className="text-uppercase shop-subtitle">New Collection</h6>*/}
      {/*      <h3 className="text-uppercase shop-title">Sale 30% Off</h3>*/}
      {/*      <Link*/}
      {/*        href="/products"*/}
      {/*        className="btn-sm radius-btn btn btn-radius staggered-animation text-uppercase slider-link">*/}
      {/*        Shop Now*/}
      {/*      </Link>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};

export default ProductSidebar;
