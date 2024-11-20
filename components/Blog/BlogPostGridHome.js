"use client"
import Link from 'next/link';
import Image from 'next/image';
import {Row, Col, Container} from 'react-bootstrap';
import {SlCalender} from 'react-icons/sl';
import {BsDot} from 'react-icons/bs';
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import {useEffect, useState} from 'react';
import {toast} from 'react-toastify';
import Preloader from "@/components/Preloader";
import {fetchPosts} from "@/hooks/use-api";
import {getBlogs} from "@/services/getBlogs";
import BlogCard from "@/components/Blogs/BlogCard";

const params = {
  loop: false,
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
};

const BlogPostGridHome = ({columns, title, subtitle}) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      const blogs = await getBlogs();
      if (!blogs.error) {
        setPosts(blogs?.data?.posts);
        toast.success(blogs.message);
      }
      setLoading(false);
    };

    getPosts();
  }, []);
  if (loading) {
    return <Preloader/>;
  }
  return (
    <div className='blog-post-grid-home-area mt-60'>
      <Container>
        {title ? <div className='blog-home-area-title-custom'>
          <p>{title}</p>
          <h4>{subtitle}</h4>

          <div className='blog-home-area-title-hr'></div>
        </div> : <></>}

        <Row>
          {posts?.slice(0, 6).map((post) => (
            post.status === 'Published' ? (
                <Col key={post._id} xl={columns && columns === 4 ? 3 : 4} md={6}>
                  <BlogCard post={post}/>
                </Col>)
              : ''
          ))}
        </Row>
        {title ?
          <></> : <Row>
            <Col className="mt-2 mt-md-4">
              <ul className="pagination pagination-style justify-content-end">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabIndex={-1}>
                    <IoIosArrowBack/>
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <IoIosArrowForward/>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>}
      </Container>
    </div>
  );
};

export default BlogPostGridHome;
