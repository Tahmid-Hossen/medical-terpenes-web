'use client';

import RecentPostWidget from '@/components/Blogs/RecentPostWidget';
import BrandsWidget from '@/components/Product/ProductWidgets/BrandsWidget';
import PopularItemsWidget from '@/components/Product/ProductWidgets/PopularItemsWidget';
import TagsWidget from '@/components/Product/ProductWidgets/TagsWidget';
import WidgetsWrapper from '@/components/Product/ProductWidgets/WidgetsWrapper';
import {
  getDiscountPrice,
  getIndividualCategories,
  getIndividualColors,
  getIndividualTags,
  getProducts,
  getProductsIndividualSizes,
} from '@/lib/product';
import Image from 'next/image';
import Link from 'next/link';
import {useEffect, useState} from "react";
import {getCategories} from "@/services/getCategories";
import data from "bootstrap/js/src/dom/data";
import {getBlogs} from "@/services/getBlogs";

const BlogSidebar = ({products}) => {
  const [categories, setCategories] = useState([])
  const [blogs, setBlogs] = useState([])
  const tags = getIndividualTags(products);
  const popularProducts = getProducts(products, 'TERPENES', 'popular', 4);


  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesData = await getCategories();
      const blogs = await getBlogs()
      const blogList = blogs?.data?.posts
      const categoryList = categoriesData?.data?.categories || [];
      setCategories(categoryList);
      setBlogs(blogList)
    }
    fetchCategories()
  }, []);

  console.log('blogs', blogs)

  return (
    <div className='sidebar'>
      <WidgetsWrapper title='Recent Post'>
        {blogs.length > 0 ? (
          <ul className='widget__categories'>
            {blogs && blogs.map((blog, key) => <RecentPostWidget key={key} blog={blog}/>)}
          </ul>
        ) : (
          'No categories found'
        )}
      </WidgetsWrapper>

      <WidgetsWrapper title='Brands'>
        {categories.length > 0 ? (
          <ul className='widget__categories'>
            {categories && categories.map((category, key) => <BrandsWidget key={key} category={category}/>)}
          </ul>
        ) : (
          'No categories found'
        )}
      </WidgetsWrapper>

      <WidgetsWrapper title='Popular Items'>
        {popularProducts?.length > 0 ? (
          <ul className='widget-recent-post-wrapper'>
            {popularProducts &&
              popularProducts.map((product, key) => {
                const discountedPrice = getDiscountPrice(product.price, product.discount).toFixed(2);
                const productPrice = product.price.toFixed(2);
                return (
                  <PopularItemsWidget
                    key={key}
                    product={product}
                    discountedPrice={discountedPrice}
                    productPrice={productPrice}
                  />
                );
              })}
          </ul>
        ) : (
          'No products found'
        )}
      </WidgetsWrapper>

      <WidgetsWrapper title='Tags'>
        {tags?.length > 0 ? (
          <div className='widget__tags'>{tags && tags.map((tag, key) => <TagsWidget key={key} tag={tag}/>)}</div>
        ) : (
          'No tags found'
        )}
      </WidgetsWrapper>

      <div className='widget'>
        <div className='shop-banner'>
          <div className='banner-img'>
            <Image
              src='/assets/images/product/discount-product/discount-product.png'
              alt='sidebar_banner_img'
              width={100}
              height={100}
            />
          </div>
          <div className='shop-bn-content2 align-self-end'>
            <h6 className='text-uppercase shop-subtitle'>New Collection</h6>
            <h3 className='text-uppercase shop-title'>Sale 30% Off</h3>
            <Link
              href='/products'
              className='btn-sm radius-btn btn btn-radius staggered-animation text-uppercase slider-link'>
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
