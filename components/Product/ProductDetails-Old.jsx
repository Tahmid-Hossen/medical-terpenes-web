'use client';

import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import ProductDescription from '@/components/Product/ProductDescription';
import ProductDescriptionTab from '@/components/Product/ProductDescriptionTab';
import ProductImageGallary from '@/components/Product/ProductImageGallary';
import ProductSliderTwo from '@/components/Sliders/ProductSliderTwo';
import products from '@/data/products.json';
import { getDiscountPrice, getProducts } from '@/lib/product';
import Link from 'next/link';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ProductDetails = ({ singleProduct }) => {
  console.log('singleProduct',singleProduct);
  const [product, setProduct] = useState( products);
  const cartItems = [];
  const wishlistItems = [];
  const compareItems = [];

  // const relatedProducts = getProducts(product, 'TERPENES', 'popular', 8);
  const discountedPrice = getDiscountPrice(singleProduct.price, singleProduct.discount);

  const productPrice = product[0]?.price?.toFixed(2);
  const cartItem = cartItems.find((cartItem) => cartItem.id === product.id);
  const wishlistItem = wishlistItems.find((wishlistItem) => wishlistItem.id === product.id);
  const compareItem = compareItems.find((compareItem) => compareItem.id === product.id);

  return (
    <>
      <Breadcrumb pageTitle={singleProduct[0]?.product?.name}>
        <ol className='breadcrumb align-items-center justify-content-md-end'>
          <li className='breadcrumb-item'>
            <Link href='/'>Home</Link>
          </li>
          <li className='breadcrumb-item'>
            <Link href='/products'>Shop</Link>
            {/* <Link href="/shop/grid-left-sidebar">
              Shop
            </Link> */}
          </li>
          <li className='breadcrumb-item active'>{singleProduct[0]?.product?.name}</li>
        </ol>
      </Breadcrumb>

      {/* product details */}
      <div className='product-details space-pt--r100 space-pb--r100'>
        <Container>
          <Row>
            <Col lg={6} className='space-mb-mobile-only--40'>
              {/* image gallery */}
              <ProductImageGallary product={products[0]} />
            </Col>
            <Col lg={6}>
              {/*product description */}
              <ProductDescription
                singleProduct={singleProduct}
                product={product[0]}
                productPrice={productPrice}
                discountedPrice={discountedPrice}
                cartItems={cartItems}
                cartItem={cartItem}
                wishlistItem={wishlistItem}
                compareItem={compareItem}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              {/* product description tab */}
              <ProductDescriptionTab singleProduct={singleProduct} product={product[0]} />
            </Col>
          </Row>

          {/* related product slider */}
          <ProductSliderTwo title='Related Products' products={product} />
        </Container>
      </div>
    </>
  );
};

export default ProductDetails;

// export async function getStaticPaths() {
//   // get the paths we want to pre render based on products
//   const paths = products.map((product) => ({
//     params: { slug: product.slug }
//   }));
//
//   return { paths, fallback: false };
// }
//
// export async function getStaticProps({ params }) {
//   // get product data based on slug
//   const product = products.filter((single) => single.slug === params.slug)[0];
//
//   return { props: { product } };
// }
