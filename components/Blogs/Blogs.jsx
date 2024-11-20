"use client"
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import Link from "next/link";
import {Col, Container, Row} from "react-bootstrap";
import BlogLists from "@/components/Blogs/BlogLists";

const Blogs = ({blogs}) => {
  return (
    <>
      <Breadcrumb pageTitle="Blog">
        <ol className="breadcrumb align-items-center justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active">Blog</li>
        </ol>
      </Breadcrumb>
      <div className="blog-content space-pb--r100">
        <Container>
          <Row>
            <Col lg={12}>
              <BlogLists blogs={blogs}/>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Blogs;