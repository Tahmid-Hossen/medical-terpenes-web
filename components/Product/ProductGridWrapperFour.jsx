"use client"

import {Row, Col} from "react-bootstrap";
import {getDiscountPrice} from "@/lib/product";
import RelatedProductCard from "@/components/Product/RelatedProductCard";

const ProductGridWrapperFour = ({products, bottomSpace}) => {
  const cartItems = []
  const wishlistItems = []
  const compareItems = []

  console.log(products)
  return (
    <Row>
      {products?.map((product) => {
        const discountedPrice = getDiscountPrice(
          product.price,
          product.discount
        ).toFixed(2);
        const productPrice = product.price.toFixed(2);
        const cartItem = cartItems.find(
          (cartItem) => cartItem.id === product.id
        );
        const wishlistItem = wishlistItems.find(
          (wishlistItem) => wishlistItem.id === product.id
        );
        const compareItem = compareItems.find(
          (compareItem) => compareItem.id === product.id
        );

        return (
          <Col lg={3} sm={6} key={product.id}>
            <RelatedProductCard
              product={product}
              discountedPrice={discountedPrice}
              productPrice={productPrice}
              cartItem={cartItem}
              wishlistItem={wishlistItem}
              compareItem={compareItem}
              bottomSpace={bottomSpace}
            />
          </Col>
        );
      })}
    </Row>
  );
};

export default ProductGridWrapperFour;
