"use client"
import {useState} from "react";
import Link from "next/link";
import {IoIosClose} from "react-icons/io";
import {getDiscountPrice} from "@/lib/product";
import Image from "next/image";

const MiniCart = () => {
  const [cartItems, setCartItems] = useState([])
  let cartTotalPrice = 0;
  // const { cartItems } = useSelector((state) => state.cart);
  return (
    <>
      {cartItems.length > 0 ? (
        <div className="cart-box">
          <ul className="cart-list">
            {cartItems.map((product, key) => {
              const discountedPrice = getDiscountPrice(
                product.price,
                product.discount
              ).toFixed(2);
              cartTotalPrice += discountedPrice * product.quantity;
              return (
                <li key={key}>
                  <button
                    className="item-remove"
                    onClick={() => dispatch(deleteFromCart(product.cartItemId))}
                  >
                    <IoIosClose/>
                  </button>
                  <div className="single-item">
                    <div className="single-item__image">
                      <Link href={"/shop/product-details/" + product.slug}>
                        <Image width={100} height={100} src={product.thumbImage[0]} alt="cart_thumb1"/>
                      </Link>
                    </div>
                    <div className="single-item__content">
                      <Link href={"/shop/product-details/" + product.slug}>
                        {product.name}
                      </Link>
                      <span className="cart-quantity">
                        {" "}
                        {product.quantity} x{" "}
                        <span className="cart-amount">
                          {" "}
                          <span className="price-symbol">$</span>
                        </span>
                        {discountedPrice}
                      </span>
                      {product.selectedProductColor &&
                      product.selectedProductSize ? (
                        <div className="cart-variation">
                          <p>Color: {product.selectedProductColor}</p>
                          <p>Size: {product.selectedProductSize}</p>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="cart-footer">
            <p className="cart-total">
              <strong>Subtotal:</strong>{" "}
              <span className="cart-price">
                {" "}
                <span className="price-symbol">$</span>
              </span>
              {cartTotalPrice.toFixed(2)}
            </p>
            <div className="cart-buttons">
              <Link href="/other/cart" className="btn btn-gradient-2 rounded-2 view-cart">
                View Cart
              </Link>
              <Link href="/other/checkout" className="btn btn-gradient rounded-2 checkout">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};


export default MiniCart;
