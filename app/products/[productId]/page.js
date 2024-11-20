import React from 'react';
import dynamic from "next/dynamic";
// import ProductDetails from "@/components/Product/ProductDetails";

const ProductDetails = dynamic(() => import("../../../components/Product/ProductDetails"), {
  ssr: false,
});
import {getProductById} from "@/services/getProductById";
import {getCategoryWiseProducts} from "@/services/getCategoryWiseProducts";


const ProductDetailsPage = async ({params: {productId}}) => {
  const product = await getProductById(productId)
  const productCategoryName = product?.data?.data?.data?.[0]?.category?.[0];
  const categoryWiseProduct = await getCategoryWiseProducts("all");
  // Filter related products by category name and exclude the current product
  const relatedProducts = categoryWiseProduct.data?.data.filter((products) => {
    return (
      products?.category_name?.toLowerCase() === productCategoryName?.toLowerCase() &&
      products?._id !== product?.data?.data?.data?.[0]?.id // Exclude the current product by ID
    );
  });
  return (
    <>
      <ProductDetails singleProduct={product?.data?.data?.data?.[0]} relatedProducts={relatedProducts}/>
    </>
  );
};

export default ProductDetailsPage;