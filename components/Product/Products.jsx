"use client"

import {Col, Container, Row} from "react-bootstrap";
import HeroCategorySliderTerpenesData from "@/data/hero-sliders/hero-category-slider-terpenes.json";
import product from "@/data/products.json";
import ProductSidebar from "@/components/Product/ProductSidebar";
import ShopProducts from "@/components/Product/ShopProducts";
import ShopHeader from "@/components/Product/ShopHeader";
import ProductsCategorySlider from "@/components/Sliders/ProductsCategorySlider";

const Products = ({categories, categoryWiseProducts}) => {
  return (
    <>
      <ProductsCategorySlider heroSliderData={HeroCategorySliderTerpenesData}/>
      <div className="shop-content space-pt--r100 space-pb--r100">
        <Container>
          <Row>
            <Col lg={9}>
              {/*<ShopHeader layout="grid"/>*/}
              {
                categoryWiseProducts?.length > 0 ?
                  (
                    <ShopProducts layout='grid' products={categoryWiseProducts}/>
                  )
                  : (
                    <div className="text-center">
                      <h2>No products found in this category.</h2>
                    </div>
                  )
              }
            </Col>
            <Col lg={3} className="order-lg-first mt-4 pt-2 mt-lg-0 pt-lg-0">
              <ProductSidebar products={product} categories={categories}/>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Products;
