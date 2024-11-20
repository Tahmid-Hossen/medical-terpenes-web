"use client"

import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const MyProfilePreview = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="text-image-section">

      <Row className="align-items-center gap-0" style={{background: "#f5f5f5", paddingLeft: "16px"}}>
        <Col lg={3} className="px-1">
          <Image 
          // src="/assets/images/Dashboard/userProfile.png" 

          src={user?.image ? `${process.env.NEXT_PUBLIC_API_URL}/public${user?.image}` : "/assets/images/Dashboard/userProfile.png" }
          className="rounded-2 about-img scene" alt="about_img"
          width={70} height={70}/>
        </Col>
        <Col lg={9} className="py-2">
          <div>
            <h6 className="fs-6 fw-semibold mb-0" style={{color: '#262626'}}> {user.name}</h6>
          </div>
          <span className="py-1" style={{fontSize: "14px", color: '#525252', fontWeight: '400'}}>{user?.phone_number}</span>
          <p className="py-1 mt-0" style={{fontSize: "14px", color: '#525252', fontWeight: '400'}}>{user?.email}</p>
        </Col>
      </Row>

    </div>
  );
};

export default MyProfilePreview;

