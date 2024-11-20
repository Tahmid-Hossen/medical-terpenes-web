"use client"
import React from 'react';
import {Card} from "react-bootstrap";
import UserPersonalInfo from "@/app/my-account/_components/UserPersonalInfo";

const PeronalInfoPage = () => {
  return (
    <Card className="my-account-content__content">
      <Card.Body>
        <UserPersonalInfo/>
      </Card.Body>
    </Card>
  );
};

export default PeronalInfoPage;