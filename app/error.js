"use client"

import Link from "next/link";
import {Container, Row, Col} from "react-bootstrap";
import {IoIosSearch} from "react-icons/io";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import {useEffect} from "react";

const Error = ({error, reset}) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <>
      {/*// <LayoutTerpenes>*/}
      {/* breadcrumb */}
      <Breadcrumb pageTitle="Not Found">
        <ol className="breadcrumb align-items-center justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active">Not Found</li>
        </ol>
      </Breadcrumb>
      <div className="not-found-content space-pt--r100 space-pb--r100">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col lg={6} md={10}>
              <div className="text-center">
                <div className="error-txt">404</div>
                <h5 className="mb-2 mb-sm-3">
                  oops! The page you requested was not found!
                </h5>
                <p>
                  The page you are looking for was moved, removed, renamed or
                  might never existed.
                </p>
                <div className="search-form pb-3 pb-md-4">
                  <form method="post">
                    <input
                      name="text"
                      id="text"
                      type="text"
                      placeholder="Search"
                      className="form-control"
                    />
                    <button type="submit" className="btn icon-search">
                      <IoIosSearch/>
                    </button>
                  </form>
                </div>
                <Link href="/" className="btn btn-fill-out">Back To Home</Link>
                <button className='btn btn-fill-out' onClick={() => reset()}>Try again</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/*// </LayoutTerpenes>*/}
    </>
  );
};

export default Error;
