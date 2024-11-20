// import Cart from "@/components/Cart/Cart";
import dynamic from "next/dynamic";

const Cart = dynamic(() => import('../../../components/Cart/Cart'), {ssr: false})


const CartPage = () => {
  return (
    <>
      <Cart/>
    </>
  );
};

export default CartPage;