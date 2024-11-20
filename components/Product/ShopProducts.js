"use client"
import ProductListsWrapper from "@/components/Product/ProductListsWrapper";


const ShopProducts = ({products, layout}) => {
  return (
    <div className="shop-products">
      <ProductListsWrapper
        products={products}
        filteredProducts={products}
        bottomSpace="space-mb--50"
        layout={layout}
      />
    </div>
  );
};

export default ShopProducts;
