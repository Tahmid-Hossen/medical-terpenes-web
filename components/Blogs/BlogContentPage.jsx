"use client"

import Link from "next/link";
import {Container, Row, Col} from "react-bootstrap";
import {toast} from "react-toastify";
import {useEffect, useState} from "react";
import Preloader from "@/components/Preloader";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import BlogContents from "@/components/Blogs/BlogContents";
import product from "@/data/products.json";
import BlogSidebar from "@/components/Blogs/BlogSidebar";
import BrandsWidget from "@/components/Product/ProductWidgets/BrandsWidget";
import WidgetsWrapper from "@/components/Product/ProductWidgets/WidgetsWrapper";


const BlogContentPage = ({blogId}) => {

  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentData, setCurrentData] = useState(product);

  const fetchSinglePost = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post-details/${blogId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      return {error: true, message: error.message, data: {posts: [], count: 0}};
    }
  };
  useEffect(() => {
    const getPost = async () => {
      const data = await fetchSinglePost();
      if (!data.error) {
        setPost(data.data);
        toast.success(data.message);
      }
      setLoading(false);
    };

    getPost();
    // eslint-disable-next-line
  }, []);
  if (loading) {
    return <Preloader/>;
  }
  return (
    <>
      {/* breadcrumb */}
      <Breadcrumb pageTitle="Blog Details">
        <ol className="breadcrumb align-items-center justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active">Blog Details</li>
        </ol>
      </Breadcrumb>
      <div className="blog-content space-pt--r100 space-pb--r100">
        <Container>
          <Row>
            <Col lg={9}>
              <BlogContents post={post}/>
            </Col>
            <Col lg={3} className="mt-4 pt-2 mt-lg-0 pt-lg-0">
              <BlogSidebar products={currentData} blogs={post}/>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default BlogContentPage;
