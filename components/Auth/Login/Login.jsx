'use client';
import Link from 'next/link';

import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';


import { setAuth } from '@/store/slices/auth-slice';
import { faArrowsRotate, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';


const Login = () => {
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const router = useRouter();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
      const res = await fetch(`/api/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setLoading(false)
      if (res.status === 401) {
        // Handle 401 Unauthorized
        const data = await res.json();
        setError(data.message);
        // console.log(data.message)
        return;
      }
      if (res.ok) {
        const {data} = await res.json();
        const authPayload = {
          id: data.id,
          name: data.name,
          email: formData.email,
          phone_number: data.phone_number,
          image: data.image ?? null,
          role: data.role
        }
        console.log(authPayload)

        dispatch(setAuth({user: authPayload}));
         router.back();
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
      }, 3000); // Clear error after 3 seconds

      return () => clearTimeout(timer); // Cleanup the timer on unmount or if error changes
    }
  }, [error]);

  return (
    <>
      <Breadcrumb pageTitle='Login'>
        <ol className='breadcrumb align-items-center justify-content-md-end'>
          <li className='breadcrumb-item' style={{display: 'flex'}}>
            <Link href='/public'>Home</Link>
          </li>
          <li className='breadcrumb-item active'>Login</li>
        </ol>
      </Breadcrumb>
      <div className='login-content space-pt--50 space-pb--50'>
        <Container>
          <Row className='justify-content-center'>
            <Col xl={6} md={10}>
              <div className='login-wrap'>
                <div className='heading-s1 space-mb--20 align-center text-center'>
                  <h3 style={{fontSize: '32px'}}>Login</h3>
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
                          Email<span style={{color: '#FE5353'}}>*</span>
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
                      <div className='form-group'>
                        <label htmlFor='password'>
                          Password<span style={{color: '#FE5353'}}>*</span>
                        </label>
                        <div className='input-group'>
                          <input
                            className='form-control'
                            required
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            id='password'
                            placeholder='Enter Password'
                            onChange={(e) => setFormData({...formData, password: e.target.value})}
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
                          Login
                        </button>
                      )}


                    </div>


                    {/* <div className='mb-3'>
                      <input type='text' required className='form-control' name='email' placeholder='Your Email' />
                    </div>
                    <div className='mb-3'>
                      <input className='form-control' required type='password' name='password' placeholder='Password' />
                    </div> */}
                    <div className='form-note  text-end align-right'>
                      {/* <div className='check-form'>
                        <div className='custom-checkbox'>
                          <input className='form-check-input' type='checkbox' name='checkbox' id='exampleCheckbox1' defaultValue />
                          <label className='form-check-label' htmlFor='exampleCheckbox1'>
                            <span>Remember me</span>
                          </label>
                        </div>
                      </div> */}
                      <Link href='/auth/forget-password' style={{color: '#FE5353'}} className='text-end'>Forgot your password?</Link>
                    </div>


                  </form>
                  {/* <div className='different-login'>
                    <span> or</span>
                  </div>
                  <ul className='btn-login text-center'>
                    <li>
                      <a href='#' className='btn btn-facebook'>
                        <FaFacebookF />
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href='#' className='btn btn-google'>
                        <FaGooglePlusG />
                        Google
                      </a>
                    </li>
                  </ul> */}
                  <div className='form-note text-center space-mt--20'>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Don't Have an Account? <Link href='/auth/register' style={{color: '#00CECD'}}>Sign Up</Link>
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

export default Login;
