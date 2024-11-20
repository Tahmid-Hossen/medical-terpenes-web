'use client';

import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import { verifyCoupon } from "@/services/verifyCoupon";
import {
  applyDiscountToCart,
  decreaseQuantity,
  deleteAllFromCart,
  deleteFromCart,
  increaseQuantity
} from '@/store/slices/cart-slice';
import Link from 'next/link';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { toast } from "react-hot-toast";
import { IoIosClose } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  const dispatch = useDispatch();
  const {cartItems} = useSelector((state) => state.cart);
  let cartTotalPrice = 0;

  cartItems.forEach((product) => {
    const productTotal = product.price * product.quantity;
    cartTotalPrice += productTotal;
  });

  console.log('cartItems', cartItems)

  const applyCoupon = async () => {
    // Check if the total price is less than $10
    if (cartTotalPrice < 10) {
      setErrorMessage('The total price must be at least $10 to apply a coupon.');
      toast.error('The total price must be at least $10 to apply a coupon.');
      return;
    }

    try {
      const data = await verifyCoupon(couponCode);
      if (data.error) {
        setErrorMessage(data.message);
        toast.error('Invalid coupon code or inactive coupon.');
        setSuccessMessage('');
        return;
      }

      const couponData = data?.data?.data;
      console.log(couponData);
      if (couponData) {
        localStorage.setItem('coupon_id', couponData?._id);
        const discountAmount = couponData.discount_value;
        const discountedTotalPrice = cartTotalPrice * (1 - discountAmount / 100);

        if (discountedTotalPrice < 10) {
          setErrorMessage('This coupon cannot be applied as the total price would be less than $10.');
          toast.error('This coupon cannot be applied as the total price would be less than $10.');
          return;
        }

        if (couponData.discount_type === "Percentage" && couponData.status === "Active") {
          setDiscount(couponData.discount_value);
          dispatch(applyDiscountToCart(couponData.discount_value));
          setSuccessMessage('Coupon applied successfully!');
          toast.success('Coupon applied successfully!');
          setErrorMessage('');
          setIsCouponApplied(true);
        } else {
          setErrorMessage('Invalid coupon code or inactive coupon.');
          toast.error('Invalid coupon code or inactive coupon.');
          setSuccessMessage('');
        }
      } else {
        setErrorMessage('Invalid coupon code.');
        toast.error('Invalid coupon code or inactive coupon.');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Error verifying coupon:', error);
      setErrorMessage('There was an error applying the coupon. Please try again.');
      setSuccessMessage('');
    }
  };

  const discountedTotalPrice = cartTotalPrice * (1 - discount / 100);

  return (
    <>
      <Breadcrumb pageTitle='Shopping Cart'>
        <ol className='breadcrumb align-items-center justify-content-md-end'>
          <li className='breadcrumb-item'>
            <Link href='/'>Home</Link>
          </li>
          <li className='breadcrumb-item active'>Shopping Cart</li>
        </ol>
      </Breadcrumb>
      <div className='cart-content space-pt--r100 space-pb--r100'>
        <Container>
          {!!cartItems && cartItems.length >= 1 ? (
            <>
              <Row>
                <Col lg={12}>
                  <div className='table-responsive shop-cart-table'>
                    <table className='table mb-3'>
                      <thead>
                      <tr>
                        <th className='product-thumbnail'>&nbsp;</th>
                        <th className='product-name'>Product</th>
                        <th className='product-name'>Type</th>
                        <th className='product-price'>Price</th>
                        <th className='product-quantity'>Quantity</th>
                        <th className='product-subtotal'>Total</th>
                        <th className='product-remove text-center'>Remove</th>
                      </tr>
                      </thead>
                      <tbody>
                      {cartItems.map((product, key) => {
                        const productTotal = product.price * product.quantity;
                        return (
                          <tr key={key}>
                            <td className='product-thumbnail'>
                              {/* Product Image */}
                            </td>
                            <td className='product-name' data-title='Product'>
                              <Link href={`/product/${product.id}`}>{product.name} - {product?.formula}-({product?.volume})</Link>
                            </td>
                            <td className='product-name' data-title='Product'>
                              {product?.productRole}
                            </td>
                            <td className='product-price' data-title='Price'>
                              ${product.price.toFixed(2)}
                            </td>
                            <td className='product-quantity' data-title='Quantity'>
                              <div className='cart-plus-minus'>
                                <button onClick={() => dispatch(decreaseQuantity(product))} className='qtybutton'>-
                                </button>
                                <input className='cart-plus-minus-box' type='text' value={product.quantity} readOnly/>
                                <button onClick={() => dispatch(increaseQuantity(product))} className='qtybutton'>+
                                </button>
                              </div>
                            </td>
                            <td className='product-subtotal' data-title='Total'>
                              ${(productTotal).toFixed(2)}
                            </td>
                            <td className='product-remove'>
                              <button onClick={() => dispatch(deleteFromCart(product.cartItemId))}>
                                <IoIosClose/>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                      </tbody>
                      <tfoot>
                      <tr>
                        <td colSpan='6' className='px-0 pb-4 pt-4'>
                          <Row className='gx-0 align-items-center'>
                            <Col lg={4} md={6} className="mb-3 mb-md-0">
                              <div className="coupon field-form input-group">
                                <input
                                  type="text"
                                  className="form-control form-control-sm"
                                  placeholder="Enter Coupon Code.."
                                  value={couponCode}
                                  onChange={(e) => setCouponCode(e.target.value)}
                                  disabled={isCouponApplied}
                                />
                                <button
                                  className="input-group-text btn-normal btn-sm"
                                  type="button"
                                  onClick={applyCoupon}
                                  disabled={isCouponApplied}
                                >
                                  Apply Coupon
                                </button>
                              </div>
                            </Col>
                            <Col lg={8} md={6} className='text-start text-md-end'>
                              <button
                                className='btn btn-line-fill btn-sm'
                                type='submit'
                                onClick={() => dispatch(deleteAllFromCart())}>
                                Clear Cart
                              </button>
                            </Col>
                          </Row>
                        </td>
                      </tr>
                      </tfoot>
                    </table>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <div>
                    <div className='heading-s1 mb-3'>
                      <h6>Calculate Shipping</h6>
                    </div>
                    <form className='field-form shipping-calculator'>
                      <div className='row'>
                        <div className='mb-3 col-lg-12'>
                          <select className='form-control'>
                            <option value>Choose a option...</option>
                            <option value='AX'>Aland Islands</option>
                            <option value='AF'>Afghanistan</option>
                            <option value='AL'>Albania</option>
                            <option value='DZ'>Algeria</option>
                            <option value='AD'>Andorra</option>
                            <option value='AO'>Angola</option>
                            <option value='AI'>Anguilla</option>
                            <option value='AQ'>Antarctica</option>
                            <option value='AG'>Antigua and Barbuda</option>
                          </select>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='mb-3 col-lg-6'>
                          <input
                            required='required'
                            placeholder='State / Country'
                            className='form-control'
                            name='name'
                            type='text'
                          />
                        </div>
                        <div className='mb-3 col-lg-6'>
                          <input
                            required='required'
                            placeholder='PostCode / ZIP'
                            className='form-control'
                            name='name'
                            type='text'
                          />
                        </div>
                      </div>
                      <div className='row'>
                        <div className='mb-3 col-lg-12'>
                          <button className='btn-gradient-2' type='submit'>
                            Update Totals
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </Col>
                <Col md={6}>
                  <div className='border p-3 p-md-4'>
                    <div className='heading-s1 mb-3'>
                      <h6>Cart Totals</h6>
                    </div>
                    <div className='table-responsive'>
                      <table className='table'>
                        <tbody>
                        <tr>
                          <td className='cart-total-label'>Discount</td>
                          <td className='cart-total-amount'>{discount}%</td>
                        </tr>
                        <tr>
                          <td className='cart-total-label'>Cart Subtotal</td>
                          <td className='cart-total-amount'>${discountedTotalPrice.toFixed(2)}</td>
                        </tr>
                        <tr>
                          <td className='cart-total-label'>Shipping</td>
                          <td className='cart-total-amount'>Free Shipping</td>
                        </tr>
                        <tr>
                          <td className='cart-total-label'>Total</td>
                          <td className='cart-total-amount'>
                            <strong>${discountedTotalPrice.toFixed(2)}</strong>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                    <Link href='/checkout' className='btn-gradient'>
                      Proceed To CheckOut
                    </Link>
                  </div>
                </Col>
              </Row>
            </>
          ) : (
            <Row>
              <Col>
                <div className='item-empty-area text-center'>
                  <div className='item-empty-area__icon space-mb--30'>
                    <i className='icon-basket-loaded'/>
                  </div>
                  <div className='item-empty-area__text'>
                    <p className='space-mb--30'>No items found in cart</p>
                    <Link href='/products' className='btn btn-gradient'>
                      Shop Now
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </div>
    </>
  );
};

export default Cart;
