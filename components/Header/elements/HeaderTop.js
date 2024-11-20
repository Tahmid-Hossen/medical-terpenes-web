'use client';

import TopSearch from "@/components/Search/TopSearch";
import {clearAuth} from "@/store/slices/auth-slice";
import Link from 'next/link';
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import {Col, Container, Row} from 'react-bootstrap';
import {AiOutlineShoppingCart, AiOutlineUser} from 'react-icons/ai';
import {IoIosHeartEmpty} from 'react-icons/io';
import {MdEmail, MdLocalPhone} from 'react-icons/md';
import {useDispatch, useSelector} from 'react-redux';
import {router} from "next/client";

const HeaderTop = ({}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const {wishlistItems} = useSelector((state) => state.wishlist);

  const user = useSelector((state) => state.auth.user);
  const isLoggIn = useSelector((state) => state.auth.isLoggedIn);

  // useEffect(() => {
  //   // Check for authToken in browser cookies
  //   if (!authToken) {
  //     dispatch(clearAuth());
  //   }
  // }, [dispatch]);

  // useEffect(() => {
  //   const authToken = cookies.get('authToken'); // Get the authToken from cookies
  //   if (!authToken) {
  //     dispatch(clearAuth()); // Clear auth if the token doesn't exist
  //   }
  // }, [dispatch]);

  useEffect(() => {
    const checkAuth = async () => {
      const res = await fetch('/api/auth/verify-auth');
      console.log(res);
      if (res.ok) {
        const {message} = await res.json();
        console.log(message);
        if (message === 'Unauthorized') {
          dispatch(clearAuth());
          router.push('/auth/login'); // Redirect to login
        }
      }
    };
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const response = await fetch('http://localhost:3000/api/auth/check', {
      method: 'POST',
      credentials: 'include', // Important: Include credentials to send cookies
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data); // Process the authenticated data here
    } else {
      const errorData = await response.json();
      console.error('Authentication failed:', errorData.message);
    }
  };

  const signout = async () => {
    dispatch(clearAuth());
    try {
      const res = await fetch(`/api/auth/signout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.ok) {

        await router.push('/auth/login'); // Redirect to a protected route
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Failed to form', error);
    }
  };


  return (
    <div className='top-header d-none d-lg-block'>
      <Container>
        <Row className='align-items-center'>
          <Col md={4}>
            <div className='d-flex align-items-center justify-content-center justify-content-md-start'>
              <ul className='contact-detail text-center text-lg-start'>
                <li>
                  <MdEmail/>
                  <span>info@medicalterpenes.com</span>
                </li>
              </ul>
              <ul className='contact-detail text-center text-lg-start'>
                <li>
                  <MdLocalPhone/>
                  <span>123-456-7890</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4}>
            <TopSearch/>
          </Col>
          <Col md={4}>
            <div className='text-center text-md-end'>
              <ul className='header-list'>
                <li>
                  <Link href='/my-account/wishlist' className='nav-link position-relative'>
                    {wishlistItems?.length > 0 && (
                      <span
                        className='wishlist-count position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger'>
                        {wishlistItems.length}
                      </span>
                    )}
                    <IoIosHeartEmpty className='wishlist-icon'/>

                    <span>Wishlist</span>
                  </Link>
                </li>

                <li>
                  {isLoggIn ? (
                    <>
                      <Link href={'/my-account'} prefetch={false}>
                        {/*<AiOutlineUser/>*/}
                        <span>{user.name} </span>
                      </Link>
                      <button
                        onClick={signout}
                        className='radius-btn w-30 border-0 px-3 py-1 my-4 btn-radius staggered-animation custom-btn'>Logout
                      </button>
                    </>
                  ) : (
                    <Link href='/auth/login' prefetch={false}>
                      {/*<AiOutlineUser/>*/}
                      <span>Login</span>
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderTop;
