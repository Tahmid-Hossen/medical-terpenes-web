'use client';

import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import { getDiscountPrice } from '@/lib/product';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Col, Container, Modal, Row } from 'react-bootstrap';
import { IoMdCash } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { CreditCard, PaymentForm } from 'react-square-web-payments-sdk';
import Loader from '../Loader/Loader';

import { getOrderAddress } from '@/services/UserService';
import { deleteAllFromCart } from '@/store/slices/cart-slice';


const Checkout = ({}) => {
  const dispatch = useDispatch();
  // const [cartItems, setCartItems] = useState(products)
  const user = useSelector((state) => state.auth.user);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [taxAmount, setTaxAmount] = useState(0);
  const [shippingAmount, setShippingAmount] = useState(0);
  const [paymentPayload, setPaymentPayload] = useState({});
  const [coupon, setCuppon] = useState(null);
  const [showNewBillingAdress, SetShowNewBillingAdress] = useState(false);
  const [paymentType, setPaymentType] = useState('CARD');
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);
  const [orderedData, setOrderedData] = useState({});
  const [discount, setDiscount] = useState(0);
  const [showWireTransferModal, setShowWireTransferModal] = useState(false);

  const [errors, setErrors] = useState({});
  const [billingErrors, setBillingErrors] = useState({});
  const [showNewShippingAdress, setShowNewShippingAdress] = useState(false);
  const [userShippingAddress, setUserShippingAddress] = useState([]);
   const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);
  const {cartItems} = useSelector((state) => state.cart);

  const router = useRouter();


  const [shippingData, setShippingData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    city: '',
    province: '',
    country: '',
    post_code: '',
    street_address: '',
  });



  const [billingData, setBillingData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    city: '',
    province: '',
    country: '',
    post_code: '',
    street_address: '',
  });


  let cartTotalPrice = 0;

  const onCloseModal = () => {
    setShowModal(false)
    setShowWireTransferModal(false)
  }

  // Simulate async operation before PaymentForm is displayed
  const initializePaymentForm = async () => {
    try {
      // Simulate an initialization delay (e.g., loading SDKs or configurations)
      await new Promise((resolve) => setTimeout(resolve, 0)); // Simulates a 2-second delay
    } catch (error) {
      console.error('Initialization Error:', error);
    } finally {
      // setIsLoading(false); // Hide loader and show PaymentForm
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch('/api/auth/verify-auth');
      // console.log(res);
      if (res.ok) {
        const {message} = await res.json();
        if (message === 'Unauthorized') {
          // dispatch(clearAuth());
          router.push('/auth/login'); // Redirect to login
        }
      }
    };
    checkAuth();
    initializePaymentForm();
    getProducts();
  }, []);

  console.log('cartItems', cartItems)

  const getProducts = () => {
    const products = cartItems?.map(item => {
      const discountPrice = getDiscountPrice(item?.price, item?.discountedPrice || 0);
      setCuppon(item?.discountedPrice);
      return {
        product: item?.productRole === "Wholesale" ? item?.id : item?.subproduct_id,
        name: item?.name,
        sku: item?.sku,
        price: discountPrice.toFixed(2),
        quantity: item?.quantity,
        total: (item?.quantity * discountPrice).toFixed(2),
      };
    });

    const subTotalPrice = products.reduce((acc, item) => acc + parseFloat(item.total), 0).toFixed(2);
    const cartTotalPrice = parseFloat(subTotalPrice);

    if (cartTotalPrice < 10) {
      return {
        products: products,
        subTotal: parseFloat(subTotalPrice),
        total: cartTotalPrice,
      };
    }

    const totalTax = parseFloat(taxAmount) || 0;
    const shippingCost = parseFloat(shippingAmount) || 0;

    // Calculate the discount amount (assuming discount is a percentage)
    const discountAmount = (discount || 0) / 100 * cartTotalPrice; // Use the discount state
    const discountedSubtotal = cartTotalPrice - discountAmount;

    const finalTotalPrice = discountedSubtotal + totalTax + shippingCost;


    return {
      products: products,
      subTotal: parseFloat(discountedSubtotal.toFixed(2)),
      total: parseFloat(finalTotalPrice.toFixed(2)),
    };
  };


  const validate = () => {
    let validationErrors = {};

    let validationBillingErrors = {};


    if (!shippingData.first_name.trim()) {
      validationErrors.first_name = 'First name is required';
    }

    if (!shippingData.last_name.trim()) {
      validationErrors.last_name = 'Last name is required';
    }

    if (!shippingData.email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(shippingData.email)) {
      validationErrors.email = 'Email is invalid';
    }

    if (!shippingData.phone.trim()) {
      validationErrors.phone = 'Phone number is required';
    }

    // else if (!/^\d{10}$/.test(shippingData.phone)) {
    //   validationErrors.phone = 'Phone number is invalid';
    // }

    if (!shippingData.city.trim()) {
      validationErrors.city = 'City is required';
    }

    if (!shippingData.province.trim()) {
      validationErrors.province = 'Province is required';
    }

    if (!shippingData.country.trim()) {
      validationErrors.country = 'Country is required';
    }

    if (!shippingData.post_code.trim()) {
      validationErrors.post_code = 'Post code is required';
    }

    // else if (!/^\d{5}$/.test(shippingData.post_code)) {
    //   validationErrors.post_code = 'Post code is invalid';
    // }

    if (!shippingData.street_address.trim()) {
      validationErrors.street_address = 'Street address is required';
    }

    if (showNewBillingAdress) {

      if (!billingData.first_name.trim()) {
        validationBillingErrors.first_name = 'First name is required';
      }

      if (!billingData.last_name.trim()) {
        validationBillingErrors.last_name = 'Last name is required';
      }

      if (!billingData.email.trim()) {
        validationBillingErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(billingData.email)) {
        validationBillingErrors.email = 'Email is invalid';
      }

      if (!billingData.phone.trim()) {
        validationBillingErrors.phone = 'Phone number is required';
      }
      // else if (!/^\d{10}$/.test(billingData.phone)) {
      //   validationBillingErrors.phone = 'Phone number is invalid';
      // }

      if (!billingData.city.trim()) {
        validationBillingErrors.city = 'City is required';
      }

      if (!billingData.province.trim()) {
        validationBillingErrors.province = 'Province is required';
      }

      if (!billingData.country.trim()) {
        validationBillingErrors.country = 'Country is required';
      }

      if (!billingData.post_code.trim()) {
        validationBillingErrors.post_code = 'Post code is required';
      }
      // else if (!/^\d{5}$/.test(billingData.post_code)) {
      //   validationBillingErrors.post_code = 'Post code is invalid';
      // }

      if (!billingData.street_address.trim()) {
        validationBillingErrors.street_address = 'Street address is required';
      }


    }

    // console.log(validationErrors)


    setErrors(validationErrors);
    // setErrors(validationBillingErrors);
    setBillingErrors(validationBillingErrors);
    return Object.keys(validationErrors).length === 0 && Object.keys(validationBillingErrors).length === 0;

  };


  const processSquarePayment = async (token) => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/payment/square', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sourceId: token.token,
          data: paymentPayload,
        }),
      });

      // setIsLoading(false)

      const {data, error, message} = await response.json();


      // console.log(error, message, data)
      // setShowModal(false);
      if (!error) {
        setOrderedData(data);
        dispatch(deleteAllFromCart());
        setIsOrderCompleted(true)
        router.push(`/order-confirmation/${data?._id}`);
      }

      // router.push('/payment-callback/fail');


      // const data = await response.json();
      // console.log(data);
    } catch (error) {
      setIsLoading(false)
      console.error('Payment Error:', error);
    }
  }

  const processPayment = async (payload = null) => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/payment/cod', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: payload ?? paymentPayload,
        }),
      });

       setShowWireTransferModal(false)

      // setIsLoading(false)
      const {data, error, message} = await response.json();
      // console.log(error, message, data)
      if (!error) {
        setOrderedData(data);
        dispatch(deleteAllFromCart());
        setIsOrderCompleted(true)

        router.push(`/order-confirmation/${data?._id}`);

      }

     


      // const data = await response.json();
      // console.log(data);
    } catch (error) {
      setShowWireTransferModal(false)
      setIsLoading(false)
      console.error('Payment Error:', error);
    }
  }


  const fetchAddress = async () => {
    setIsLoading(true);
    try {
      const response = await getOrderAddress();
      if (response.error) {
        throw new Error(response.message);
      }
      // console.log(response?.data?.data)
      if (response?.data?.data?.addresss?.length === 0) {
        setShowNewShippingAdress(true)
      }
      setUserShippingAddress(response?.data?.data?.addresss);
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to fetch addresss:", error);
      // setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
     
    fetchAddress();
  }, []);


  const handleSquarePayment = (token) => {

    if  (showNewShippingAdress === false || (showNewShippingAdress === true && validate())) {
      // Proceed with form submission
      const productInfo = getProducts();
      const payload = {
        customer: user.id,
        customer_email: user.email,
        products: productInfo.products ?? productInfo.id,
        sub_total: productInfo.subTotal,
        tax_amount: taxAmount,
        shipping_amount: shippingAmount,
        total: productInfo.total,
        payment_type: paymentType,
        coupon: localStorage.getItem('coupon_id') ?? null,
        shipping_details: showNewShippingAdress ? shippingData : userShippingAddress[selectedAddressIndex ?? 0],
        billing_details: showNewBillingAdress ? billingData  : showNewShippingAdress ? shippingData : userShippingAddress[selectedAddressIndex ?? 0],
      }

      setPaymentPayload(payload);

      // console.log(payload, showNewShippingAdress);


      if (paymentType === 'CARD') {
        setShowModal(true)
      }else if (paymentType === 'ACH/WT') {
        setShowWireTransferModal(true)
        // setShowModal(true)
      } else {
        processPayment(payload);
      }
    }

  };


  const amountInCents = Math.round(paymentPayload?.total * 100);


  const handleShowModal = () => {
    setShowWireTransferModal(true)
    // console.log('showModal')
  }


  if (isLoading) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <Loader/> {/* Replace with your actual loader component */}
      </div>
    );
  }


  // if (isOrderCompleted) {

  // }

  return (
    <>
      {/* breadcrumb */}
      <Breadcrumb pageTitle='Checkout'>
        <ol className='breadcrumb align-items-center justify-content-md-end'>
          <li className='breadcrumb-item' style={{display: 'flex'}}>
            <Link href='/'>Home</Link>
          </li>
          <li className='breadcrumb-item active'>Checkout</li>
        </ol>
      </Breadcrumb>
      <div className='checkout-content space-pt--20 space-pb--r100'>
        <Container>
          {!!cartItems && cartItems?.length >= 0 ? (
            <Row>
              <Col md={7}>
                <div className='heading-s1 space-mb--20'>
                  <h4>Shipping Address</h4>
                </div>
                {userShippingAddress.length > 0 &&

                  <div className='shipping_option space-mb--20'>

                     {userShippingAddress?.map((address, key) => (
                      <div className='custom-radio space-mb--20' key={key}>
                        <input
                          className='form-check-input'
                          required
                          type='radio'
                          name='shipping_option'
                          id={`shipping_option_${key}`}
                          onClick={() => {
                            setSelectedAddressIndex(key);
                            setShowNewShippingAdress(false);
                          }}
                          defaultChecked={address.is_default}
                        />
                        <label
                          className='form-check-label'
                          htmlFor={`shipping_option_${key}`}
                          style={{
                            display: 'inline-block',
                            width: '500px', // Fixed width, adjust as needed
                            whiteSpace: 'normal', // Allows wrapping within fixed width
                            overflow: 'hidden', // Prevents overflow if text is too long
                            textOverflow: 'ellipsis', // Adds ellipsis if text overflows
                          }}
                        >
                          <span style={{ fontSize: '0.875rem', color: '#333' }}>
                            {address.first_name} {address.last_name}, {address.street_address}, {address.city}, {address.country}
                          </span>
                        </label>
                      </div>
                    ))}


      

                    <div className='custom-radio space-mb--20'>
                      <input
                        className='form-check-input'
                        required
                        type='radio'
                        name='shipping_option'
                        id={`billing_option_100`}
                        onClick={() => setShowNewShippingAdress(true)}
                      />
                      <label
                        className='form-check-label'
                        htmlFor={`billing_option_100`}
                        style={{
                          display: 'inline-block',
                          width: '350px',  // Fixed width, adjust as needed
                          whiteSpace: 'normal', // Allows wrapping within fixed width
                          overflow: 'hidden', // Prevents overflow if text is too long
                          textOverflow: 'ellipsis' // Adds ellipsis if text overflows
                        }}
                      >
                          <span style={{fontSize: '0.875rem', color: '#333'}}>
                          Use a different Shipping address
                          </span>
                      </label>
                    </div>

                  </div>
                }
                {
                  showNewShippingAdress &&
                  <form>
                    <div className='mb-3 d-flex justify-content-between'>
                      <div className='form-group me-3 flex-grow-1'>
                        <label htmlFor='first_name'>First Name *</label>
                        <input
                          type='text'
                          required
                          className='form-control'
                          name='first_name'
                          id='first_name'
                          placeholder='Enter First Name'
                          onChange={(e) => {
                            setShippingData({...shippingData, first_name: e.target.value});
                            // Clear the error for first_name if it exists
                            if (errors.first_name) {
                              setErrors((prevErrors) => ({...prevErrors, first_name: ''}));
                            }
                          }}
                        />
                        {errors?.first_name && <span style={{color: '#FE5353'}}>{errors?.first_name}</span>}
                      </div>
                      <div className='form-group flex-grow-1'>
                        <label htmlFor='last_name'>Last Name *</label>
                        <input
                          type='text'
                          required
                          className='form-control'
                          name='last_name'
                          id='last_name'
                          placeholder='Enter Last Name'
                          onChange={(e) => {
                            setShippingData({...shippingData, last_name: e.target.value});

                            // Clear the error for last_name if it exists
                            if (errors.last_name) {
                              setErrors((prevErrors) => ({...prevErrors, last_name: ''}));
                            }
                          }}
                        />
                        {errors?.last_name && <span style={{color: '#FE5353'}}>{errors?.last_name}</span>}
                      </div>
                    </div>

                    <div className='mb-3 d-flex justify-content-between'>
                      <div className='form-group me-3 flex-grow-1'>
                        <label htmlFor='email'>Email *</label>
                        <input
                          type='text'
                          required
                          className='form-control'
                          name='email'
                          id='email'
                          placeholder='Enter Email Address'
                          onChange={(e) => {
                            setShippingData({...shippingData, email: e.target.value});

                            // Clear the error for email if it exists
                            if (errors.email) {
                              setErrors((prevErrors) => ({...prevErrors, email: ''}));
                            }
                          }}
                        />
                        {errors?.email && <span style={{color: '#FE5353'}}>{errors?.email}</span>}
                      </div>
                      <div className='form-group flex-grow-1'>
                        <label htmlFor='phone'>Phone *</label>
                        <input
                          type='text'
                          required
                          className='form-control'
                          name='phone'
                          id='phone'
                          placeholder='Enter Phone Number'
                          onChange={(e) => {
                            setShippingData({...shippingData, phone: e.target.value});

                            // Clear the error for phone if it exists
                            if (errors.phone) {
                              setErrors((prevErrors) => ({...prevErrors, phone: ''}));
                            }
                          }}
                        />
                        {errors?.phone && <span style={{color: '#FE5353'}}>{errors?.phone}</span>}
                      </div>
                    </div>

                    <div className='mb-3 d-flex justify-content-between'>
                      <div className='form-group me-3 flex-grow-1'>
                        <label htmlFor='city'>City *</label>
                        <input
                          type='text'
                          required
                          className='form-control'
                          name='city'
                          id='city'
                          placeholder='Enter city'
                          onChange={(e) => {
                            setShippingData({...shippingData, city: e.target.value});

                            // Clear the error for city if it exists
                            if (errors.city) {
                              setErrors((prevErrors) => ({...prevErrors, city: ''}));
                            }
                          }}
                        />
                        {errors?.city && <span style={{color: '#FE5353'}}>{errors?.city}</span>}
                      </div>

                      <div className='form-group flex-grow-1'>
                        <label htmlFor='province'>Province *</label>
                        <input
                          type='text'
                          required
                          className='form-control'
                          name='province'
                          id='province'
                          placeholder='Enter province'
                          onChange={(e) => {
                            setShippingData({...shippingData, province: e.target.value});

                            // Clear the error for province if it exists
                            if (errors.province) {
                              setErrors((prevErrors) => ({...prevErrors, province: ''}));
                            }
                          }}
                        />
                        {errors?.province && <span style={{color: '#FE5353'}}>{errors?.province}</span>}
                      </div>

                    </div>

                    <div className='mb-3 d-flex justify-content-between'>
                      <div className='form-group me-3 flex-grow-1'>
                        <label htmlFor='country'>Country *</label>
                        <input
                          type='text'
                          required
                          className='form-control'
                          name='country'
                          id='country'
                          placeholder='Enter country'
                          onChange={(e) => {
                            setShippingData({...shippingData, country: e.target.value});

                            // Clear the error for country if it exists
                            if (errors.country) {
                              setErrors((prevErrors) => ({...prevErrors, country: ''}));
                            }
                          }}
                        />
                        {errors?.country && <span style={{color: '#FE5353'}}>{errors?.country}</span>}
                      </div>

                      <div className='form-group flex-grow-1'>
                        <label htmlFor='post_code'>Postal/Zip Code *</label>
                        <input
                          type='text'
                          required
                          className='form-control'
                          name='post_code'
                          id='post_code'
                          placeholder='Enter Postal/Zip Code'
                          onChange={(e) => {
                            setShippingData({...shippingData, post_code: e.target.value});

                            // Clear the error for post_code if it exists
                            if (errors.post_code) {
                              setErrors((prevErrors) => ({...prevErrors, post_code: ''}));
                            }
                          }}
                        />
                        {errors?.post_code && <span style={{color: '#FE5353'}}>{errors?.post_code}</span>}
                      </div>
                    </div>

                    <div className='mb-3 '>
                      <div className='form-group'>
                        <label htmlFor='street_address'>Street Address *</label>
                        <input
                          className='form-control'
                          required
                          type='text'
                          name='street_address'
                          id='street_address'
                          placeholder='Enter Street Address'
                          onChange={(e) => {
                            setShippingData({...shippingData, street_address: e.target.value});

                            // Clear the error for street_address if it exists
                            if (errors.street_address) {
                              setErrors((prevErrors) => ({...prevErrors, street_address: ''}));
                            }
                          }}
                        />
                        {errors?.street_address && <span style={{color: '#FE5353'}}>{errors?.street_address}</span>}
                      </div>
                    </div>
                  </form>
                }


                <div className='heading-s1 space-mb--20'>
                  <h4>Billing Address</h4>
                </div>

                <div className='billing_option space-mb--20'>
                  <div className='custom-radio space-mb--20'>
                    <input
                      className='form-check-input'
                      required
                      type='radio'
                      name='billing_option'
                      id='billing_option1'
                      onClick={() => SetShowNewBillingAdress(false)}
                      defaultChecked
                    />

                    <label
                      className='form-check-label'
                      htmlFor={`billing_option1`}
                      style={{
                        display: 'inline-block',
                        width: '350px',  // Fixed width, adjust as needed
                        whiteSpace: 'normal', // Allows wrapping within fixed width
                        overflow: 'hidden', // Prevents overflow if text is too long
                        textOverflow: 'ellipsis' // Adds ellipsis if text overflows
                      }}
                    >
                      <span style={{fontSize: '0.875rem', color: '#333'}}>
                      Use a different Shipping address
                      </span>
                    </label>

                    {/* <label className='form-check-label' htmlFor='billing_option1' style={{ fontSize: '0.875rem', color: '#333' }}>
                      Same as shipping address
                    </label> */}
                  </div>
                  <div className='custom-radio space-mb--20'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='billing_option'
                      id='billing_option2'
                      onClick={() => SetShowNewBillingAdress(true)}
                    />

                    <label
                      className='form-check-label'
                      htmlFor={`billing_option2`}
                      style={{
                        display: 'inline-block',
                        width: '350px',  // Fixed width, adjust as needed
                        whiteSpace: 'normal', // Allows wrapping within fixed width
                        overflow: 'hidden', // Prevents overflow if text is too long
                        textOverflow: 'ellipsis' // Adds ellipsis if text overflows
                      }}
                    >
                      <span style={{fontSize: '0.875rem', color: '#333'}}>
                      Use a different Shipping address
                      </span>
                    </label>


                    {/* <label className='form-check-label' htmlFor='billing_option2' style={{ fontSize: '0.875rem', color: '#333' }}>
                      Use a different billing address
                    </label> */}
                  </div>
                </div>

                {showNewBillingAdress && (
                  <form>
                    <div className='mb-3 d-flex justify-content-between'>
                      <div className='form-group me-3 flex-grow-1'>
                        <label htmlFor='first_name'>First Name *</label>
                        <input
                          type='text'
                          required
                          className='form-control'
                          name='first_name'
                          id='first_name'
                          placeholder='Enter First Name'
                          onChange={(e) => {
                            setBillingData({...billingData, first_name: e.target.value});
                            // Clear the error for first_name if it exists
                            if (billingErrors.first_name) {
                              setBillingErrors((BillingErrors) => ({...BillingErrors, first_name: ''}));
                            }
                          }}
                        />
                        {billingErrors?.first_name &&
                          <span style={{color: '#FE5353'}}>{billingErrors?.first_name}</span>}
                      </div>
                      <div className='form-group flex-grow-1'>
                        <label htmlFor='last_name'>Last Name *</label>
                        <input
                          type='text'
                          required
                          className='form-control'
                          name='last_name'
                          id='last_name'
                          placeholder='Enter Last Name'
                          onChange={(e) => {
                            setBillingData({...billingData, last_name: e.target.value});

                            // Clear the error for last_name if it exists
                            if (billingErrors.last_name) {
                              setBillingErrors((BillingErrors) => ({...BillingErrors, last_name: ''}));
                            }
                          }}
                        />
                        {billingErrors?.last_name && <span style={{color: '#FE5353'}}>{billingErrors?.last_name}</span>}
                      </div>
                    </div>

                    <div className='mb-3 d-flex justify-content-between'>
                      <div className='form-group me-3 flex-grow-1'>
                        <label htmlFor='email'>Email *</label>
                        <input
                          type='text'
                          required
                          className='form-control'
                          name='email'
                          id='email'
                          placeholder='Enter Email Address'
                          onChange={(e) => {
                            setBillingData({...billingData, email: e.target.value});

                            // Clear the error for email if it exists
                            if (billingErrors.email) {
                              setBillingErrors((BillingErrors) => ({...BillingErrors, email: ''}));
                            }
                          }}
                        />
                        {billingErrors?.email && <span style={{color: '#FE5353'}}>{billingErrors?.email}</span>}
                      </div>
                      <div className='form-group flex-grow-1'>
                        <label htmlFor='phone'>Phone *</label>
                        <input
                          type='text'
                          required
                          className='form-control'
                          name='phone'
                          id='phone'
                          placeholder='Enter Phone Number'
                          onChange={(e) => {
                            setBillingData({...billingData, phone: e.target.value});

                            // Clear the error for phone if it exists
                            if (billingErrors.phone) {
                              setBillingErrors((BillingErrors) => ({...BillingErrors, phone: ''}));
                            }
                          }}
                        />
                        {billingErrors?.phone && <span style={{color: '#FE5353'}}>{billingErrors?.phone}</span>}
                      </div>
                    </div>

                    <div className='mb-3 d-flex justify-content-between'>
                      <div className='form-group me-3 flex-grow-1'>
                        <label htmlFor='city'>City *</label>
                        <input
                          type='text'
                          required
                          className='form-control'
                          name='city'
                          id='city'
                          placeholder='Enter city'
                          onChange={(e) => {
                            setBillingData({...billingData, city: e.target.value});

                            // Clear the error for city if it exists
                            if (billingErrors.city) {
                              setBillingErrors((BillingErrors) => ({...BillingErrors, city: ''}));
                            }
                          }}
                        />
                        {billingErrors?.city && <span style={{color: '#FE5353'}}>{billingErrors?.city}</span>}
                      </div>

                      <div className='form-group flex-grow-1'>
                        <label htmlFor='province'>Province *</label>
                        <input
                          type='text'
                          required
                          className='form-control'
                          name='province'
                          id='province'
                          placeholder='Enter province'
                          onChange={(e) => {
                            setBillingData({...billingData, province: e.target.value});

                            // Clear the error for province if it exists
                            if (billingErrors.province) {
                              setBillingErrors((BillingErrors) => ({...BillingErrors, province: ''}));
                            }
                          }}
                        />
                        {billingErrors?.province && <span style={{color: '#FE5353'}}>{billingErrors?.province}</span>}
                      </div>

                    </div>

                    <div className='mb-3 d-flex justify-content-between'>
                      <div className='form-group me-3 flex-grow-1'>
                        <label htmlFor='country'>Country *</label>
                        <input
                          type='text'
                          required
                          className='form-control'
                          name='country'
                          id='country'
                          placeholder='Enter country'
                          onChange={(e) => {
                            setBillingData({...billingData, country: e.target.value});

                            // Clear the error for country if it exists
                            if (billingErrors.country) {
                              setBillingErrors((BillingErrors) => ({...BillingErrors, country: ''}));
                            }
                          }}
                        />
                        {billingErrors?.country && <span style={{color: '#FE5353'}}>{billingErrors?.country}</span>}
                      </div>

                      <div className='form-group flex-grow-1'>
                        <label htmlFor='post_code'>Postal/Zip Code *</label>
                        <input
                          type='text'
                          required
                          className='form-control'
                          name='post_code'
                          id='post_code'
                          placeholder='Enter Postal/Zip Code'
                          onChange={(e) => {
                            setBillingData({...billingData, post_code: e.target.value});

                            // Clear the error for post_code if it exists
                            if (billingErrors.post_code) {
                              setBillingErrors((BillingErrors) => ({...BillingErrors, post_code: ''}));
                            }
                          }}
                        />
                        {billingErrors?.post_code && <span style={{color: '#FE5353'}}>{billingErrors?.post_code}</span>}
                      </div>
                    </div>

                    <div className='mb-3 '>
                      <div className='form-group'>
                        <label htmlFor='street_address'>Street Address *</label>
                        <input
                          className='form-control'
                          required
                          type='text'
                          name='street_address'
                          id='street_address'
                          placeholder='Enter Street Address'
                          onChange={(e) => {
                            setBillingData({...billingData, street_address: e.target.value});

                            // Clear the error for street_address if it exists
                            if (billingErrors.street_address) {
                              setBillingErrors((BillingErrors) => ({...BillingErrors, street_address: ''}));
                            }
                          }}
                        />
                        {billingErrors?.street_address &&
                          <span style={{color: '#FE5353'}}>{billingErrors?.street_address}</span>}
                      </div>
                    </div>
                  </form>
                )}
              </Col>
              <Col md={5}>
                <div className='order-review space-mt-mobile-only--40'>
                  <div className='heading-s1 space-mb--20'>
                    <h4>Your Orders</h4>
                  </div>
                  <div className='table-responsive order_table'>
                    <table className='table'>
                      <thead>
                      <tr>
                        <th>Product</th>
                        <th>Total</th>
                      </tr>
                      </thead>
                      <tbody>
                      {cartItems.map((product, i) => {
                        const discountedPrice = getDiscountPrice(product.price, product.discountedPrice).toFixed(2);

                        cartTotalPrice += discountedPrice * product.quantity;
                        return (
                          <tr key={i}>
                            <td>
                              {product.name} <span className='product-qty'>x {product.quantity}</span>
                            </td>
                            <td>${(discountedPrice * product.quantity).toFixed(2)}</td>
                          </tr>
                        );
                      })}
                      </tbody>
                      <tfoot>
                      <tr>
                        <th>Discount</th>
                        <td className='product-subtotal'>{coupon}%</td>
                      </tr>
                      <tr>
                        <th>SubTotal</th>
                        <td className='product-subtotal'>${cartTotalPrice.toFixed(2)}</td>
                      </tr>
                      <tr>
                        <th>Shipping</th>
                        <td>Free Shipping</td>
                      </tr>
                      <tr>
                        <th>Total</th>
                        <td className='product-subtotal'>${cartTotalPrice.toFixed(2)}</td>
                      </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className='payment-method'>
                    <div className='heading-s1 space-mb--20'>
                      <h4>Your Orders</h4>
                    </div>

                    <div className='payment-option space-mb--20'>
                      <div className='custom-radio space-mb--20'>
                        <input
                          className='form-check-input'
                          required
                          type='radio'
                          name='payment-option'
                          id='exampleRadios3'
                          defaultValue='option3'
                          onClick={() => setPaymentType('CARD')}
                          defaultChecked
                        />
                        <label className='form-check-label' htmlFor='exampleRadios3'>
                          Debit/Credit Card
                        </label>
                        <p data-method='option3' className='payment-text'>
                          There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                          alteration..{' '}
                        </p>
                      </div>
                      <div className='custom-radio space-mb--20'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='payment-option'
                          id='exampleRadios4'
                          defaultValue='option4'
                          onClick={() => setPaymentType('ACH/WT')}
                        />
                        <label className='form-check-label' htmlFor='exampleRadios4'>
                          ACH/Wire Transfer
                        </label>
                        <p data-method='option4' className='payment-text'>
                          Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store
                          Postcode.
                        </p>
                      </div>
                      <div className='custom-radio space-mb--20'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='payment-option'
                          id='exampleRadios5'
                          defaultValue='option5'
                          onClick={() => setPaymentType('COD')}
                        />
                        <label className='form-check-label' htmlFor='exampleRadios5'>
                          Cash on Delivery
                        </label>
                        <p data-method='option5' className='payment-text'>
                          Pay via PayPal; you can pay with your credit card if you do not have a PayPal account.
                        </p>
                      </div>
                    </div>
                  </div>
                  <button className='btn btn-gradient btn-block' onClick={handleSquarePayment}>Confirm</button>
                  {/* <button className='btn btn-gradient btn-block' onClick={handleShowModal}>Wire Modal</button> */}
                </div>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col>
                <div className='item-empty-area text-center'>
                  <div className='item-empty-area__icon space-mb--30'>
                    <IoMdCash/>
                  </div>
                  <div className='item-empty-area__text'>
                    <p className='space-mb--30'>No items found in cart to checkout</p>
                    <Link href='/products' className='btn btn-fill-out'>
                      Shop Now
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </div>


      {!isLoading && (
        <Modal show={showModal} onHide={onCloseModal} className='payment-modal-warp' centered size='md'>

          <Modal.Body>
            <Modal.Header closeButton></Modal.Header>

            <div className='payment-option rounded space-mt--20'>

              <h4 className='text-center space-mb--20'>Process payment </h4>
              <PaymentForm
                applicationId='sandbox-sq0idb-TC3lplz4p21u-SzCfAwpmA'
                cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
                  await processSquarePayment(token);
                }}
                createVerificationDetails={() => ({
                  amount: amountInCents.toString(),

                  billingContact: {
                    addressLines: [shippingData.street_address],
                    familyName: shippingData.last_name,
                    givenName: shippingData.first_name,
                    countryCode: 'GB',
                    city: shippingData.city,
                  },
                  currencyCode: 'USD',
                  intent: 'CHARGE',
                })}
                locationId='9PKBD3JCQFH0D'>
                <CreditCard/>
              </PaymentForm>
            </div>

          </Modal.Body>
        </Modal>

      )}


      <Modal show={showWireTransferModal} onHide={onCloseModal} className='product-quickview' centered>
        <Modal.Body>
          <Modal.Header closeButton></Modal.Header>

          <div className='payment-option rounded space-mt--20'>

            <h4 className='text-center space-mb--20'>ACH/WIRE TRANSFER</h4>

            <p>Kindly make your payment directly to our bank account, using your Order ID as the reference. Your order
              will be processed once the funds have cleared. Please ensure you add your transaction ID on the order
              details page.</p>

            <div className="bank-details text-center">
              <h5 className='pb-2'>BANK DETAILS</h5>
              <table className="bank-info table-bordered w-100">
                <tbody>
                <tr>
                  <td className="p-2 m-2">Bank:</td>
                  <td className="p-2 m-2">Chase</td>
                </tr>
                <tr>
                  <td className="p-2 m-2">Account number:</td>
                  <td className="p-2 m-2">615230585</td>
                </tr>
                <tr>
                  <td className="p-2 m-2">Sort code:</td>
                  <td className="p-2 m-2">322271627</td>
                </tr>
                <tr>
                  <td className="p-2 m-2">BIC:</td>
                  <td className="p-2 m-2">CHASUS33</td>
                </tr>
                <tr>
                  <td className="p-2 m-2">IBAN:</td>
                  <td className="p-2 m-2">CHASUS33</td>
                </tr>
                </tbody>
              </table>
            </div>

            <div className="buttons pt-4 d-flex justify-content-end">
              <button className="btn btn-gradient btn-block" onClick={() => setShowWireTransferModal(false)}>CANCEL
              </button>
              <button className="btn btn-gradient btn-block"  onClick={() => processPayment()}>PROCEED</button>
            </div>
          </div>

        </Modal.Body>
      </Modal>

    </>
  );
};

export default Checkout;
