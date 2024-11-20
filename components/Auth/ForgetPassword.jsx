'use client';
import Link from 'next/link';

import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';


import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';


const ForgetPassword = () => {
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const router = useRouter();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [resetLinkSend, setResetLinkSend] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
  });


  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      // const res = await fetch(`/api/auth/signin`, {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setLoading(false)
      if (res.status === 400) {
        // Handle 401 Unauthorized
        const {error, data, message} = await res.json();
        setError(message);
        // console.log(data.message)
        return;
      }
      if (res.ok) {
        const {error, data, message} = await res.json();
        setError(message);
        if(!error){
         setResetLinkSend(true); 
        }
        
  
        // router.push('/'); // Redirect to a protected route
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      setLoading(false)
      console.error('Failed to submit form', error);
      // Show error message to the user
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 5000); // Clear error after 3 seconds

      return () => clearTimeout(timer); // Cleanup the timer on unmount or if error changes
    }
  }, [error]);



  return (
    <>
      <Breadcrumb pageTitle='Forget Password'>
        <ol className='breadcrumb align-items-center justify-content-md-end'>
          <li className='breadcrumb-item' style={{display: 'flex'}}>
            <Link href='/public'>Home</Link>
          </li>
          <li className='breadcrumb-item active'>Forget Password</li>
        </ol>
      </Breadcrumb>
      <div className='login-content space-pt--50 space-pb--50'>
        <Container>
          <Row className='justify-content-center'>
            { resetLinkSend ? 
              <Col xl={6} md={10}>
              <div className='login-wrap'>
                <div className='heading-s1 space-mb--20 align-center text-center'>
                   <h3 style={{fontSize: '32px'}} className='mb-4'>Password Reset Link Sent</h3>
                  <p>Password reset link has been sent to your email address. Please check your inbox and follow the instructions to reset your password.</p>
                </div>
              </div>
            </Col>
            :  
            <Col xl={6} md={10}>
              <div className='login-wrap'>
                <div className='heading-s1 space-mb--20 align-center text-center'>
                  <h3 style={{fontSize: '32px'}} className='mb-2'>Forget Password</h3>
                  <p>Enter your email and we will send you a link to reset your password.</p>
                </div>
                {
                  error &&
                  (<h6 className='align-center text-center' style={{color: '#FE5353'}}> {error}</h6>)
                }

                <div>
                  <form method='post' onSubmit={handleSubmit}>
                    <div className='mb-3 '>
                      <div className='form-group'>
                        <label htmlFor='email'>
                          Email Address
                        </label>
                        <input
                          className='form-control'
                          required
                          type='email'
                          name='email'
                          id='email'
                          placeholder='Enter Email Address'
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className='mb-3'>
                      {loading ? (
                        <button
                          type='submit'
                          className='btn  w-100'
                          style={{
                            background: 'linear-gradient(90deg, rgba(0, 206, 205, 0.66) 0%, #00B5DC 50.29%)',
                            color: '#fff',
                          }}
                          name='login'
                          disabled
                        >
                          <FontAwesomeIcon icon={faArrowsRotate} spin/> {/* Loader Icon */}
                        </button>
                      ) : (
                        <button
                          type='submit'
                          className='btn  w-100'
                          style={{
                            background: 'linear-gradient(90deg, rgba(0, 206, 205, 0.66) 0%, #00B5DC 50.29%)',
                            color: '#fff'
                          }}
                          name='login'
                        >
                          Request Reset Link
                        </button>
                      )}


                    </div>
                  </form>
                  <div className='form-note text-center space-mt--20'>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <Link href='/auth/login' style={{color: '#00CECD'}}>Back to login</Link>
                  </div>
                </div>
              </div>
            </Col>
          }
         
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ForgetPassword;
