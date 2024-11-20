"use client"

import React, {useEffect, useState} from 'react';
import WholesaleStore from "@/app/wholesale/_components/WholesaleStore";
import {useSelector} from "react-redux";
import Loader from "@/components/Loader/Loader";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";

const WholesaleStorePage = () => {
  const [wholesaleProducts, setWholesaleProducts] = useState(null);
  const [error, setError] = useState(null);

  const {user} = useSelector(state => state.auth)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/wholesale-products/${user?.id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }

        const data = await response.json();
        setWholesaleProducts(data?.data?.wholesalerProducts);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [user?.id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!wholesaleProducts) {
    return <Loader/>;
  }

  console.log('wholesaleProducts',wholesaleProducts)

  return (
    <>

      {
        wholesaleProducts?.length > 0 ?
        <>
          <WholesaleStore
            wholesaleProducts={wholesaleProducts?.[0]?.products || []}
          />
        </>:
          <>
            <Breadcrumb pageTitle='My Wholesale Store'>
              <ol className='breadcrumb align-items-center justify-content-md-end'>
                <li className='breadcrumb-item'>
                  <Link href='/public'>Home</Link>
                </li>
                <li className='breadcrumb-item active'>My Wholesale Store</li>
              </ol>
            </Breadcrumb>
            <div className="text-center mt-4">
              <h2>Waiting for Admin approval.</h2>
            </div>
          </>
      }
    </>
  );
};

export default WholesaleStorePage;