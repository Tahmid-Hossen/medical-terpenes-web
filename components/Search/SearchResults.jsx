"use client"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import ProductListsWrapper from "@/components/Product/ProductListsWrapper";
import { getSearchProducts } from "@/services/getSearchProducts";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from 'react';
import { Container } from "react-bootstrap";

const SearchResults = () => {

  const searchParams = useSearchParams()
  const query = searchParams.get('query');
  const [products, setProducts] = useState([]);

  // Fetch products whenever the query changes
  useEffect(() => {
    if (query) {
      const fetchProducts = async () => {
        const result = await getSearchProducts(query);
        console.log(products.length)
        setProducts(result?.data); // Assume getSearchProducts returns an array of products
      };
      fetchProducts();
    }
  }, [query]);


  return (
    <>
      <Breadcrumb pageTitle="Search">
        <ol className='breadcrumb align-items-center justify-content-md-end'>
          <li className='breadcrumb-item'>
            <Link href='/'>Home</Link>
          </li>
          <li className='breadcrumb-item'>
            <Link href='/search'>Search</Link>
          </li>
        </ol>
      </Breadcrumb>

      <div className='product-details space-pt--r100 space-pb--r100'>
        <Container>
          <div className="shop-products-search">
            {products.length > 0 ? (
              <ProductListsWrapper
                products={products}
                filteredProducts={products}
                bottomSpace="space-mb--50"
                layout='grid'
              />
            ) : (
              <p>`No products found for ${query}`</p>
            )}
          </div>
        </Container>
      </div>
    </>
  );
};

export default SearchResults;