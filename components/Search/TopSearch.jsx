"use client"
import React, {useRef} from 'react';
import {Form, InputGroup} from "react-bootstrap";
import {IoIosSearch} from "react-icons/io";
import {useRouter} from "next/navigation";

const TopSearch = () => {
  const inputRef = useRef(null);
  const router = useRouter();

  const handleSearch = () => {
    const inputValue = inputRef.current.value;
    if (inputValue) {
      // Redirect to search page with the query as a URL parameter
      router.push(`/search?query=${inputValue}`);
    }
    inputRef.current.value = null
  };
  return (
    <div className='d-flex align-items-center justify-content-center justify-content-md-center'>
      <div className='shop-header__center search-form'>
        <input ref={inputRef} type='text' placeholder='Search Products...'
               className='form-control form-control-sm' style={{height: '35px'}}/>
        <button type='button' onClick={handleSearch} className='btn icon-search'>
          <IoIosSearch/>
        </button>
      </div>
    </div>
  );
};

export default TopSearch;


/*


<div className='d-flex align-items-center justify-content-center justify-content-md-center'>
  <InputGroup className='me-2'>
    <Form.Select aria-label='Default Brand Select'>
      <option>All Brands</option>
    </Form.Select>
    <div className='shop-header__center search-form'>
      <input ref={inputRef} type='text' placeholder='Search Products...'
             className='form-control form-control-sm' style={{height: '35px'}}/>
      <button type='button'
              onClick={handleSearch} className='btn icon-search'>
        <IoIosSearch/>
      </button>
    </div>
  </InputGroup>
</div>
 */