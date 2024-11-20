'use client';

import ProductImageGallary from "@/components/Product/ProductImageGallary";
import { getDiscountPrice, getProductCartQuantity } from '@/lib/product';
import { getProductById } from "@/services/getProductById";
import { addToCart } from "@/store/slices/cart-slice";
import { addToWishlist, deleteFromWishlist } from "@/store/slices/wishlist-slice";
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import { Col, Modal, Row } from 'react-bootstrap';
import { BiLogoInstagramAlt, BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi';
import { TiSocialFacebook } from 'react-icons/ti';
import { useDispatch, useSelector } from "react-redux";
import ProductRating from './ProductRating';

const ProductModal = ({show, onHide, productId, wishlistitem, compareitem, cartitem}) => {
  const [product, setProduct] = useState([]);

  const [selectedProductFormula, setSelectedProductFormula] = useState(product?.variation ? product?.variation?.[0]?.formula : '');
  const [selectedProductVolume, setSelectedProductVolume] = useState(product?.variation ? product?.variation?.[0]?.volume?.[0]?.name : '');
  const [productStock, setProductStock] = useState(product?.variation ? product?.variation?.[0].volume?.[0]?.stock : product?.stock);
  const [quantityCount, setQuantityCount] = useState(1);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [subProductId, setSubProductId] = useState(null);

  const {cartItems} = useSelector(state => state.cart)
  const {wishlistItems} = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const [productPrice, setProductPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);

  const productCartQty = getProductCartQuantity(cartItems, product, selectedProductFormula, selectedProductVolume);

  // Fetch product by ID
  useEffect(() => {
    const fetchProductById = async () => {
      try {
        if (productId) {
          const response = await getProductById(productId);
          const fetchedProduct = response?.data?.data?.data?.[0];
          setProduct(fetchedProduct);
        }
      } catch (error) {
        console.error('Error fetching product by ID:', error);
      }
    };
    fetchProductById();
  }, [productId]);

  // Set default selected formula, volume, and price when component mounts
  useEffect(() => {
    if (product?.variation?.length > 0) {
      const defaultFormula = product.variation[0]?.formula;
      const defaultVolume = product.variation[0]?.volume?.[0];
      // console.log(defaultVolume);
      setSelectedProductFormula(defaultFormula);
      setSelectedProductVolume(defaultVolume?.name);
      setProductStock(defaultVolume?.stock);

      const price = defaultVolume?.price ?? 0;
      const discountPrice = getDiscountPrice(price, defaultVolume?.discount_price)?.toFixed(2) ?? price;

      setProductPrice(price.toFixed(2));
      setDiscountedPrice(discountPrice);
      setSubProductId(defaultVolume.subproduct_id);
    }
  }, [product]);

  // Update price when formula or volume changes
  useEffect(() => {
    if (product?.variation?.length > 0) {
      const selectedVariation = product.variation.find(v => v.formula === selectedProductFormula);
      const selectedVolume = selectedVariation?.volume?.find(v => v.name === selectedProductVolume);
      // console.log(selectedVolume);

      if (selectedVolume) {
        const price = selectedVolume?.price ?? 0;
        const discountPrice = getDiscountPrice(price, selectedVolume?.discount_price)?.toFixed(2) ?? price;

        setProductPrice(price.toFixed(2));
        setDiscountedPrice(discountPrice);
        setProductStock(selectedVolume?.stock);
        setSubProductId(selectedVolume.subproduct_id);
      }
    }
  }, [selectedProductFormula, selectedProductVolume, product]);

  const onCloseModal = () => {
    setThumbsSwiper(null);
    onHide();
    // Reset states to initial values
    setSelectedProductFormula(product?.variation ? product?.variation?.[0]?.formula : '');
    setSelectedProductVolume(product?.variation ? product?.variation?.[0]?.volume?.[0]?.name : '');
    setProductStock(product?.variation ? product?.variation?.[0]?.volume?.[0]?.stock : product?.stock);
    setQuantityCount(1);
    setProductPrice(0);
    setDiscountedPrice(0);
  };

  if (!product || !product?.image || product?.image?.length === 0) return null;

  console.log('product', product)

  return (
    <Modal show={show} onHide={onCloseModal} className='product-quickview' centered>
      <Modal.Body>
        <Modal.Header closeButton></Modal.Header>
        <Row>
          <Col lg={6}>
            {product && (
              <ProductImageGallary product={product} singleProduct={product}/>
            )}
          </Col>
          <Col lg={6}>
            <div className='product-quickview__content'>
              <h2 className='product-quickview__title space-mb--10'>{product?.name}</h2>
              <div className='product-quickview__price-rating-wrapper space-mb--10' style={{display: 'block'}}>
                <div className='product-quickview__price d-flex-align-items-center'>
                  {product?.discount ? (
                    <Fragment>
                      <span className='price'>${discountedPrice}</span>
                      <del>${productPrice}</del>
                      <span className='on-sale'>{product?.discount}% Off</span>
                    </Fragment>
                  ) : (
                    <span className='price'>${productPrice}</span>
                  )}
                </div>
                {product.rating && product.rating > 0 ? (
                  <div className='product-quickview__rating-wrap mt-3'>
                    <div className='product-quickview__rating' style={{color: '#00B5DC !important'}}>
                      <ProductRating ratingValue={product?.rating ? product.rating : 4.5}/>
                      {/* <span className="rating-num">({product.ratingCount})</span> */}
                      <span className='rating-num'>(3)</span>
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </div>
              <div className='product-quickview__description space-mb--20'>
                <p>{product?.shortDescription}</p>
              </div>

              {product?.variation ? (
                <>
                  {/* Product Variation With Formula and Volume */}
                  <div className="product-content__formula-color">
                    {/* Formula Selection */}
                    <div className="product-content__volume space-mb--20">
                      <div className="product-content__volume__title">Formula</div>
                      <div className="product-content__volume__content d-flex">
                        {product?.variation.map((single, i) => (
                          <Fragment key={i}>
                            <input
                              type="radio"
                              value={single.formula}
                              name="product-formula"
                              id={single.formula}
                              checked={single.formula === selectedProductFormula}
                              onChange={() => {
                                setSelectedProductFormula(single.formula);
                                setSelectedProductVolume(single.volume?.[0]?.name);
                                setQuantityCount(1);
                              }}
                            />
                            <label htmlFor={single.formula}>
                              {single.formula}
                            </label>
                          </Fragment>
                        ))}
                      </div>
                    </div>

                    {/* Volume Selection */}
                    <div className="product-content__formula space-mb--20">
                      <div className="product-content__formula__title">Volume</div>
                      <div className="product-content__formula__content">
                        {product?.variation?.map(single => {
                          if (single.formula === selectedProductFormula) {
                            // Filter unique volumes
                            const uniqueVolumes = single?.volume?.reduce((acc, current) => {
                              const existingVolume = acc.find(v => v.name === current?.name);
                              if (!existingVolume ||
                                (existingVolume?.price !== current?.price ||
                                  existingVolume?.discount_price !== current?.discount_price)) {
                                acc.push(current);
                              }
                              return acc;
                            }, []);

                            return uniqueVolumes.map((singleVolume, i) => (
                              <Fragment key={i}>
                                <input
                                  type="radio"
                                  value={singleVolume?.name}
                                  checked={singleVolume?.name === selectedProductVolume}
                                  id={singleVolume?.name}
                                  onChange={() => {
                                    setSelectedProductVolume(singleVolume?.name);
                                    setQuantityCount(1);
                                  }}
                                />
                                <label htmlFor={singleVolume.name}>
                                  {singleVolume.name}
                                </label>
                              </Fragment>
                            ));
                          }
                          return null;
                        })}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                ''
              )}
              <hr/>
              {product.affiliateLink ? (
                <div className='product-quickview__quality'>
                  <div className='product-quickview__cart btn-hover'>
                    <a href={product.affiliateLink} target='_blank' className='btn btn-fill-out btn-addtocart'>
                      Buy Now
                    </a>
                  </div>
                </div>
              ) : (
                <Fragment>
                  <div className='product-quickview__button-wrapper d-flex flex-column flex-md-row align-items-center'>
                    <div className='product-content__quantity'>
                      <div className='cart-plus-minus'>
                        {/* Decrement Button */}
                        <button
                          onClick={() => setQuantityCount(quantityCount > 1 ? quantityCount - 1 : 1)}
                          className='qtybutton'>
                          -
                        </button>

                        {/* Display Quantity */}
                        <input
                          className='cart-plus-minus-box'
                          type='text'
                          value={quantityCount}
                          readOnly
                        />

                        {/* Increment Button */}
                        <button
                          onClick={() => {
                            // Check if productStock and productCartQty are valid
                            const availableStock = (productStock || 0) - (productCartQty || 0);

                            if (quantityCount < availableStock) {
                              setQuantityCount(quantityCount + 1);
                            }
                          }}
                          className='qtybutton'>
                          +
                        </button>
                      </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      onClick={() => {
                        dispatch(addToCart({
                          id: product?.id,
                          subproduct_id: subProductId,
                          slug: product?.slug,
                          sku: product?.sku || null,
                          name: product?.name,
                          price: Number(discountedPrice),
                          quantity: quantityCount,
                          formula: selectedProductFormula,
                          volume: selectedProductVolume,
                          productRole: 'Regular'
                        }));
                        // Reset quantity count to 1 after adding to cart
                        setQuantityCount(1);
                        setSelectedProductVolume('')
                        setSelectedProductFormula('')
                        onCloseModal()
                      }}
                      className='btn btn-addtocart space-ml--10 radius-btn px-3 py-2 btn-radius staggered-animation '>
                      <i className='icon-basket-loaded'/> Add To Cart
                    </button>
                    <button
                      className={`product-content__wishlist ${wishlistItems?.some(item => item.id === product.id) ? 'active' : ''}`}
                      title={wishlistItems?.some(item => item.id === product.id) ? 'Added to wishlist' : 'Add to wishlist'}
                      onClick={() => {
                        if (wishlistItems?.some(item => item.id === product.id)) {
                          dispatch(deleteFromWishlist(product.id));
                        } else {
                          dispatch(addToWishlist(product));
                        }
                      }}>
                      <i className='icon-heart'/>
                    </button>

                  </div>
                </Fragment>
              )}
              <hr/>
              <ul className='product-quickview__product-meta'>
                <li>
                  SKU: <span>{product?.sku}</span>
                </li>
                <li>
                  Category:
                  {product.category &&
                    product.category.map((item, index, arr) => {
                      return (
                        <Link href='/products' key={index}>
                          {item + (index !== arr.length - 1 ? ', ' : '')}
                        </Link>
                      );
                    })}
                </li>
                <li>
                  Tags:
                  {product.tag &&
                    product.tag.map((item, index, arr) => {
                      return (
                        <Link href='/products' key={index}>
                          {item + (index !== arr.length - 1 ? ', ' : '')}
                        </Link>
                      );
                    })}
                </li>
              </ul>
              <div className='product-quickview__product-share space-mt--15'>
                <span>Share:</span>
                <ul className='social-icons'>
                  <li>
                    <a href='#'>
                      {/* <IoLogoFacebook /> */}
                      <TiSocialFacebook className='text-danger'/>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      {/* <IoLogoTwitter /> */}
                      <BiLogoTwitter/>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      {/* <IoLogoInstagram /> */}
                      <BiLogoInstagramAlt/>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <BiLogoLinkedin/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default ProductModal;
