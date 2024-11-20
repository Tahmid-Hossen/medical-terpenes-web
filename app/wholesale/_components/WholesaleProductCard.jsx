"use client"
import React, {Fragment, useState} from 'react';
import Image from "next/image";
import ProductRating from "@/components/Product/ProductRating";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {addToCart} from "@/store/slices/cart-slice";
import {useDispatch} from "react-redux";
import toast from "react-hot-toast";

const WholesaleProductCard = ({product, productPrice, productId, cartItem, productContentButtonStyleClass}) => {
  const [quantityCount, setQuantityCount] = useState(1);
  const [flavor, setFlavor] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFlavor(e.target.value); // Update state on change
  };

  const handleAddToCart = () => {
    if (!flavor) {
      toast.error('Please add flavour'); // Show toast if flavor is empty
      return;
    }

    dispatch(
      addToCart({
        id: productId,
        slug: product?.slug,
        sku: product?.sku || null,
        name: product?.name,
        price: Number(productPrice),
        quantity: quantityCount,
        formula: flavor,
        volume: '1ml',
        productRole: 'Wholesale'
      })
    );

    setQuantityCount(1); // Reset quantity count after adding to cart
  };

  console.log('product', product)
  return (
    <>
      <div className='product-grid d-flex flex-column justify-content-between rounded w-100 h-100'>
        <h6 className='product-title text-capitalize p-3 pb-0 text-start'>
          {product?.category_name}
        </h6>
        <div className='d-flex justify-content-center p-3'>
          <Image
            style={{width: "100%", height: "100%"}}
            width={180}
            height={150}
            src={
              product?.image
                ? `${process.env.NEXT_PUBLIC_API_URL}/public${product?.image}`
                : "/assets/images/default/default-product.png"
            }
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/assets/images/default/default-product.png";
            }}
            alt={product?.name ?? "N/A"}
          />
        </div>
        <div className='product-grid__info text-start'>
          <h6 className='product-title text-capitalize'>
            {product?.name ?? 'N/A'}
          </h6>
          <div className='rating-wrap space-mb--10'>
            <ProductRating ratingValue={product?.rating ? product.rating : 4.5}/>
            <span className='rating-num'>(3)</span>
          </div>
          {/*<div className='pproduct-content__description space-mb--10'>*/}
          {/*  <p*/}
          {/*    className={"text-wrap text-truncate"}>{product?.shortDescription ?? 'lorem30 asdjasdjkasdqbacakjdakjsdhqjeioqjwejkasdkjajskdajshdkjashdjkhasdkjhaskdjhaksjdhkjasd'}</p>*/}
          {/*</div>*/}

          <div className='space-mb--10'>
            <span className='product-content__wholsalePrice'>${productPrice}</span>
          </div>
          <input
            className="w-100 px-2 py-1 focus-ring-dark"
            placeholder="Mango, Strawbarry..."
            type="text"
            value={flavor}
            onChange={handleChange}
          />
          <>
            <div className={"product-content__wholesale-quantity mt-3 mb-2"}>Quantity</div>
            <div
              className={`${
                productContentButtonStyleClass
                  ? productContentButtonStyleClass
                  : 'product-content__button-wrapper d-flex align-items-center justify-content-between'
              }`}>
              <div className='product-content__quantity'>
                <div className='cart-plus-minus'>
                  {/* Decrement Button */}
                  <button
                    onClick={() => setQuantityCount(quantityCount > 1 ? quantityCount - 1 : 1)}
                    className='qtybutton'>
                    -
                  </button>

                  {/* Display Quantity */}
                  <input
                    className='cart-plus-minus-box'
                    type='text'
                    value={quantityCount}
                    readOnly
                  />

                  {/* Increment Button */}
                  <button
                    onClick={() => {

                      if (quantityCount) {
                        setQuantityCount(quantityCount + 1);
                      }
                    }}
                    className='qtybutton'>
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className='btn btn-addtocart space-ml--10 radius-btn px-3 py-2 btn-radius staggered-animation '>
                <i className='icon-basket-loaded'/> Add To Cart
              </button>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default WholesaleProductCard;