"use client"

import {Row, Col} from "react-bootstrap";
import clsx from "clsx";
import {getDiscountPrice} from "@/lib/product";
import ProductCard from "@/components/Product/ProductCard";
import {useSelector} from "react-redux";

const ProductListsWrapper = ({products, bottomSpace, layout}) => {
  const {cartItems} = useSelector((state) => state.cart);
  const {wishlistItems} = useSelector((state) => state.wishlist);
  const {compareItems} = useSelector((state) => state.compare);

  return (
    <Row className={layout}>
      {products?.map((product, key) => {
        /*console.log("single",product)
        console.log("All Products",products)*/

        /*const discountedPrice = getDiscountPrice(
          product?.price,
          product?.discount_price
        )?.toFixed(2);*/

        const subProducts = product?.subProducts  || []
        let discountedPrice = 0;
        let productPrice = 0;
        subProducts?.map((subProduct,key) => {
          discountedPrice = getDiscountPrice(subProduct?.price, subProduct?.discount_price)?.toFixed(2);
          productPrice = subProduct?.price?.toFixed(2);
        })
        // const discountedPrice = getDiscountPrice(product?.variation?.[0]?.volume?.[0]?.price, product?.variation?.[0]?.volume?.[0]?.discount_price)?.toFixed(2);

        // const productPrice = product?.price?.toFixed(2);

        // Find items in cart, wishlist, and compare lists
        const cartItem = cartItems.find(
          (cartItem) => cartItem._id === product._id
        );
        const wishlistItem = wishlistItems.find(
          (wishlistItem) => wishlistItem._id === product._id
        );
        const compareItem = compareItems.find(
          (compareItem) => compareItem._id === product._id
        );

        return (
          <Col lg={4} sm={6} className={clsx(bottomSpace)} key={product._id}>
            <ProductCard
              key={product._id}
              product={product}
              discountedPrice={discountedPrice}
              productPrice={productPrice}
              cartItem={cartItem}
              wishlistItem={wishlistItem}
              compareItem={compareItem}
            />
          </Col>
        );
      })}
    </Row>
  );
};

export default ProductListsWrapper;