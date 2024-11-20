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
import {fetchblogs} from "@/hooks/use-api";
import BlogPagination from "@/components/Blogs/BlogPagination";
import BlogCard from "@/components/Blogs/BlogCard";

const params = {
  loop: false,
  slidesPerView: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
};

const BlogLists = ({blogs, columns, title, subtitle}) => {

  return (
    <div className='blog-blog-grid-home-area mt-60'>
      <Container>
        {title ? <div className='blog-home-area-title-custom'>
          <p>{title}</p>
          <h4>{subtitle}</h4>

          <div className='blog-home-area-title-hr'></div>
        </div> : <></>}

        <Row>
          {blogs.map((blog) => (
            blog.status === 'Published' ? (
                <Col key={blog._id} xl={columns && columns === 4 ? 3 : 4} md={6}>
                  <BlogCard post={blog}/>
                </Col>)
              : ''
          ))}
        </Row>
        {/*{title ?*/}
        {/*  <></> :*/}
        {/*  <BlogPagination/>*/}
        {/*}*/}
      </Container>
    </div>
  );
};

export default BlogLists;
