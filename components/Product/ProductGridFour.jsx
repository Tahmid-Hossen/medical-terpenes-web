import ProductRating from "@/components/Product/ProductRating";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";


const ProductGridFour = ({
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
    console.log('djasjdksadh')
  }

  return (
    <Fragment>
      <div className={clsx("product-grid product-grid--style-two", bottomSpace)}>
        <div className="product-grid__image">
          <Link href={"shop/product-details/" + product.slug}>

            <Image width={100} height={100}
              src={colorImage ? colorImage : product.thumbImage[0]}
              alt="product_img1"
            />

          </Link>

          <div className="product-grid__action-box">
            <ul>
              <li>
                <button
                  onClick={
                    compareItem !== undefined
                      ? () => dispatch(deleteFromCompare(product.id))
                      : () => dispatch(addToCompare(product))
                  }
                  className={compareItem !== undefined ? "active" : ""}
                >
                  <i className="icon-shuffle"/>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setModalShow(true)}
                  className="d-none d-lg-block"
                >
                  <i className="icon-magnifier-add"/>
                </button>
              </li>
              <li>
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
              </li>
            </ul>
          </div>
        </div>
        <div className="product-grid__info text-center">
          <h6 className="product-title">
            <Link href={"shop/product-details/" + product.slug}>
              {product.name}
            </Link>
          </h6>
          <div className="product-price">
            {product.discount ? (
              <Fragment>
                <span className="price">${discountedPrice}</span>
                <del>${productPrice}</del>
              </Fragment>
            ) : (
              <span className="price">${productPrice}</span>
            )}
          </div>
          <div className="rating-wrap">
            <ProductRating ratingValue={product.rating}/>
            <span className="rating-num">({product.ratingCount})</span>
          </div>
          <div className="add-to-cart">
            {product.affiliateLink ? (
              <a
                href={product.affiliateLink}
                target="_blank"
                className="btn btn-fill-out btn-radius"
              >
                <i className="icon-action-redo"/> Buy Now
              </a>
            ) : product.variation && product.variation.length >= 1 ? (
              (<Link
                href={"shop/product-details/" + product.slug}
                className="btn btn-fill-out btn-radius">

                <i className="icon-wrench"/>Select Options
              </Link>)
            ) : product.stock && product.stock > 0 ? (
              <button
                onClick={() => dispatch((product))}
                disabled={
                  cartItem !== undefined &&
                  cartItem.quantity >= cartItem.stock
                }
                className={`btn btn-fill-out btn-radius ${
                  cartItem !== undefined ? "active" : ""
                }`}
              >
                <i className="icon-basket-loaded"/> Add To Cart
              </button>
            ) : (
              <button disabled className="btn btn-fill-out btn-radius">
                <i className="icon-basket-loaded"/> Add To Cart
              </button>
            )}
          </div>
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
    </Fragment>
  );
};

export default ProductGridFour;
