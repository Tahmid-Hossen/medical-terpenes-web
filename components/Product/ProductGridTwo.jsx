"use client"
import {useState} from "react";
import Link from "next/link";
import clsx from "clsx";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import ProductRating from "@/components/Product/ProductRating";
import Image from "next/image";

const ProductGridTwo = ({
                          product,
                          discountedPrice,
                          productPrice,
                          cartItem,
                          wishlistItem,
                          compareItem,
                          bottomSpace
                        }) => {
  const [modalShow, setModalShow] = useState(false);
  const [colorImage, setColorImage] = useState("");
  const dispatch = () => {
    console.log('fdsfdsafsfda')
  }

  return (
    <>
      <div className={clsx("product-grid d-flex flex-column justify-content-between rounded h-100", bottomSpace)}>
        <div className="product-grid__image d-flex justify-content-center">
          <Link href={"shop/product-details/" + product.slug}>

            <Image width={100} height={100}
              src={colorImage ? colorImage : product.thumbImage[0]}
              alt="product_img1"
            />

          </Link>
          <div className="product-grid__badge-wrapper">
            {product.new ? <span className="pr-flash">NEW</span> : ""}
            {product.featured ? (
              <span className="pr-flash bg-danger">HOT</span>
            ) : (
              ""
            )}
            {product.discount ? (
              <span className="pr-flash bg-success">SALE</span>
            ) : (
              ""
            )}
          </div>
          <div className="product-grid__action-box">
            <ul>
              <li>
                {product.affiliateLink ? (
                  <a href={product.affiliateLink} target="_blank">
                    <i className="icon-action-redo"/>
                  </a>
                ) : product.variation && product.variation.length >= 1 ? (
                  (
                    <OverlayTrigger
                      key={'top'}
                      placement={'top'}
                      overlay={
                        <Tooltip id="tooltip-disabled" className="">Go to the product details</Tooltip>
                      }
                    >
                      <Link href={"shop/product-details/" + product.slug}>
                        <i className="icon-wrench"/>
                      </Link>
                    </OverlayTrigger>
                  )
                ) : product.stock && product.stock > 0 ? (
                  <OverlayTrigger
                    key={'top'}
                    placement={'top'}
                    overlay={
                      <Tooltip id="tooltip-disabled" className="">Added to cart</Tooltip>
                    }
                  >
                    <button
                      onClick={() => dispatch((product))}
                      disabled={
                        cartItem !== undefined &&
                        cartItem.quantity >= cartItem.stock
                      }
                      className={cartItem !== undefined ? "active" : ""}
                    >
                      <i className="icon-basket-loaded"/>
                    </button>
                  </OverlayTrigger>
                ) : (
                  <button disabled>
                    <i className="icon-basket-loaded"/>
                  </button>
                )}
              </li>
              {/* <li>
                <button
                  onClick={
                    compareItem !== undefined
                      ? () => dispatch(deleteFromCompare(product.id))
                      : () => dispatch(addToCompare(product))
                  }
                  className={compareItem !== undefined ? "active" : ""}
                >
                  <i className="icon-shuffle" />
                </button>
              </li> */}
              <li>
                <OverlayTrigger
                  key={'top'}
                  placement={'top'}
                  overlay={
                    <Tooltip id="tooltip-disabled" className="">View The Product</Tooltip>
                  }
                >
                  <button
                    onClick={() => setModalShow(true)}
                    className="d-none d-lg-block"
                  >
                    {/* <i className="icon-magnifier-add" /> */}
                    <i className="icon-eye"/>
                  </button>
                </OverlayTrigger>
                {/* <button
                  onClick={() => setModalShow(true)}
                  className="d-none d-lg-block"
                >
                  <i className="icon-eye" />
                </button> */}
              </li>
              <li>
                <OverlayTrigger
                  key={'top'}
                  placement={'top'}
                  overlay={
                    <Tooltip id="tooltip-disabled" className="">Added to wishlist</Tooltip>
                  }
                >
                  <button
                    onClick={
                      wishlistItem !== undefined
                        ? () => dispatch((product.id))
                        : () => dispatch((product))
                    }
                    className={wishlistItem !== undefined ? "active" : ""}
                  >
                    <i className="icon-heart"/>
                  </button>
                </OverlayTrigger>
              </li>
            </ul>
          </div>
        </div>
        <div className="product-grid__info">
          <h6 className="product-title">
            <Link href={"shop/product-details/" + product.slug}>
              {product.name}
            </Link>
          </h6>
          <div className="product-price">
            {product.discount ? (
              <>
                <span className="price">${discountedPrice}</span>
                <del>${productPrice}</del>
                <span className="on-sale">{product.discount}% Off</span>
              </>
            ) : (
              <span className="price">${productPrice}</span>
            )}
          </div>
          <div className="rating-wrap">
            <ProductRating ratingValue={product.rating}/>
            <span className="rating-num">({product.ratingCount})</span>
          </div>

          {/* {product.variation ? (
            <div className="product-switch-wrap">
              <ul>
                {product.variation.map((single, key) => {
                  return (
                    <li key={key}>
                      <button
                        style={{ backgroundColor: `${single.colorCode}` }}
                        onClick={() => setColorImage(single.image)}
                        className={
                          colorImage === single.image ? "active" : ""
                        }
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            ""
          )} */}
        </div>
      </div>
      {/* product modal */}
      {/*<ProductModal*/}
      {/*  show={modalShow}*/}
      {/*  onHide={() => setModalShow(false)}*/}
      {/*  product={product}*/}
      {/*  discountedprice={discountedPrice}*/}
      {/*  productprice={productPrice}*/}
      {/*  cartitem={cartItem}*/}
      {/*  wishlistitem={wishlistItem}*/}
      {/*  compareitem={compareItem}*/}
      {/*/>*/}
    </>
  );
};

export default ProductGridTwo;
