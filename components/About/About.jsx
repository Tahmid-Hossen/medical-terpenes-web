"use client"

import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import TextWithImageOne from "@/components/TextWithImage/TextWithImageOne";
import IconBoxTerpenes from "@/components/IconBox/IconBoxTerpenes";


const AboutUs = () => {
  return (
    <>

      <Breadcrumb pageTitle="About Us">
        <ol className="breadcrumb align-items-center justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active">About Us</li>
        </ol>
      </Breadcrumb>
      {/* text with image */}
      <TextWithImageOne/>
      {/* icon box */}
      <IconBoxTerpenes/>
      {/* team member*/}
      {/* <TeamMemberOne teamMemberData={teamMemberOneData} /> */}
      {/* testimonial */}
      {/* <TestimonialOne testimonialData={testimonialOneData} /> */}
      {/* icon box */}
      {/* <IconBoxOne /> */}
    </>
  );
};

export default AboutUs;
