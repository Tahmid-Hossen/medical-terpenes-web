import Link from "next/link";
import Image from "next/image";
import ProductRating from "@/components/Product/ProductRating";

const PopularItemsWidget = ({product, productPrice, discountedPrice}) => {
  return (
    <li className="widget-product-post">
      <div className="widget-product-post__image">
        <Link href={`products/${product.slug}`}>
          <Image src={product.thumbImage[0]} alt="shop_small1" width={80} height={64}/>
        </Link>
      </div>
      <div className="widget-product-post__content">
        <h6 className="product-title">
          <Link href={`products/${product.slug}`}>
            {product.name}
          </Link>
        </h6>
        <div className="product-price">
          {product.discount ? (
            <>
              <span className="price">${discountedPrice}</span>
              <del>${product?.productPrice}</del>
            </>
          ) : (
            <span className="price">${productPrice}</span>
          )}
        </div>
        <div className="rating-wrap">
          <ProductRating ratingValue={product.rating}/>
        </div>
      </div>
    </li>
  );
};

export default PopularItemsWidget;