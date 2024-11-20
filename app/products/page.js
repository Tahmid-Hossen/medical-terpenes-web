import {getCategories} from "@/services/getCategories";
import {getCategoryWiseProducts} from "@/services/getCategoryWiseProducts";
import dynamic from "next/dynamic";
import React from "react";

const Products = dynamic(() => import("../../components/Product/Products"), {
  ssr: false,
});

const ProductsPage = async () => {
  try {
    const categoriesData = await getCategories();
    const categoryList = categoriesData?.data?.categories || [];

    const categoryId = "all";
    const categoryWiseProduct = await getCategoryWiseProducts(categoryId);


    return (
      <>
        <Products
          categories={categoryList}
          categoryWiseProducts={categoryWiseProduct?.data?.data || []}
        />
      </>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading products. Please try again later.</div>;
  }
};

export default ProductsPage;
