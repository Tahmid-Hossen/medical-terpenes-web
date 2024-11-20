'use client';
import Link from 'next/link';

import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';


import { faArrowsRotate, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';


const PasswordReset = ({resetToken}) => {
  console.log(resetToken)
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const router = useRouter();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    new_password: '',
    confirm_password: '',
    reset_link: resetToken
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
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setLoading(false)
      if (res.status === 400) {
        // Handle 401 Unauthorized
        const {data, message, error} = await res.json();
        if(error){
          setError(message);
        }
        // console.log(data.message)
        return;
      }
      if (res.ok) {
        
        const {error, message} = await res.json();
        if(!error){
          router.push('/auth/login'); // Redirect to a protected route
        }
        
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
      }, 3000); // Clear error after 3 seconds

      return () => clearTimeout(timer); // Cleanup the timer on unmount or if error changes
    }
  }, [error]);

  return (
    <>
      <Breadcrumb pageTitle='Reset Password'>
        <ol className='breadcrumb align-items-center justify-content-md-end'>
          <li className='breadcrumb-item ' style={{display: 'flex'}}>
            <Link href='/public'>Home</Link>
          </li>
          <li className='breadcrumb-item active'>Reset Password</li>
        </ol>
      </Breadcrumb>
      <div className='login-content space-pt--r70 space-pb--r70'>
        <Container>
          <Row className='justify-content-center'>
            <Col xl={6} md={10}>
              <div className='login-wrap'>
                <div className='heading-s1 space-mb--20 align-center text-center'>
                  <h3 style={{fontSize: '32px'}}  className='mb-2'>Reset your password</h3>
                  <p>Please enter a new password</p>
                </div>
                {
                  error &&
                  (<h6 className='align-center text-center' style={{color: '#FE5353'}}> {error}</h6>)
                }

                <div>
                  <form method='post' onSubmit={handleSubmit}>
                 <div className='mb-3'>
                      <div className='form-group'>
                        <label htmlFor='new_password'>
                          New Password<span style={{color: '#FE5353'}}>*</span>
                        </label>
                        <div className='input-group'>
                          <input
                            className='form-control'
                            required
                            type={showPassword ? 'text' : 'password'}
                            name='new_password'
                            id='new_password'
                            placeholder='Enter New Password'
                            onChange={(e) => setFormData({...formData, new_password: e.target.value})}
                            style={{paddingRight: '2.5rem'}} // Add padding to make space for the icon
                          />
                          <span
                            className='input-group-text'
                            style={{
                              position: 'absolute',
                              right: '10px',
                              top: '50%',
                              transform: 'translateY(-50%)',
                              background: 'transparent',
                              border: 'none',
                              cursor: 'pointer',
                              zIndex: 1,
                            }}
                            onClick={togglePasswordVisibility}
                          >
                              <FontAwesomeIcon
                                icon={showPassword ? faEyeSlash : faEye}
                                style={{color: '#999999'}}
                              />
                            </span>
                        </div>
                      </div>
                    </div>

                    <div className='mb-3'>
                      <div className='form-group'>
                        <label htmlFor='confirm_password'>
                          Confirm Password<span style={{color: '#FE5353'}}>*</span>
                        </label>
                        <div className='input-group'>
                          <input
                            className='form-control'
                            required
                            type={showPassword ? 'text' : 'password'}
                            name='confirm_password'
                            id='confirm_password'
                            placeholder='Enter confirm password'
                            onChange={(e) => setFormData({...formData, confirm_password: e.target.value})}
                            style={{paddingRight: '2.5rem'}} // Add padding to make space for the icon
                          />
                          <span
                            className='input-group-text'
                            style={{
                              position: 'absolute',
                              right: '10px',
                              top: '50%',
                              transform: 'translateY(-50%)',
                              background: 'transparent',
                              border: 'none',
                              cursor: 'pointer',
                              zIndex: 1,
                            }}
                            onClick={togglePasswordVisibility}
                          >
                              <FontAwesomeIcon
                                icon={showPassword ? faEyeSlash : faEye}
                                style={{color: '#999999'}}
                              />
                            </span>
                        </div>
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
                          Change New Password
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
          </Row>
        </Container>
      </div>
    </>
  );
};

export default PasswordReset;
