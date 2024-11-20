import React from 'react';
import Link from "next/link";
import {Col, Container, Row} from "react-bootstrap";
import MyAccountSidebar from "@/app/my-account/_components/MyAccountSidebar";

const MyAcccountLayout = ({children}) => {
  return (
    <>

      <Container>
        <hr/>
        <ol className="breadcrumb justify-content-md-start  my-account-content">
          <li className="breadcrumb-item">
            <Link href="/" prefetch={false}>Home</Link>
          </li>
          <li className="breadcrumb-item active " style={{alignItems: 'center', display: 'flex'}}>My Account</li>
        </ol>
      </Container>

      <div className="my-account-content space-pt--30 space-pb--r100">
        <Container>
          <Row>
            <MyAccountSidebar/>
            <Col lg={9} md={8}>
              {children}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MyAcccountLayout;