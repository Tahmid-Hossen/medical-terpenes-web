"use client"
import React from 'react';
import {getDiscountPrice} from "@/lib/product";
import {Col, Row} from "react-bootstrap";
import clsx from "clsx";
import ProductCard from "@/components/Product/ProductCard";
import WholesaleProductCard from "@/app/wholesale/_components/WholesaleProductCard";

const WholesaleProductList = ({layout, products}) => {
  return (
    <div className="shop-products">
      <Row className={`${layout} container mx-auto my-3`}>
        {products?.map((product, key) => {
          return (
            <Col lg={4} sm={6} className={clsx('space-mb--50')} key={product._id}>
              <WholesaleProductCard
                key={product._id}
                product={product?.productDetails}
                productId={product._id}
                productPrice={product?.price}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default WholesaleProductList;