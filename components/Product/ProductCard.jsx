'use client';

import ProductRating from '@/components/Product/ProductRating';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';
import {useDispatch} from 'react-redux';

// Dynamically import the ProductModal component
const ProductModal = dynamic(() => import('@/components/Product/ProductModal'), {ssr: false});

const ProductCard = ({product, discountedPrice, productPrice, cartItem, wishlistItem, compareItem, API_URL}) => {
  const [modalShow, setModalShow] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null); // Track the active product for the modal
  const dispatch = useDispatch();
  const subProducts = product?.subProducts || [];
  const prices = subProducts?.map(subProduct => subProduct?.price).filter(price => price > 0);

  // Function to handle opening the modal for a specific product
  const handleAddToCart = (product) => {
    setActiveProduct(product); // Set the active product to show in the modal
    setModalShow(true); // Show the modal
  };

  return (
    <>
      <div className='product-grid d-flex flex-column justify-content-between rounded h-100'>
        <div className='product-grid__image d-flex justify-content-center p-2'>
          <Link href={'/products/' + product?._id}>
            <Image
              style={{width: '100%', height: '100%'}}
              width={180}
              height={150}
              src={product?.image ? `${process.env.NEXT_PUBLIC_API_URL}/public${product?.image}` : '/assets/images/default/default-product.png'}
              alt={product?.name ?? 'N/A'}
            />
          </Link>
          <div className='product-grid__badge-wrapper'>
            {product?.attribute?.Formula === '45' && <span className='pr-flash'>NEW</span>}
            {product?.attribute?.Formula === '100' && <span className='pr-flash bg-danger'>HOT</span>}
            {product?.discount_price && <span className='pr-flash bg-success'>SALE</span>}
          </div>
          <div className='product-grid__action-box'>
            <ul>
              <li>
                <button onClick={() => handleAddToCart(product)} className='d-none d-lg-block'>
                  <i className='icon-eye'/>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className='product-grid__info'>
          <h6 className='product-title text-capitalize'>
            <Link href={'/products/' + product?._id}>{product?.name}</Link>
          </h6>

          <div className='product-price'>
            {prices.length > 0 ? (
              Math.min(...prices) === Math.max(...prices) ? (
                <span className='price'>${Math.min(...prices).toFixed(2)}</span>
              ) : (
                <span className='price'>
                  ${Math.min(...prices).toFixed(2)} – ${Math.max(...prices).toFixed(2)}
                </span>
              )
            ) : (
              <span className='price'>Price Not Available</span>
            )}
          </div>

          <div className='rating-wrap'>
            <ProductRating ratingValue={product?.rating ? product.rating : 4.5}/>
            <span className='rating-num'>(3)</span>
          </div>
          <button
            className={`radius-btn mt-3 px-3 py-2 btn-radius staggered-animation border-0 ${cartItem !== undefined ? 'active' : ''}`}
            onClick={() => handleAddToCart(product)}
            style={{fontSize: '14px'}}>
            <i className='icon-basket-loaded'/> Add To Cart
          </button>
        </div>
      </div>

      {/* product modal, conditionally rendered only when activeProduct is set */}
      {activeProduct && (
        <ProductModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          productId={activeProduct._id}
          discountedPrice={discountedPrice}
          productprice={productPrice}
          cartitem={cartItem}
          wishlistitem={wishlistItem}
          compareitem={compareItem}
        />
      )}
    </>
  );
};

export default ProductCard;
