import {useEffect, useState} from "react";
import Link from "next/link";
import clsx from "clsx";
import ProductRating from "@/components/Product/ProductRating";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import Image from "next/image";
import {addToWishlist, deleteFromWishlist} from "@/store/slices/wishlist-slice";
import ProductModal from "@/components/Product/ProductModal";
import {getProductById} from "@/services/getProductById";

const RelatedProductCard = ({
                              product,
                              prices,
                              discountedPrice,
                              productPrice,
                              cartItem,
                              wishlistItem,
                              compareItem,
                              bottomSpace
                            }) => {
  const [modalShow, setModalShow] = useState(false);
  const [colorImage, setColorImage] = useState("");
  const [singleProduct, setSingleProduct] = useState([]);
  const dispatch = () => {
    console.log('fdsfdsafsfda')
  }
    useEffect(() => {
        const fetchProductById = async () => {
            try {
                if (product?._id) {
                    const response = await getProductById(product._id);
                    const fetchedProduct = response?.data?.data?.data[0];
                    setSingleProduct(fetchedProduct);
                }
            } catch (error) {
                console.error('Error fetching product by ID:', error);
            }
        };
        fetchProductById();
    }, [product?._id]);

  return (
    <>
      <div className={clsx("product-grid d-flex flex-column justify-content-between rounded h-100", bottomSpace)}>
          <div className="product-grid__image d-flex justify-content-center">
              <Link href={'/products/' + product?._id}>
                  <Image
                      style={{width: '100%', height: '250px'}}
                      width={180}
                      height={150}
                      className={""}
                      src={product?.image ? `${process.env.NEXT_PUBLIC_API_URL}/public${product?.image}` : '/assets/images/default/default-product.png'}
                      alt={product?.name ?? 'N/A'}
                  />
              </Link>
              {/*<div className="product-grid__badge-wrapper">
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
          </div>*/}
              <div className='product-grid__badge-wrapper'>
                  {product?.attribute?.Formula === '45' ? <span className='pr-flash'>NEW</span> : ''}
                  {product?.attribute?.Formula === '100' ? <span className='pr-flash bg-danger'>HOT</span> : ''}
                  {product?.discount_price ? <span className='pr-flash bg-success'>SALE</span> : ''}
              </div>
              {/*<div className='product-grid__action-box'>
                  <ul>
                      <li>
                <button
                  onClick={
                    compareItem !== undefined
                      ? () => dispatch(deleteFromCompare(product._id))
                      : () => dispatch(addToCompare(product))
                  }
                  className={compareItem !== undefined ? "active" : ""}
                >
                  <i className="icon-shuffle" />
                </button>
              </li>
                      <li>
                          <button onClick={() => setModalShow(true)} className='d-none d-lg-block'>
                              <i className='icon-eye'/>
                          </button>
                      </li>
                      <li>
                          <button
                              onClick={
                                  wishlistItem !== undefined
                                      ? () => dispatch(deleteFromWishlist(product._id))
                                      : () => dispatch(addToWishlist(product))
                              }
                              className={wishlistItem !== undefined ? 'active' : ''}>
                              <i className='icon-heart'/>
                          </button>
                      </li>
                  </ul>
              </div>*/}
          </div>
          <div className="product-grid__info">
              <h6 className="product-title">
                  <Link href={'/products/' + product?._id}>
                      {product?.name}
                  </Link>
              </h6>

              {/*<div className="product-price">
                {product.discount ? (
                  <>
                    <span className="price">${discountedPrice}</span>
                    <del>${productPrice}</del>
                    <span className="on-sale">{product.discount}% Off</span>
                  </>
                ) : (
                  <span className="price">${productPrice}</span>
                )}
              </div>*/}
              <div className='product-price'>
                  {prices.length > 0 ? (
                      // If there are valid prices, calculate min and max
                      Math.min(...prices) === Math.max(...prices) ? (
                          <span className='price'>${Math.min(...prices).toFixed(2)}</span>
                      ) : (
                          <span className='price'>
                ${Math.min(...prices).toFixed(2)} – ${Math.max(...prices).toFixed(2)}
             </span>
                      )
                  ) : (
                      <span className='price'>Price Not Available</span>
                  )}
              </div>
              <div className='rating-wrap'>
                  <ProductRating ratingValue={product?.rating ? product?.rating : 4.5}/>
                  {/* <span className="rating-num">({product.ratingCount})</span> */}
                  <span className='rating-num'>(3)</span>
              </div>

              {/*{product?.variation ? (
                  <div className="product-switch-wrap">
                      <ul>
                          {product?.variation.map((single, key) => {
                              return (
                                  <li key={key}>
                                      <button
                                          style={{backgroundColor: `${single.colorCode}`}}
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
              )}*/}
          </div>
      </div>
        {/* product modal */}
        {/*<ProductModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            product={singleProduct}
            discountedPrice={discountedPrice}
            productprice={productPrice}
            cartitem={cartItem}
            wishlistitem={wishlistItem}
            compareitem={compareItem}
        />*/}
    </>
  );
};

export default RelatedProductCard;
