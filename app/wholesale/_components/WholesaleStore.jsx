"use client"
import React from 'react';
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import ShopProducts from "@/components/Product/ShopProducts";
import WholesaleProductList from "@/app/wholesale/_components/WholesaleProductList";

const WholesaleStore = ({wholesaleProducts}) => {
  return (
    <>
      <Breadcrumb pageTitle='My Wholesale Store'>
        <ol className='breadcrumb align-items-center justify-content-md-end'>
          <li className='breadcrumb-item'>
            <Link href='/public'>Home</Link>
          </li>
          <li className='breadcrumb-item active'>My Wholesale Store</li>
        </ol>
      </Breadcrumb>
      {
        wholesaleProducts?.length >= 0 ?
          (
            <WholesaleProductList layout='grid' products={wholesaleProducts}/>
          )
          : (
            <div className="text-center">
              <h2>No products found.</h2>
            </div>
          )
      }

    </>
  );
};

export default WholesaleStore;