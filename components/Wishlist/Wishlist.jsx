'use client';
import Link from 'next/link';
import {Container, Row, Col} from 'react-bootstrap';
import {IoIosClose} from 'react-icons/io';
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import {getDiscountPrice} from '@/lib/product';
import React, {useState} from 'react';
import Image from 'next/image';
import {useDispatch, useSelector} from "react-redux";
import {deleteFromWishlist} from "@/store/slices/wishlist-slice";
import ProductModal from "@/components/Product/ProductModal";

const Wishlist = () => {
  const [modalShow, setModalShow] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null); // Track the active product for the modal
  const {wishlistItems} = useSelector((state) => state.wishlist); // Fetch wishlist items from the store
  const {cartItem} = useSelector((state) => state.cart); // Fetch cart items from the store
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    setActiveProduct(product); // Set the active product to show in the modal
    setModalShow(true); // Show the modal
  };

  const calculatePrices = (subProducts) => {
    if (subProducts.length > 0) {
      // Extract all prices
      const allPrices = subProducts.flatMap((subProduct) =>
        subProduct.volume.map((vol) => vol.price)
      );

      // Return min and max prices
      return {
        minPrice: Math.min(...allPrices),
        maxPrice: Math.max(...allPrices),
      };
    }
    return {minPrice: 0, maxPrice: 0};
  };

  return (
    <>


      {/*<Breadcrumb pageTitle='Wishlist'>*/}
      {/*  <ol className='breadcrumb align-items-center justify-content-md-end'>*/}
      {/*    <li className='breadcrumb-item'>*/}
      {/*      <Link href='/'>Home</Link>*/}
      {/*    </li>*/}
      {/*    <li className='breadcrumb-item active'>Wishlist</li>*/}
      {/*  </ol>*/}
      {/*</Breadcrumb>*/}

      <div className='wishlist-content'>

        <Container>
          <h3 className='pb-4'>Wishlist</h3>
          {!!wishlistItems && wishlistItems.length >= 1 ? (
            <Row>
              <Col lg={12}>
                <div className='table-responsive shop-cart-table'>
                  <table className='table mb-0'>
                    <thead>
                    <tr>
                      <th className='product-thumbnail'>&nbsp;</th>
                      <th className='product-name'>Product</th>
                      <th className='product-name'>Categories</th>
                      <th className='product-price'>Price</th>
                      <th className='product-name'>Formula</th>
                      <th className='add-to-cart'>&nbsp;</th>
                      <th className='product-remove text-center'>Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                    {wishlistItems.map((product, key) => {
                      const subProducts = product?.variation || [];
                      const {minPrice, maxPrice} = calculatePrices(subProducts);

                      return (
                        <tr key={key}>
                          <td className='product-thumbnail'>
                            <Link href={`/products/${product.id}`}>
                              <Image
                                width={100}
                                height={100}
                                src={`${process.env.NEXT_PUBLIC_API_URL}/public/${product?.thumbImage?.[0]}`}
                                alt='product1'
                              />
                            </Link>
                          </td>

                          <td className='product-name small-text' data-title='Product'>
                            <Link href={`/products/${product.id}`}>{product.name}</Link>
                            {product.selectedProductColor && product.selectedProductSize && (
                              <div className='cart-variation'>
                                <p>Color: {product.selectedProductColor}</p>
                                <p>Size: {product.selectedProductSize}</p>
                              </div>
                            )}
                          </td>

                          <td className='product-name small-text' data-title='Category'>
                            {product?.category && product?.category.length > 0
                              ? product.category.filter(Boolean).join(', ')
                              : 'No Category Available'}
                          </td>

                          <td className='product-price small-text' data-title='Price'>
                            {minPrice && maxPrice
                              ? `$${minPrice} - $${maxPrice}`
                              : 'Price Not Available'}
                          </td>

                          <td className='product-formula small-text' data-title='Formula'>
                            {product?.variation && product?.variation.length > 0
                              ? product.variation.map((item) => item.formula).filter(Boolean).join(', ')
                              : 'No Formula Available'}
                          </td>

                          <td className='add-to-cart text-center'>
                            <button
                              className={`radius-btn mt-3 px-3 py-2 btn-radius staggered-animation border-0 ${
                                cartItem !== undefined ? 'active' : ''
                              }`}
                              onClick={() => handleAddToCart(wishlistItems)}
                              style={{fontSize: '14px'}}>
                              <i className='icon-basket-loaded'/> Add To Cart
                            </button>
                          </td>

                          <td className='product-remove'>
                            <button onClick={() => dispatch(deleteFromWishlist(product.id))}>
                              <IoIosClose/>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                    </tbody>
                  </table>
                </div>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col>
                <div className='item-empty-area text-center'>
                  <div className='item-empty-area__icon space-mb--30'>
                    <i className='icon-heart'/>
                  </div>
                  <div className='item-empty-area__text'>
                    <p className='space-mb--30'>No items found in wishlist</p>
                    <Link href='/products' className='btn btn-fill-out'>
                      Add Some
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </div>

      {/* Conditionally render the modal when activeProduct is set */}
      {activeProduct && (
        <ProductModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          productId={activeProduct?.[0]?.id}
          discountedPrice={activeProduct?.[0]?.discount_price || 0}
          productPrice={activeProduct.price}
          cartItem={cartItem}
          wishlistItem={wishlistItems}
        />
      )}
    </>
  );
};

export default Wishlist;
