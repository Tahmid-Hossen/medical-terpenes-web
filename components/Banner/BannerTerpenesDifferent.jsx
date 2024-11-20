import Link from "next/link";
import Image from 'next/image'; // Ensure the Image component from 'next/image' is imported correctly
import { Row, Col, Card, Button } from "react-bootstrap";
import TerpenesDifferent from '../../../public/assets/images/background/terpenes_different.png';

const BannerTerpenesDifferent = ({ containerClass }) => {
  return (
    <div
      className="banner-different-area py-5"
      style={{
        backgroundImage: `url(${TerpenesDifferent.src})`,
        backgroundSize: 'cover', // Ensures the background image covers the whole area
        backgroundPosition: '100% 0%' // Centers the image
      }}
    >
      <div className={`${containerClass ? containerClass : "container"}`}>
        <h1>content comming...</h1>
      </div>
    </div>
  );
};

export default BannerTerpenesDifferent;
