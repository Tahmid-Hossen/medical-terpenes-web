import React from 'react';
import {Col, Row} from "react-bootstrap";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

const BlogPagination = () => {
  return (
    <Row>
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
    </Row>
  );
};

export default BlogPagination;