"use client"

import Image from 'next/image'
import {Container, Row, Col, Card} from "react-bootstrap";

const productsSample = [
  {
    "id": 1,
    "name": "Sauce Terps",
    "review": "Sauce Terps resembles the essence of flower, for a full bodied strain specific terpene prSauce Terps resembles the essence of flower, for a full bodied strain specific terpene profile. Look no further, the dank pungent in your face terpene profile is here! Not your grandmas terpenes. It is made with natural organic derived terpenes. Due to the pungent and delicious aroma of this line of terpene profiles, odor control is highly advised!ofile. Look no further, the dank pungent in your face terpene profile is here! Not your grandmas terpenes.",
    "productImg": "/assets/images/product/explore/ep-1.png",

  },
  {
    "id": 2,
    "name": "Ultra Candy",
    "review": "Ultra Candy Terpenes are the ultimate choice for anyone who loves fruity and sweet flavors. They are perfect for adding a burst of flavor and fun to your products. You can for all kinds of products to add a candy twist. Our Ultra Candy Terpenes are pure, natural, and lab-tested for quality and potency. They are extremely potent, with NO FILLERS, a little goes a long way",
    "productImg": "/assets/images/product/explore/ep-2.png",


  },
  {
    "id": 3,
    "name": "Medical Terpenes",
    "review": "Medical terpenes is a strain specific terpene profile. It is made with natural organic derived terpenes. Each strain harnesses the power of various terpenes in respective ratios, delivering a consistent strain specific profile. Fruity variants are also available, which are the traditional strain specific terpene blend combined with other flavorings outside the strain specific family.",
    "productImg": "/assets/images/product/explore/ep-3.png",

  },
  {
    "id": 4,
    "name": "710 Terps",
    "review": "710 Terps is a strain specific terpene profile. It is made with natural organic derived terpenes. 710 Terps is a cost effective terpene solution, and priced accordingly. It is a Truely Floral xperience.",
    "productImg": "/assets/images/product/explore/ep-4.png",

  }
];

const ExploreOurProducts = () => {
  return (
    <div className="icon-box-area bg--blue-two space-pt--r100 space-pb--r70 ">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7} md={8} className=" space-mb--30">
            <div className="heading-s1 text-center space-mb--20">
              <p className="text--primary">What We Offer</p>
              <h2>Explore Our Products</h2>
            </div>
            <p className="text-center lh-base">
              A lot of people around the world use CBD products to get relief from their symptoms. Our products are
              certified, we care about quality and we are extremely proud of our laboratory.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {productsSample?.map((product, index) => (
            <Col lg={3} sm={6} key={index}>
              <div className="icon-box icon-box--style2  rounded-5">
                <div className="icon-box__content">
                  <div className="">
                    <div className="blog-post__image">
                      <Image src={product.productImg} className="img-fluid mx-auto" width={144} height={175}
                             alt={`${product.name}-${index}`}/>
                    </div>

                    <div className="mt-4">
                      <h5 className="text-center testimonialClientName">{product.name}</h5>
                      <p className="text-justify paragraph lh-base">
                        {product.review}
                      </p>
                    </div>
                    <Card.Link href={`/products`} className="btn btn-gradient staggered-animation"
                               style={{marginTop: "40px"}}> Shop Now </Card.Link>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ExploreOurProducts;
