// import Products from "@/components/Product/Products";
import dynamic from "next/dynamic";

const Products = dynamic(() => import("../../../../components/Product/Products"), {
  ssr: false,
});
import {getCategories} from "@/services/getCategories";
import {getCategoryWiseProducts} from "@/services/getCategoryWiseProducts";


const ProductsPage = async ({params: {slug}}) => {
  const categoriesData = await getCategories();
  const categoryList = categoriesData?.data?.categories;

  // Decode URL-encoded slug and normalize it
  const decodedSlug = decodeURIComponent(slug).toLowerCase().replace(/_/g, ' ').replace(/-/g, ' ').trim();

  // Find the exact category with normalized slug
  const exactCategory = categoryList.find(category =>
    category?.slug.toLowerCase().replace(/_/g, ' ').replace(/-/g, ' ').trim() === decodedSlug
  );

  // Find the exact getCategoryWiseProducts using exactCategory id
  const categoryWiseProduct = await getCategoryWiseProducts(exactCategory?._id);


  return (
    <>
      <Products categories={categoryList} categoryWiseProducts={categoryWiseProduct?.data?.data}/>
    </>
  );
};

export default ProductsPage;