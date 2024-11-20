'use client';
import Link from 'next/link';

import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { setAuth } from '@/store/slices/auth-slice';
import { faArrowsRotate, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';


const Register = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone_number: '',
    company_name: '',
    website: '',
    role: 'customer'
  });

// useEffect(() => {
//     const verifyAuthentication = async () => {
//       try {
//         const response = await fetch('/api/auth/verify-auth');
        
//         if (response.ok) {
//           const data = await response.json();
//           if (data.message === "Authorized") {
//             router.push('/'); 
//             return;
//           }
//         }
        
//         // Redirect to login if not authorized
//         // router.push('/auth/login'); 

//       } catch (error) {
//         console.error("Authentication verification failed:", error);
//         router.push('/auth/login'); // Redirect in case of errors
//       }
//     };

//     verifyAuthentication();
//   }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const res = await fetch(`/api/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      setLoading(false)

      if (res.status === 409) {
        // Handle 401 Unauthorized
        const data = await res.json();
        setError(data.message);
        // console.log(data.message)
        return;
      }

      if (res.ok) {
        const data = await res.json();
        const authPayload = {
              id: data?.data?.id,
              name: formData?.name,
              email: formData?.email,
              phone_number: formData?.phone_number,
              image: formData?.image ?? null,
              role: formData?.role
        };
        dispatch(setAuth({ user: authPayload }));
        toast.success('Successfully Registered');
        router.push('/'); // Redirect to a protected route
        return;
      } else {

        console.error('Login failed');
      }
    } catch (error) {
       setLoading(false)
      console.error('Failed to submit form', error);
      // Show error message to the user
    }
  };

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 3000); // Clear error after 3 seconds

      return () => clearTimeout(timer); // Cleanup the timer on unmount or if error changes
    }
  }, [error]);

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    if(checked){
      setFormData({ ...formData, role: 'wholesaler' })
    }
    
    console.log('Checkbox checked:', checked);
    // You can call your desired function here with the `checked` value
  };




    
  return (
    <>
      <Breadcrumb pageTitle='Register'>
        <ol className='breadcrumb align-items-center justify-content-md-end'>
          <li className='breadcrumb-item' style={{display: 'flex'}}>
            <Link href='/'>Home</Link>
          </li>
          <li className='breadcrumb-item active'>Register</li>
        </ol>
      </Breadcrumb>
      <div className='login-content space-pt--50 space-pb--r100'>
        <Container>
          <Row className='justify-content-center'>
            <Col xl={6} md={10}>
              <div className='login-wrap'>
                <div className='heading-s1 space-mb--20 align-center text-center '>
                  <h3 style={{ fontSize: '32px' }}>Register</h3>
                </div>

                 {
                  error && 
                   (<h6 className='align-center text-center' style={{ color: '#FE5353' }}> {error}</h6>)
                  }

                <div>
                  <form method='post' onSubmit={handleSubmit}>
                    <div className='mb-3 '>
                      <div className='form-group'>
                        <label htmlFor='phone_number'>
                          Phone Number<span style={{ color: '#FE5353' }}>*</span>{' '}
                        </label>
                        <input
                          className='form-control'
                          required
                          type='text'
                          name='phone_number'
                          id='phone_number'
                          placeholder='Phone Number'
                          onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className='mb-3 '>
                      <div className='form-group'>
                        <label htmlFor='name'>
                          Full Name<span style={{ color: '#FE5353' }}>*</span>
                        </label>
                        <input
                          className='form-control'
                          required
                          type='text'
                          name='name'
                          id='name'
                          placeholder='Full Name'
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className='mb-3 '>
                      <div className='form-group'>
                        <label htmlFor='email'>
                          Email<span style={{ color: '#FE5353' }}>*</span>
                        </label>
                        <input
                          className='form-control'
                          required
                          type='email'
                          name='email'
                          id='email'
                          placeholder='Email'
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className='mb-3 d-flex justify-content-between'>
                      <div className='form-group me-3 flex-grow-1'>
                        <label htmlFor='company_name'>Company Name (Optional)</label>
                        <input
                          type='text'
                          className='form-control'
                          name='company_name'
                          id='company_name'
                          placeholder='Company Name'
                          onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                        />
                      </div>
                      <div className='form-group flex-grow-1'>
                        <label htmlFor='website'>Website (Optional)</label>
                        <input
                          type='text'
                          className='form-control'
                          name='website'
                          id='website'
                          placeholder='Website'
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        />
                      </div>
                    </div>

                     <div className='login-footer mb-3'>
                      <div className='check-form'>
                        <div className='custom-checkbox'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            name='checkbox'
                            id='exampleCheckbox1'
                            defaultValue
                            onChange={handleCheckboxChange} // Event handler for checkbox click
                          />
                          <label className='form-check-label' htmlFor='exampleCheckbox1'>
                            <span>Register as a Wholesaler</span>
                          </label>
                        </div>
                      </div>
                    </div>

                      <div className='mb-3'>
                        <div className='form-group'>
                          <label htmlFor='password'>
                            Password<span style={{ color: '#FE5353' }}>*</span>
                          </label>
                          <div className='input-group'>
                            <input
                              className='form-control'
                              required
                              type={showPassword ? 'text' : 'password'}
                              name='password'
                              id='password'
                              placeholder='Enter Password'
                              minLength={6}
                              maxLength={16}
                              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                              style={{ paddingRight: '2.5rem' }} // Add padding to make space for the icon
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
                                style={{ color: '#999999' }}
                              />
                            </span>
                          </div>
                        </div>
                      </div>


                    {/* <div className='mb-3'>
                      <button type='submit' className='btn btn-fill-out btn-block w-100' name='login'>
                        Register
                      </button>
                    </div> */}

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
                      <FontAwesomeIcon icon={faArrowsRotate } spin /> {/* Loader Icon */}
                    </button>
                  ) : (
                    <button
                      type='submit'
                      className='btn  w-100'
                      style={{
                        background: 'linear-gradient(90deg, rgba(0, 206, 205, 0.66) 0%, #00B5DC 50.29%)',
                        color: '#fff',
                      }}
                      name='login'
                    >
                      Register
                    </button>
                  )}

                     
                  </form>
                  {/* <div className="different-login">
                    <span> or</span>
                  </div>
                  <ul className="btn-login text-center">
                    <li>
                      <a href="#" className="btn btn-facebook">
                        <FaFacebookF/>
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="#" className="btn btn-google">
                        <FaGooglePlusG/>
                        Google
                      </a>
                    </li>
                  </ul> */}
                  <div className='form-note text-end space-mt--20'>
                    Already have an account?{' '}
                    <Link href='/auth/login' className='fw-bolder fs-6' style={{ color: '#FF324D' }}>
                      Login
                    </Link>
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

export default Register;
