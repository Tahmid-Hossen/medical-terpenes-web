'use client';
import ProductRating from '@/components/Product/ProductRating';
import { getDiscountPrice, getProductCartQuantity } from '@/lib/product';
import { addToCart } from '@/store/slices/cart-slice';
import { addToWishlist, deleteFromWishlist } from "@/store/slices/wishlist-slice";
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import { BiLogoInstagramAlt, BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi';
import { TiSocialFacebook } from 'react-icons/ti';
import { useDispatch } from 'react-redux';

const ProductDescription = ({
                              product,
                              cartItems,
                              wishlistItem,
                              productContentButtonStyleClass,
                              singleProduct,
                            }) => {
  const [selectedProductFormula, setSelectedProductFormula] = useState(
    product?.variation ? product?.variation?.[0].formula : ''
  );
  const [selectedProductVolume, setSelectedProductVolume] = useState(
    product?.variation ? product?.variation?.[0].volume?.[0].name : ''
  );
  const [productStock, setProductStock] = useState(
    product?.variation ? product?.variation?.[0].volume?.[0].stock : product?.stock
  );

  const [quantityCount, setQuantityCount] = useState(1);

  const [productPrice, setProductPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [subProductId, setSubProductId] = useState(null);

  const dispatch = useDispatch();

  const productCartQty = getProductCartQuantity(cartItems, product, selectedProductFormula, selectedProductVolume);


  useEffect(() => {
    if (product?.variation?.length > 0) {
      // Find the selected variation based on the selected formula
      const selectedVariation = product.variation.find(
        (variation) => variation.formula === selectedProductFormula
      );

      // Find the selected volume based on the selected volume name
      const selectedVolume = selectedVariation?.volume?.find(
        (volume) => volume.name === selectedProductVolume
      );

      if (selectedVolume) {
        // Set the price and discounted price
        const price = selectedVolume?.price ?? 0;
        const discountPrice = getDiscountPrice(price, selectedVolume?.discount_price)?.toFixed(2) ?? price;

        setProductPrice(price.toFixed(2)); // Convert price to 2 decimal points
        setDiscountedPrice(discountPrice);
        setSubProductId(selectedVolume.subproduct_id);
      }
    }
  }, [selectedProductFormula, selectedProductVolume, product]);
  
  return (
    <div className='product-content'>
      <h2 className='product-content__title space-mb--10'>{singleProduct?.name}</h2>
      <div className='product-content__price-rating-wrapper space-mb--10' style={{display: 'block'}}>
        <div className='product-content__price d-flex-align-items-center'>
          {product?.discount ? (
            <>
              <span className='price'>${discountedPrice}</span>
              <del>${productPrice}</del>
              <span className='on-sale'>{product?.discount}% Off</span>
            </>
          ) : (
            <span className='price'>${productPrice}</span>
          )}
        </div>
        {product?.rating && product?.rating > 0 ? (
          <div className='product-content__rating-wrap' style={{marginTop: '16px'}}>
            <div className='product-content__rating' style={{color: '#00B5DC !important'}}>
              <ProductRating ratingValue={product?.rating || 4.5}/>
              <span>({product?.ratingCount || 3})</span>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className='product-content__description space-mb--20'>
        <p>{singleProduct?.shortDescription ?? ''}</p>
      </div>

      {/*<div className="product-content__sort-info space-mb--20">
        <ul>
          <li>
            <BsShield /> 1 Year Brand Warranty
          </li>
          <li>
            <AiOutlineReload /> 7 Days Return Policy
          </li>
          <li>
            <GiSwapBag /> Cash on Delivery available
          </li>
        </ul>
      </div>*/}

      {product?.variation ? (
        <>
          {/*Product Variation With Formula and Volume*/}
          <div className="product-content__formula-color">
            {/* Formula Selection */}
            <div className="product-content__volume space-mb--20">
              <div className="product-content__volume__title">Formula</div>
              <div className="product-content__volume__content d-flex">
                {product.variation.map((single, i) => (
                  <Fragment key={i}>
                    <input
                      type="radio"
                      value={single.formula}
                      name="product-formula"
                      id={single.formula}
                      checked={single.formula === selectedProductFormula ? "checked" : ""}
                      onChange={() => {
                        setSelectedProductFormula(single.formula);
                        setSelectedProductVolume(single.volume[0].name);
                        setProductStock(single.volume?.[0]?.stock);
                        setQuantityCount(1);
                      }}
                    />
                    <label htmlFor={single.formula}>
                      {single.formula}
                    </label>
                  </Fragment>
                ))}
              </div>
            </div>

            {/* Volume Selection */}
            <div className="product-content__formula space-mb--20">
              <div className="product-content__formula__title">Volume</div>
              <div className="product-content__formula__content">
                {product.variation &&
                  product.variation.map((single) => {
                    if (single.formula === selectedProductFormula) {
                      // Filter unique volumes based on name and price/discount_price
                      const uniqueVolumes = single.volume.reduce((acc, current) => {
                        const existingVolume = acc.find(v => v.name === current.name);
                        if (!existingVolume ||
                          (existingVolume.price !== current.price ||
                            existingVolume.discount_price !== current.discount_price)) {
                          acc.push(current);
                        }
                        return acc;
                      }, []);

                      return uniqueVolumes.map((singleVolume, i) => (
                        <Fragment key={i}>
                          <input
                            type="radio"
                            value={singleVolume.name}
                            checked={
                              singleVolume.name === selectedProductVolume ? "checked" : ""
                            }
                            id={singleVolume.name}
                            onChange={() => {
                              setSelectedProductVolume(singleVolume?.name);
                              setProductStock(singleVolume?.stock);
                              setQuantityCount(1);
                            }}
                          />
                          <label htmlFor={singleVolume.name}>
                            {singleVolume.name}
                          </label>
                        </Fragment>
                      ));
                    }
                    return null;
                  })}
              </div>
            </div>
          </div>
        </>
      ) : (
        ''
      )}
      <hr/>
      {product?.affiliateLink ? (
        <div className='product-content__quality'>
          <div className='product-content__cart btn-hover'>
            <a href={product?.affiliateLink} target='_blank' className='btn btn-fill-out btn-addtocart'>
              Buy Now
            </a>
          </div>
        </div>
      ) : (
        <Fragment>
          <div
            className={`${
              productContentButtonStyleClass
                ? productContentButtonStyleClass
                : 'product-content__button-wrapper d-flex align-items-center'
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
                    // Check if productStock and productCartQty are valid
                    const availableStock = (productStock || 0) - (productCartQty || 0);

                    if (quantityCount < availableStock) {
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
              onClick={() => {
                console.log("Quantity Count before dispatch:", product);
                dispatch(addToCart({
                  id: product?.id,
                  subproduct_id: subProductId,
                  slug: product?.slug,
                  sku: product?.sku || null,
                  name: product?.name,
                  price: Number(discountedPrice),
                  quantity: quantityCount,
                  formula: selectedProductFormula,
                  volume: selectedProductVolume,
                  productRole: 'Regular'
                }));

                // Reset quantity count to 1 after adding to cart
                setQuantityCount(1);
                setSelectedProductVolume('')
                setSelectedProductFormula('')
              }}
              className='btn btn-addtocart space-ml--10 radius-btn px-3 py-2 btn-radius staggered-animation '>
              <i className='icon-basket-loaded'/> Add To Cart
            </button>

            <button
              className={`product-content__wishlist ${wishlistItem !== undefined ? 'active' : ''}`}
              title={wishlistItem !== undefined ? 'Added to wishlist' : 'Add to wishlist'}
              onClick={() => wishlistItem !== undefined
                ? dispatch(deleteFromWishlist(product.id))
                : dispatch(addToWishlist(product))
              }>
              <i className='icon-heart'/>
            </button>
          </div>
        </Fragment>
      )}
      <hr/>
      <ul className='product-content__product-meta'>
        {/*<li>
          SKU: <span>{product.sku}</span>
        </li>*/}
        <li>
          Category:
          {product?.category &&
            product?.category.map((item, index, arr) => {
              return (
                <Link href='/products' key={index}>
                  {item + (index !== arr.length - 1 ? ', ' : '')}
                </Link>
              );
            })}
        </li>
        <li>
          Tags:
          {product?.tag &&
            product?.tag.map((item, index, arr) => {
              return (
                <Link href='/products' key={index}>
                  {item + (index !== arr.length - 1 ? ', ' : '')}
                </Link>
              );
            })}
        </li>
      </ul>
      <div className='product-content__product-share space-mt--15'>
        <span>Share:</span>
        <ul className='social-icons'>
          <li>
            <a href='#'>
              {/* <IoLogoFacebook /> */}
              <TiSocialFacebook className='text-danger'/>
            </a>
          </li>
          <li>
            <a href='#'>
              {/* <IoLogoTwitter /> */}
              <BiLogoTwitter/>
            </a>
          </li>
          <li>
            <a href='#'>
              {/* <IoLogoInstagram /> */}
              <BiLogoInstagramAlt/>
            </a>
          </li>
          <li>
            <a href='#'>
              <BiLogoLinkedin/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ProductDescription;
