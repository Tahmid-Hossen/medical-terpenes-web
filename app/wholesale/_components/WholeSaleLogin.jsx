'use client';

import { setAuth } from '@/store/slices/auth-slice';
import { faArrowsRotate, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Col, Modal, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const WholeSaleLogin = ({ show, onHide }) => {
    const [showRegistration, setShowRegistration] = useState(true);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone_number: '',
        company_name: '',
        website: '',
        role: 'wholesaler'
    });

    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => setError(null), 3000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };
    const handleChangeOption = (e) => {
        e.preventDefault();
        setShowRegistration(!showRegistration);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        console.log('formData', formData)

        try {
            // const endpoint = showRegistration ? `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/signup` : `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/signin`;
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            console.log('data', data)

            console.log('formData', formData)

            const authPayload = {
                id: data?.data?.id,
                name: formData.name,
                email: formData.email,
                phone_number: formData.phone_number,
                image: formData?.image ?? null,
                role: formData.role
            };
            dispatch(setAuth({ user: authPayload }));
            toast.success('Successfully Registered as a Wholesaler');


            // if (!res.ok) {
            //     throw new Error(data.message || 'An error occurred');
            // }
            //
            // if (showRegistration) {
            //     const authPayload = {
            //         id: data.id,
            //         name: data.name,
            //         email: formData.email,
            //         phone_number: formData.phone_number,
            //         image: data.image ?? null,
            //         role: data.role
            //     };
            //     dispatch(setAuth({ user: authPayload }));
            //     toast.success('Successfully Registered as a Wholesaler');
            // } else {
            //     const authPayload = {
            //         id: data.id,
            //         name: data.name,
            //         email: formData.email,
            //         phone_number: formData.phone_number,
            //         image: data.image ?? null,
            //         role: data.role
            //     };
            //     dispatch(setAuth({ user: authPayload }));
            //     toast.success('Successfully Logged in as a Wholesaler');
            // }

            router.push('/my-account');
        } catch (error) {
            setError(error.message);
            toast.error(error.message)
        } finally {
            setLoading(false);
        }


        // try {
        //     const endpoint = showRegistration ? '/api/auth/signup' : '/api/auth/signin';
        //     const res = await fetch(endpoint, {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify(formData),
        //     });
        //
        //     const data = await res.json();
        //
        //     console.log('formData', formData)
        //
        //     console.log('data', data)
        //
        //     if (!res.ok) {
        //         throw new Error(data.message || 'An error occurred');
        //     }
        //
        //     if (showRegistration) {
        //         const authPayload = {
        //             id: data.id,
        //             name: data.name,
        //             email: formData.email,
        //             phone_number: formData.phone_number,
        //             image: data.image ?? null,
        //             role: data.role
        //         };
        //         dispatch(setAuth({ user: authPayload }));
        //         toast.success('Successfully Registered as a Wholesaler');
        //     } else {
        //         const authPayload = {
        //             id: data.id,
        //             name: data.name,
        //             email: formData.email,
        //             phone_number: formData.phone_number,
        //             image: data.image ?? null,
        //             role: data.role
        //         };
        //         dispatch(setAuth({ user: authPayload }));
        //         toast.success('Successfully Logged in as a Wholesaler');
        //     }
        //
        //     router.push('/my-account');
        // } catch (error) {
        //     setError(error.message);
        //     toast.error(error.message)
        // } finally {
        //     setLoading(false);
        // }
    };

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const renderForm = () => (
        <form onSubmit={handleSubmit}>
            {showRegistration && (
                <>
                    <InputField
                        label="Phone Number"
                        name="phone_number"
                        type="tel"
                        required
                        onChange={handleInputChange}
                    />
                    <InputField
                        label="Full Name"
                        name="name"
                        type="text"
                        required
                        onChange={handleInputChange}
                    />
                </>
            )}
            <InputField
                label="Email"
                name="email"
                type="email"
                required
                onChange={handleInputChange}
            />
            {showRegistration && (
                <Row>
                    <Col md={6}>
                        <InputField
                            label="Company Name (Optional)"
                            name="company_name"
                            type="text"
                            onChange={handleInputChange}
                        />
                    </Col>
                    <Col md={6}>
                        <InputField
                            label="Website (Optional)"
                            name="website"
                            type="url"
                            onChange={handleInputChange}
                        />
                    </Col>
                </Row>
            )}
            <InputField
                label="Password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                onChange={handleInputChange}
                icon={
                    <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                        onClick={togglePasswordVisibility}
                        style={{ cursor: 'pointer', color: '#999999' }}
                    />
                }
            />
            <button
                type="submit"
                className="btn w-100 btn-addtocart staggered-animation radius-btn"
                disabled={loading}
            >
                {loading ? (
                    <FontAwesomeIcon icon={faArrowsRotate} spin />
                ) : (
                    showRegistration ? 'Register' : 'Login'
                )}
            </button>
        </form>
    );

    return (
        <Modal show={show} onHide={onHide} className="wholesale-modal" centered>
            <Modal.Body>
                <Modal.Header closeButton />
                <div className="wholesale-modal__content">
                    <h3 className="wholesale-modal__title heading-s1 space-mb--20 text-center">
                        {showRegistration ? 'Register' : 'Login'}
                    </h3>
                    {error && (
                        <h6 className="text-center" style={{ color: '#FE5353' }}>
                            {error}
                        </h6>
                    )}
                    <Row className="justify-content-center">
                        <Col xl={12} md={12}>
                            {renderForm()}
                            {!showRegistration && (
                                <div className="form-note text-end">
                                    <Link href="#" style={{ color: '#FE5353' }}>
                                        Forgot your password?
                                    </Link>
                                </div>
                            )}
                            <div className={`${!showRegistration ? 'd-flex justify-content-center align-items-center' : 'wholesale-modal__another-option' }  space-mt--15 text-center`}>
                                <span>
                                  {showRegistration
                                      ? 'Already have an account?'
                                      : "Don't Have an Account?"}
                                </span>
                                <button
                                    onClick={handleChangeOption}
                                    className="fw-bolder fs-6 border-0 bg-transparent hover-effect"
                                    style={{ color: showRegistration ? '#FF324D' : '#00CECD' }}
                                >
                                    {showRegistration ? 'Login' : 'Sign Up'}
                                </button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Modal.Body>
        </Modal>
    );
};

const InputField = ({ label, name, type, required, onChange, icon }) => (
    <div className="mb-3">
        <div className="form-group">
            <label htmlFor={name}>
                {label}
                {required && <span style={{ color: '#FE5353' }}>*</span>}
            </label>
            <div className="input-group">
                <input
                    className="form-control"
                    type={type}
                    name={name}
                    id={name}
                    placeholder={`Enter ${label}`}
                    onChange={onChange}
                    required={required}
                />
                {icon && (
                    <span
                        className="input-group-text bg-transparent border-0"
                        style={{
                            position: 'absolute',
                            right: '10px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            zIndex: 101,
                        }}
                    >
                        {icon}
                    </span>
                )}
            </div>
        </div>
    </div>
);

export default WholeSaleLogin;