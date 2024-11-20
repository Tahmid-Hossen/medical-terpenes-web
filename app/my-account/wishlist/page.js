// import Wishlist from "@/components/Wishlist/Wishlist";
import dynamic from "next/dynamic";

const Wishlist = dynamic(() => import('../../../components/Wishlist/Wishlist'), {ssr: false})


const WishlistPage = () => {
  return (
    <>
      <Wishlist/>
    </>
  );
};

export default WishlistPage;