"use client";
import { Row, Col, Card } from "react-bootstrap";
import Image from "next/image";
import { useState } from "react";

const CategoryBanner = ({ containerClass, bannerData, categoriesData }) => {
    const getImageSrc = (imagePath) =>
        imagePath
            ? `${process.env.NEXT_PUBLIC_API_URL}/public${imagePath}`
            : "/assets/images/default/product-image-not-available.png";

    return (
        <div className="banner-area py-5 bg-custom">
            <div className={`${containerClass ? containerClass : "container"}`}>
                <Row xs={1} md={2} className="gx-5 gy-3 w-90">
                    {/*Actual Category Data*/}
                    {/*{categoriesData?.map((category, index) => (
                        <Col key={index} md={index === categoriesData?.length - 1 ? 12 : 6}>
                            <Card className="bg-transparent text-black border-0 rounded--4 custom-card-section">
                                <Image
                                    width={630}
                                    height={270}
                                    className="object-fit-fill rounded--4"
                                    variant="top"
                                    src={getImageSrc(category?.image)}
                                    alt={category?.name}
                                />
                                <Card.Body className="custom-card card-img-overlay align-middle card-body d-flex flex-column justify-content-center">
                                    <Card.Title className="fs-md-2">{category?.name}</Card.Title>
                                    <Card.Text
                                        className="my--3"
                                        dangerouslySetInnerHTML={{
                                            __html: category?.description.slice(0, 150) + "...",
                                        }}
                                    />
                                    <Card.Link
                                        href={`/products/category/${category?.slug?.replace(/\s+/g, "-")}`}
                                        className="radius-btn w-100 w-md-75 w-lg-50 btn btn-radius staggered-animation text-uppercase slider-link btn-custom-width"
                                    >
                                        Shop Now
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}*/}
                    {/*End Of Actual Category Data*/}
                    {bannerData?.map((category, index) => (
                        <Col key={index} md={index === bannerData?.length - 1 ? 12 : 6}>
                            <Card className="bg-transparent text-black border-0 rounded--4 custom-card-section">
                                <Card.Img className="rounded--4" variant="top" src={category?.backgroundImage}/>
                                <Card.Body
                                  className="custom-card card-img-overlay align-middle card-body d-flex flex-column justify-content-center">
                                  <Card.Title className="fs-md-2">{category?.title}</Card.Title>
                                  <Card.Text className="my--3">
                                    {category?.description}
                                  </Card.Text>
                                  <Card.Link href={`/products`}
                                             className="radius-btn w-100 w-md-75 w-lg-50 btn btn-radius staggered-animation text-uppercase slider-link btn-custom-width"> Shop
                                    Now </Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default CategoryBanner;
