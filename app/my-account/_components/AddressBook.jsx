"use client"

import { AddNewAddress, getOrderAddress, getOrderAddressById, updateAddress } from "@/services/UserService";
import { useEffect, useState } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import toast from "react-hot-toast";
import { RiEditLine } from "react-icons/ri";

const AddressBook = () => {
  const [userAddress, setUserAddress] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editId, setEditId] = useState(null);



  
    const [errors, setErrors] = useState({});
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
    is_default: true,
  });

  const fetchAddress = async () => {
      try {
        const response = await getOrderAddress();
        if (response.error) {
          throw new Error(response.message);
        }
        console.log(response?.data?.data)
        setUserAddress(response?.data?.data?.addresss);
      } catch (error) {
        console.error("Failed to fetch addresss:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  const fetchAddressById = async (id) => {
      try {
        const response = await getOrderAddressById(id);
        if (response.error) {
          throw new Error(response.message);
        }
        console.log(response?.data?.data)
        setShippingData(response?.data?.data);
      } catch (error) {
        console.error("Failed to fetch addresss:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchAddress();
  }, []);

  async function SubmitAddNewAddress(event)  {
     event.preventDefault();
      try {
        const response = await AddNewAddress(shippingData);
        if (response.error) {
          throw new Error(response.message);
        }

        console.log(response?.data)

        // setProfile(response?.data?.data);
        fetchAddress();
        setShowAddForm(false);
        toast.success(response?.data?.message)
      } catch (error) {
        console.error("Failed to fetch orders:", error);
        // setError(error.message);
      } finally {
        // setLoading(false);
      }
    };
  async function SubmitUpdateAddress(event)  {
     event.preventDefault();
      try {
        const response = await updateAddress(shippingData, editId);
        if (response.error) {
          throw new Error(response.message);
        }

        console.log(response?.data)

        // setProfile(response?.data?.data);
        fetchAddress();
        setShowEditForm(false);
        toast.success(response?.data?.message)
      } catch (error) {
        console.error("Failed to fetch orders:", error);
        // setError(error.message);
      } finally {
        // setLoading(false);
      }
    };



  const openAddForm = () => {
    setShowAddForm(true);
  }
  const closeAddForm = () => {
    setShowAddForm(false);
  }
  const openEditForm = (id) => {
    setEditId(id);
    fetchAddressById(id)
    setShowEditForm(true);

  }
  const closeEditForm = () => {
    setEditId(null)
    setShowEditForm(false);
  }


  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  


  return (
    <div className="account-details-form" style={{ margin: "40px" }}>
        
        {
          showAddForm ?
          (
             <Row>
              <Form  method="post" name="AddNewAddress" onSubmit={SubmitAddNewAddress}>
                 <h5 className="mb-4 border-b-1 border-gray-300 inline-block">Add New Address</h5>

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

                   {/* <div className='mb-3 '>
                    <div className='form-group'>
                      <label htmlFor='street_address'>Select a label for effective delivery: </label>
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
                  </div> */}

                 <Col xs={6}>
                    <Button   type="submit"  className="input-group-text btn-normal btn-sm">
                      Save
                    </Button>
                    <button
                      type="button"
                      className="btn btn-line-fill btn-sm"
                      onClick={closeAddForm}
                    >
                      Cancel
                    </button>
                  </Col>


              </Form>
            </Row>
          ) 
          : 

          showEditForm ?
          (
             <Row>
              <Form  method="post" name="AddNewAddress" onSubmit={SubmitUpdateAddress}>
                <h5 className="mb-4 border-b-1 border-gray-300 inline-block">Edit Address</h5>
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
                        value={shippingData?.first_name}
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
                        value={shippingData?.last_name}
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
                        value={shippingData?.email}
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
                        value={shippingData?.phone}
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
                        value={shippingData?.city}
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
                        value={shippingData?.province}
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
                        value={shippingData?.country}
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
                        value={shippingData?.post_code}
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
                        value={shippingData?.street_address}
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

                   <div className='form-group mt-3'>
                      <label htmlFor='default_address'>Set Default Address</label>
                      <select
                        className='form-control'
                        name='default_address'
                        id='default_address'
                        value={shippingData?.is_default ? 'true' : 'false'}
                        onChange={(e) => setShippingData({ ...shippingData, is_default: e.target.value === 'true' })}
                      >
                        <option value='true'>True</option>
                        <option value='false'>False</option>
                      </select>
                    </div>
                  </div>




                   {/* <div className='mb-3 '>
                    <div className='form-group'>
                      <label htmlFor='street_address'>Select a label for effective delivery: </label>
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
                  </div> */}

                 <Col xs={6}>
                    <Button   type="submit"  className="input-group-text btn-normal btn-sm">
                      Save
                    </Button>
                    <button
                      type="button"
                      className="btn btn-line-fill btn-sm"
                      onClick={closeEditForm}
                    >
                      Cancel
                    </button>
                  </Col>


              </Form>
            </Row>
          ) 
          :

          <>
           <Row>
              <Col lg={12} className="d-flex justify-content-end mb-4  ">
                <Button type="button" onClick={() => {openAddForm()}} className="input-group-text btn-normal btn-sm">
                  Add New Address
                </Button>
              </Col>
            </Row>

            <Row>
            <Col lg={12}>
              <div className='table-responsive mb-4'>
                <table className='table mb-0  '>
                  <thead>
                  <tr className="border-bottom text-center">
                    <th className='product-name'>Full Name</th>
                    <th className='product-name'>Address</th>
                    <th className='product-price'>Postcode</th>
                    <th className='product-name'>Contact</th>
                    <th className='product-name'>Default Address </th>
                    <th className='add-to-cart'>&nbsp;</th>
                  </tr>
                  </thead>
                  <tbody>
                    {userAddress.length > 0 &&
                      userAddress.map((address, key) => {
                        return (
                          <tr key={key} className="border-bottom text-center">
                            <td className="product-name small-text">
                              {address?.first_name} {address?.last_name}
                            </td>
                            <td className="product-price small-text">{address?.street_address}</td>
                            <td className="product-price small-text">{address?.post_code}</td>
                            
                            <td className="product-price small-text">
                              {address?.email} <br />
                              {address?.phone}
                            </td>
                             {address?.is_default ? 
                            <td 
                              className="input-group-text btn btn-sm px-2 py-1 d-flex align-items-center justify-content-center mt-3 border-0"
                              style={{ background: 'linear-gradient(90deg, rgba(0, 206, 205, 0.66) 0%, #00B5DC 50.29%)', color: '#fff' }}
                            >
                              Default Address
                            </td>
                              : 
                               <td className="">
                             
                              </td>
                              }

                            <td className="text-center">
                          <span   onClick={() => openEditForm(address?._id)} className="btn btn-sm"
                                style={{color: "#169CF9", fontSize: "24px"}}>
                            <RiEditLine />
                          </span>
                        </td>

                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </Col>
            </Row>
          </>
        }
       
     
    </div>
  );
};

export default AddressBook;
