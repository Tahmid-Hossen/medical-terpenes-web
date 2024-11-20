'use client';

import { Suspense } from 'react';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Preloader from '@/components/Preloader'; // Assuming you have a Preloader component
import ProductDescription from '@/components/Product/ProductDescription';
import ProductDescriptionTab from '@/components/Product/ProductDescriptionTab';
import ProductImageGallary from '@/components/Product/ProductImageGallary';
import ProductSliderTwo from '@/components/Sliders/ProductSliderTwo';
import products from '@/data/products.json';
import { getDiscountPrice, getProducts } from '@/lib/product';
import Link from 'next/link';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ProductDetails = ({ singleProduct, relatedProducts }) => {
  const [product, setProduct] = useState(singleProduct);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector(state => state.wishlist);
  const { compareItems } = useSelector(state => state.compare);

  const discountedPrice = getDiscountPrice(singleProduct?.variation[0]?.volume[0]?.price, singleProduct?.variation[0]?.volume[0]?.discount_price)?.toFixed(2);
  const productPrice = singleProduct?.variation[0]?.volume[0]?.price?.toFixed(2);
  const cartItem = cartItems.find((cartItem) => cartItem.id === product?._id);
  const wishlistItem = wishlistItems.find((wishlistItem) => wishlistItem.id === product?.id);
  const compareItem = compareItems.find((compareItem) => compareItem.id === product?._id);

  return (
      <>
        <Breadcrumb pageTitle={singleProduct?.name}>
          <ol className='breadcrumb align-items-center justify-content-md-end'>
            <li className='breadcrumb-item'>
              <Link href='/'>Home</Link>
            </li>
            <li className='breadcrumb-item'>
              <Link href='/products'>Shop</Link>
            </li>
            <li className='breadcrumb-item active'>{singleProduct?.name}</li>
          </ol>
        </Breadcrumb>

        {/* product details */}
        <div className='product-details space-pt--r100 space-pb--r100'>
          <Container>
            <Row>
              <Col lg={6} className='space-mb-mobile-only--40'>
                {/* image gallery */}
                {singleProduct && (
                    <Suspense fallback={<Preloader />}>
                      <ProductImageGallary product={singleProduct} singleProduct={singleProduct} />
                    </Suspense>
                )}
              </Col>
              <Col lg={6}>
                {/* product description */}
                <Suspense fallback={<Preloader />}>
                  <ProductDescription
                      singleProduct={singleProduct}
                      product={singleProduct}
                      productPrice={productPrice}
                      discountedPrice={discountedPrice}
                      cartItems={cartItems}
                      cartItem={cartItem}
                      wishlistItem={wishlistItem}
                      compareItem={compareItem}
                  />
                </Suspense>
              </Col>
            </Row>
            <Row>
              <Col>
                {/* product description tab */}
                <Suspense fallback={<Preloader />}>
                  <ProductDescriptionTab singleProduct={singleProduct} product={singleProduct} />
                </Suspense>
              </Col>
            </Row>

            {/* related product slider */}
            <Suspense fallback={<Preloader />}>
              <ProductSliderTwo title='Related Products' products={relatedProducts} />
            </Suspense>
          </Container>
        </div>
      </>
  );
};

export default ProductDetails;
